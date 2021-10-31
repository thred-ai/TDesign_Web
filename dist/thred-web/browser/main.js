(self["webpackChunkthred_web"] = self["webpackChunkthred_web"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



var routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./landing/landing.module */ 68721)).then((m) => m.LandingModule) },
    { path: 'not-found', redirectTo: '', pathMatch: 'full' },
    { path: 'not-found/home', redirectTo: '', pathMatch: 'full' },
    { path: ':user', redirectTo: '/:user/home', pathMatch: 'full' },
    { path: ':user/home', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomeModule) },
    { path: ':user/about', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 46985)).then((m) => m.AboutModule) },
    { path: ':user/products', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shop/shop.module */ 7838)).then((m) => m.ShopModule) },
    // { path: ':user/blogs', module:  BlogsModule},
    { path: ':user/products/:product', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("src_app_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 11589)).then((m) => m.ProductModule) },
    { path: ':user/orders/:order', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view-order-info_view-order-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view-order-info/view-order-info.module */ 2119)).then((m) => m.ViewOrderInfoModule) },
    { path: ':user/orders', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view-order_view-order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view-order/view-order.module */ 85456)).then((m) => m.ViewOrderModule) },
    // { path: ':user/blogs/:article', module:  ArticleModule},
    { path: ':user/cart', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 12943)).then((m) => m.CartModule) },
    { path: ':user/shipping-address', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_shipping-address_shipping-address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shipping-address/shipping-address.module */ 40630)).then((m) => m.ShippingAddressModule) },
    { path: ':user/billing-info', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_billing-info_billing-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./billing-info/billing-info.module */ 80538)).then((m) => m.BillingInfoModule) },
    { path: ':user/my-store/billing', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_billing-admin_billing-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./billing-admin/billing-admin.module */ 37336)).then((m) => m.BillingAdminModule) },
    { path: ':user/review-order', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 28400)).then((m) => m.CheckoutModule) },
    { path: ':user/not-found', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_invalid-page_invalid-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invalid-page/invalid-page.module */ 1436)).then((m) => m.InvalidPageModule) },
    { path: ':user/my-store', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("src_app_admin-view_admin-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-view/admin-view.module */ 41674)).then((m) => m.AdminViewModule) },
    { path: 'not-found/404', redirectTo: '', pathMatch: 'full' },
    { path: ':user/:404', redirectTo: '/:user/not-found' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled',
                paramsInheritanceStrategy: 'always'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ 37503);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop/shop.component */ 3006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ 44918);
/* harmony import */ var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-order/view-order.component */ 81821);
/* harmony import */ var _view_order_info_view_order_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-order-info/view-order-info.component */ 36352);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 98458);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/load.service */ 6029);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/routing.service */ 78078);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
















function AppComponent_nav_0_li_15_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_li_15_li_9_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const type_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r9.applyProductFilter(type_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r7.storeInfo().fontName)("color", ctx_r7.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.titleCase(type_r8.templateDisplayName));
  }
}

function AppComponent_nav_0_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "SHOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_li_15_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r11.applyProductFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "All Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, AppComponent_nav_0_li_15_li_9_Template, 3, 6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r1.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r1.selectedTheme().color)("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.availableTemplates());
  }
}

function AppComponent_nav_0_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_ng_template_16_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r13.routeToShop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "SHOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName);
  }
}

function AppComponent_nav_0_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_li_22_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const currency_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r16.updateCurrency(currency_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const currency_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r4.selectedTheme().color)("font-family", ctx_r4.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", currency_r15.name, " ", currency_r15.flag, "");
  }
}

function AppComponent_nav_0_li_24_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_li_24_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r20.routeToOrders();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r18.selectedTheme().color)("font-family", ctx_r18.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](option_r19.Title);
  }
}

function AppComponent_nav_0_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_li_24_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r22.accountPressed();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, AppComponent_nav_0_li_24_li_8_Template, 3, 6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("src", "/assets/account_", ctx_r5.storeInfo().colorStyle.text_code, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r5.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r5.selectedTheme().color)("font-family", ctx_r5.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.settings(false)[0].Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.settings(true));
  }
}

function AppComponent_nav_0_li_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_li_25_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r24.routeToCart();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " MY BAG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r6.selectedCurrency() == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r6.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate2"]("badge bg-", ctx_r6.storeInfo().colorStyle.text_code, " text-", ctx_r6.storeInfo().colorStyle.back_code, " ms-1 rounded-pill");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.cartLength());
  }
}

function AppComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r26.routeToHome();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r28.routeToHome();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "HOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r29.routeToAbout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "ABOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, AppComponent_nav_0_li_15_Template, 10, 11, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, AppComponent_nav_0_ng_template_16_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, AppComponent_nav_0_li_22_Template, 3, 7, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, AppComponent_nav_0_li_24_Template, 9, 11, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, AppComponent_nav_0_li_25_Template, 5, 13, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](17);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate2"]("navbar navbar-expand-lg navbar-", ctx_r0.storeInfo().colorStyle.back_code, " bg-", ctx_r0.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r0.storeInfo().username == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r0.storeInfo().profileLink, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("navbar-brand px-2 text-", ctx_r0.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("smallTitle", ctx_r0.isMobile())("bigTitle", !ctx_r0.isMobile());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.storeInfo().fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isShopComponent())("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r0.selectedCurrency() == undefined || !ctx_r0.shouldShowCurrency());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((tmp_13_0 = (tmp_13_0 = ctx_r0.selectedCurrency()) == null ? null : tmp_13_0.flag) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r0.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.availableCurrencies());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.hideCart());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.hideCart());
  }
}

class AppComponent {
  constructor(platformID, cdr, router, loadService, routingService, modalService, _router) {
    this.platformID = platformID;
    this.cdr = cdr;
    this.router = router;
    this.loadService = loadService;
    this.routingService = routingService;
    this.modalService = modalService;
    this._router = _router;
    this.title = 'thred-web';
    this.mode = "All Products";
    this.profileSettings = [];
    this.cart = undefined;
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

  changeIcon() {
    document.getElementById('appIcon').setAttribute('href', 'https://www.google.com/favicon.ico');
  }

  setOptions() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.profileSettings = [];
      var option = {
        "Title": "My Account",
        "Link": "/" + "STORE_NAME" + "/my-store",
        "Function": _this.routeToProfile
      };
      var option2 = {
        "Title": "View Orders",
        "Link": "/" + "STORE_NAME" + "/orders",
        "Function": _this.routeToOrders
      }; // if (!(await this.loadService.isLoggedIn())?.uid){
      //   option = {
      //     "Title": "My Account",
      //     "Link" : "/" + "STORE_NAME" + "/my-store",
      //   }
      // }

      _this.profileSettings = [option, option2];
    })();
  }

  closeBtn(result) {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.modalService.dismissAll("success")
      var _a;

      if ((yield _this2.loadService.authenticated()) && !((_a = yield _this2.loadService.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
        _this2.routeToProfile();
      } else {
        _this2.routeToHome();
      }
    })();
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

  reloadCurrentRoute() {
    const currentUrl = this._router.url;

    this._router.navigateByUrl('/', {
      skipLocationChange: true
    }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }

  isAdmin() {
    var _a, _b, _c;

    return (_c = (_b = (_a = this.router.snapshot.firstChild) === null || _a === void 0 ? void 0 : _a.routeConfig) === null || _b === void 0 ? void 0 : _b.path) === null || _c === void 0 ? void 0 : _c.includes("my-store");
  }

  isOrder() {
    var _a, _b, _c;

    return (_c = (_b = (_a = this.router.snapshot.firstChild) === null || _a === void 0 ? void 0 : _a.routeConfig) === null || _b === void 0 ? void 0 : _b.path) === null || _c === void 0 ? void 0 : _c.includes("orders");
  }

  routeToProfile(selected) {
    var _a, _b, _c, _d, _e, _f;

    if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _a === void 0 ? void 0 : _a.username) {
      this.loadService.myCallback = undefined;

      if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.uid != ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _b === void 0 ? void 0 : _b.uid)) {
        _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo = JSON.parse(JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo));

        if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo.customURL && _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo.customURL.host != "") {
          this.routingService.routeToProfile((_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _c === void 0 ? void 0 : _c.username, this.getStoreName().isCustom, selected, (_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _d === void 0 ? void 0 : _d.customURL.fullURL());
        } else {
          if (this.getStoreName().isCustom) {
            this._router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(() => {
              var _a, _b;

              this.routingService.routeToProfile((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _a === void 0 ? void 0 : _a.username, this.getStoreName().isCustom, selected, "https://shopmythred.com/" + ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _b === void 0 ? void 0 : _b.username));
            });
          } else {
            this._router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(() => {
              var _a;

              this.routingService.routeToProfile((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _a === void 0 ? void 0 : _a.username, this.getStoreName().isCustom, selected);
            });
          }
        }
      } else {
        if ((_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.username) {
          if (this.isAdmin()) {
            this.reloadCurrentRoute();
          } else {
            this.routingService.routeToProfile((_f = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _f === void 0 ? void 0 : _f.username, this.getStoreName().isCustom, selected);
          }
        }
      }
    } else {
      console.log("not");

      this.loadService.myCallback = () => this.routeToProfile();

      this.loadService.getCustomer();
    }
  }

  getCart() {
    if (this.cart == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
      console.log("Getting Cart");
      this.loadService.getCart(false, cart => {
        this.cart = cart;
        console.log(cart);
      });
    }
  }

  getStoreName() {
    var request = "";

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformServer)(this.platformID)) {
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

  routeToHome() {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) this.routingService.routeToHome(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToOrders() {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) this.routingService.routeToOrders(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToShop() {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) this.routingService.routeToShop(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToAbout() {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) this.routingService.routeToAbout(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToCart() {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) this.routingService.routeToCart(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToProduct(productID) {
    var _a;

    if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.username) this.routingService.routeToProduct(productID, _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToOrder(orderID) {
    var _a;

    if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.username) this.routingService.routeToProduct(orderID, _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToShipping() {
    var _a;

    if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.username) this.routingService.routeToShipping(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToBilling() {
    var _a;

    if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.username) this.routingService.routeToBilling(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToBillingAdmin() {
    var _a;

    if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.username) this.routingService.routeToBillingAdmin(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  routeToReview() {
    var _a;

    if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.username) this.routingService.routeToReview(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username, this.getStoreName().isCustom);
  }

  accountPressed() {
    var _this3 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      if ((yield _this3.loadService.authenticated()) && !((_a = yield _this3.loadService.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
        _this3.routeToProfile();
      } else {
        if (!_this3.isOrder()) {
          if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies == undefined || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies == [] || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableTemplates == undefined || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableTemplates == [] || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.orders == [] || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username == undefined || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username == "" || (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformServer)(_this3.platformID)) {
            return;
          }
        }

        if (!_this3.modalService.hasOpenModals()) {
          const modalRef = _this3.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, {
            size: "lg"
          });

          let sub = modalRef.dismissed.subscribe(result => {
            _this3.closeBtn(result);

            console.log("man");
            sub.unsubscribe();
          });
          modalRef.componentInstance.authMode = 1;
        }
      }
    })();
  }

  settings(popFirst) {
    var _a, _b;

    if (popFirst) {
      return (_a = this.profileSettings.slice(1)) !== null && _a !== void 0 ? _a : [];
    }

    return (_b = this.profileSettings) !== null && _b !== void 0 ? _b : [];
  }

  storeLink(link) {
    var _a;

    return link.replace("STORE_NAME", (_a = this.storeInfo().username) !== null && _a !== void 0 ? _a : "");
  }

  cartLength() {
    var _a, _b;

    if (((_a = this.cart) === null || _a === void 0 ? void 0 : _a.length) == 0) {
      return "0";
    }

    var totalCount = 0;
    (_b = this.cart) === null || _b === void 0 ? void 0 : _b.forEach(product => {
      var _a;

      totalCount += (_a = product.quantity) !== null && _a !== void 0 ? _a : 0;
    });
    return totalCount;
  }

  updateCurrency(currency) {
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency = currency;

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
      localStorage.setItem("LOCAL_CURRENCY", currency.currency_name);
    }

    this.cdr.detectChanges();
  }

  viewCart() {
    const modalRef = this.modalService.open(_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__.CartComponent, {
      size: "lg"
    }); // modalRef.componentInstance.authMode = 1
  } // ?product_type=Dresses


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

  isMobile() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
      let height = window.innerHeight;
      let width = window.innerWidth;
      return width < height;
    }

    return false;
  }

  getCurrencyForCountry(country, shouldShowName) {
    var returnItem = country.currency_symbol;
    if (shouldShowName) returnItem = country.name + " " + returnItem;
    return returnItem;
  }

  applyProductFilter(template) {
    var _a;

    let id = template === null || template === void 0 ? void 0 : template.productCode;
    this.mode = this.titleCase((_a = template === null || template === void 0 ? void 0 : template.templateDisplayName) !== null && _a !== void 0 ? _a : "All Products");

    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
      this.loadService.myCallback = () => this.cdr.detectChanges(); // this.loadService.getPosts(id)


      this.loadService.getPosts(products => {
        this.loadService.setFilterProducts(products);
      }, id);
    }
  }

  isShopComponent() {
    var _a, _b, _c, _d;

    let config = (_d = (_c = (_b = (_a = this.router.snapshot.firstChild) === null || _a === void 0 ? void 0 : _a.routeConfig) === null || _b === void 0 ? void 0 : _b.path) === null || _c === void 0 ? void 0 : _c.split('/')) !== null && _d !== void 0 ? _d : [];
    return config[config.length - 1] == "products";
  }

  shouldShowCurrency() {
    // return this.loadService.shouldShowCurrency
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;

    let product = (_a = this.router.snapshot.firstChild) === null || _a === void 0 ? void 0 : _a.paramMap.get('product');
    return ((_b = this.router.snapshot.firstChild) === null || _b === void 0 ? void 0 : _b.params) == _shop_shop_component__WEBPACK_IMPORTED_MODULE_2__.ShopComponent || product != undefined || ((_e = (_d = (_c = this.router.snapshot.firstChild) === null || _c === void 0 ? void 0 : _c.routeConfig) === null || _d === void 0 ? void 0 : _d.path) === null || _e === void 0 ? void 0 : _e.includes("products")) || ((_h = (_g = (_f = this.router.snapshot.firstChild) === null || _f === void 0 ? void 0 : _f.routeConfig) === null || _g === void 0 ? void 0 : _g.path) === null || _h === void 0 ? void 0 : _h.includes("home")) || ((_l = (_k = (_j = this.router.snapshot.firstChild) === null || _j === void 0 ? void 0 : _j.routeConfig) === null || _k === void 0 ? void 0 : _k.path) === null || _l === void 0 ? void 0 : _l.includes("cart")) || ((_p = (_o = (_m = this.router.snapshot.firstChild) === null || _m === void 0 ? void 0 : _m.routeConfig) === null || _o === void 0 ? void 0 : _o.path) === null || _p === void 0 ? void 0 : _p.includes("shipping-address")) || ((_s = (_r = (_q = this.router.snapshot.firstChild) === null || _q === void 0 ? void 0 : _q.routeConfig) === null || _r === void 0 ? void 0 : _r.path) === null || _s === void 0 ? void 0 : _s.includes("billing-info")) || ((_v = (_u = (_t = this.router.snapshot.firstChild) === null || _t === void 0 ? void 0 : _t.routeConfig) === null || _u === void 0 ? void 0 : _u.path) === null || _v === void 0 ? void 0 : _v.includes("review-order")) || ((_y = (_x = (_w = this.router.snapshot.firstChild) === null || _w === void 0 ? void 0 : _w.routeConfig) === null || _x === void 0 ? void 0 : _x.path) === null || _y === void 0 ? void 0 : _y.includes("my-store"));
  }

  hideCart() {
    var _a, _b;

    return ((_a = this.router.snapshot.firstChild) === null || _a === void 0 ? void 0 : _a.component) == _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_4__.ViewOrderComponent || ((_b = this.router.snapshot.firstChild) === null || _b === void 0 ? void 0 : _b.component) == _view_order_info_view_order_info_component__WEBPACK_IMPORTED_MODULE_5__.ViewOrderInfoComponent;
  }

  isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID);
  }

  titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    } // Directly return the joined string


    return splitStr.join(' ');
  }

  setFavIcon(link) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) document.getElementById('appIcon').setAttribute('href', link);
  }

  ngOnInit() {
    // this.setFavIcon("https://www.thredapps.com/favicon.ico")
    // OR 
    this.loadService.rootComponent = this;
    this.setOptions();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_7__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_8__.RoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 1,
  consts: [[3, "hidden", "class", 4, "ngIf"], [3, "hidden"], [1, "container", "px-4", "px-lg-5"], [3, "src"], ["role", "button", 3, "click"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "mt-2"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "ms-lg-4"], [1, "nav-item"], ["data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", "aria-current", "page", "role", "button", 1, "nav-link", 3, "click"], ["data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", "role", "button", 1, "nav-link", 3, "click"], ["class", "nav-item dropdown", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "nav-item", "dropdown", 3, "hidden"], ["id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "navbar-nav", "me-0", "mb-2", "ms-auto", "mb-lg-0", "ms-lg-0"], ["class", "d-flex", 4, "ngIf"], ["class", "d-flex mt-1 mb-1", 3, "hidden", 4, "ngIf"], [1, "nav-item", "dropdown"], ["data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", "role", "button", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "d-flex"], ["id", "navbarDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "me-2"], [1, "rounded-circle", 3, "src"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "mb-2"], [1, "d-flex", "mt-1", "mb-1", 3, "hidden"], ["data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", "role", "button", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 26, 30, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "router-outlet");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isBrowser());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
  styles: ["img[_ngcontent-%COMP%] {\n    max-width:30px;\n    height:auto;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n.smallTitle[_ngcontent-%COMP%]{\nfont-size: 4.5vw;\n}\n\n.bigTitle[_ngcontent-%COMP%]{\nfont-size: 1.25vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7RUFDaEI7O0FBRUY7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIG1heC13aWR0aDozMHB4O1xuICAgIGhlaWdodDphdXRvO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbi5zbWFsbFRpdGxle1xuZm9udC1zaXplOiA0LjV2dztcbn1cblxuLmJpZ1RpdGxle1xuZm9udC1zaXplOiAxLjI1dnc7XG59Il19 */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ 37503);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.module */ 80107);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-stripe */ 72284);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-dialog/popup-dialog.component */ 57207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);








// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

// import { ShopModule } from './shop/shop.module';
// import { BlogsModule } from './blogs/blogs.module';
// import { HomeModule } from './home/home.module';
// import { AboutModule } from './about/about.module';
// import { ProductModule } from './product/product.module';
// import { ModelViewerComponent } from './model-viewer/model-viewer.component';
// import { SafeHtmlPipe } from './safeHtml.pipe'
// import { HttpClientModule } from '@angular/common/http';

// import { ArticleModule } from './article/article.module';

// import { SignupComponent } from './signup/signup.component'

// import { CartModule } from './cart/cart.module';
// import { ShippingAddressModule } from './shipping-address/shipping-address.module';
// import { MatButtonModule } from '@angular/material/button';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatCardModule } from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';


// import { ViewOrderModule } from './view-order/view-order.module';
// import { AdminViewModule } from './admin-view/admin-view.module';
// import { ViewOrderInfoModule } from './view-order-info/view-order-info.module';








// import { ImageCropperModule } from 'ngx-image-cropper';
// import { CropperComponent } from './cropper/cropper.component';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { LandingModule } from './landing/landing.module';
// import { ColorPickerModule } from 'ngx-color-picker';
// import { DesignComponent } from './design/design.component';
// import { InvalidPageModule } from './invalid-page/invalid-page.module';
// import { CheckoutModule } from './checkout/checkout.module';
class AppModule {
    constructor(router) {
        var request = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.URL;
        if (globalThis.location) {
            request = globalThis.location.host;
        }
        if (request != 'localhost:4200' && request != 'shopmythred.com' && request != "") {
            console.log("URL: " + request);
            router.config = [
                { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomeModule) },
                { path: 'not-found', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_invalid-page_invalid-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invalid-page/invalid-page.module */ 1436)).then((m) => m.InvalidPageModule), pathMatch: 'full' },
                { path: 'not-found/home', redirectTo: 'not-found', pathMatch: 'full' },
                { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomeModule) },
                { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 46985)).then((m) => m.AboutModule) },
                { path: 'products', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shop/shop.module */ 7838)).then((m) => m.ShopModule) },
                // { path: ':user/blogs', module:  BlogsModule},
                { path: 'products/:product', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("src_app_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 11589)).then((m) => m.ProductModule) },
                { path: 'orders/:order', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view-order-info_view-order-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view-order-info/view-order-info.module */ 2119)).then((m) => m.ViewOrderInfoModule) },
                { path: 'orders', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view-order_view-order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view-order/view-order.module */ 85456)).then((m) => m.ViewOrderModule) },
                // { path: ':user/blogs/:article', module:  ArticleModule},
                { path: 'cart', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 12943)).then((m) => m.CartModule) },
                { path: 'shipping-address', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_shipping-address_shipping-address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shipping-address/shipping-address.module */ 40630)).then((m) => m.ShippingAddressModule) },
                { path: 'billing-info', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_billing-info_billing-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./billing-info/billing-info.module */ 80538)).then((m) => m.BillingInfoModule) },
                { path: 'my-store/billing', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_radio_js"), __webpack_require__.e("src_app_billing-admin_billing-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./billing-admin/billing-admin.module */ 37336)).then((m) => m.BillingAdminModule) },
                { path: 'review-order', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 28400)).then((m) => m.CheckoutModule) },
                { path: 'my-store', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_input_js-node_modules_angular_mat-aaf696"), __webpack_require__.e("src_app_admin-view_admin-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-view/admin-view.module */ 41674)).then((m) => m.AdminViewModule) },
                { path: '404', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./landing/landing.module */ 68721)).then((m) => m.LandingModule), pathMatch: 'full' },
            ];
        }
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_3__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
            _login_login_module__WEBPACK_IMPORTED_MODULE_4__.LoginModule,
            // NgxAwesomePopupModule.forRoot(),
            // ConfirmBoxConfigModule.forRoot(),
            ngx_stripe__WEBPACK_IMPORTED_MODULE_18__.NgxStripeModule.forRoot('pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK'),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_5__.PopupDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_fire__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _login_login_module__WEBPACK_IMPORTED_MODULE_4__.LoginModule, ngx_stripe__WEBPACK_IMPORTED_MODULE_18__.NgxStripeModule] }); })();


/***/ }),

/***/ 44918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/routing.service */ 78078);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);














function CartComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngx-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullScreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (tmp_6_0 = ctx_r0.storeInfo()) == null ? null : tmp_6_0.fullName, "\n");
  }
}

function CartComponent_header_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " SHOPPING BAG ");
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

function CartComponent_section_4_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_section_4_div_4_div_4_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return ctx_r9.routeToProduct(product_r7.product.productID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_section_4_div_4_div_4_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r7 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return ctx_r11.routeToProduct(product_r7.product.productID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CartComponent_section_4_div_4_div_4_Template_input_change_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r7 = restoredCtx.$implicit;

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);

      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return ctx_r12.updateProductQty(product_r7, _r8.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_section_4_div_4_div_4_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r7 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return ctx_r13.updateProductQty(product_r7, "0");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    let tmp_4_0;
    let tmp_8_0;
    let tmp_21_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", product_r7.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("text-", ctx_r6.storeInfo().colorStyle.text_code, " text-decoration-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_4_0 = product_r7.product == null ? null : product_r7.product.name) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName)("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_8_0 = product_r7.size) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName)("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.getColor(product_r7.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName)("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.formatPrice(product_r7.product.price / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName)("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName)("background-color", ctx_r6.selectedTheme().bg_color)("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", (tmp_21_0 = product_r7.quantity) !== null && tmp_21_0 !== undefined ? tmp_21_0 : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
  }
}

function CartComponent_section_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "My Shopping Bag");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CartComponent_section_4_div_4_div_4_Template, 27, 48, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r3.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-4 pt-3 mt-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r3.selectedTheme().color)("font-family", ctx_r3.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.cart());
  }
}

function CartComponent_section_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Your Shopping Bag is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_section_4_div_5_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r14.routeToShop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_section_4_div_5_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r16.routeToShop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Shop More Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r4.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-4 pt-3 mt-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r4.storeInfo().fontName)("color", ctx_r4.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r4.storeInfo().actionLink.toString(), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r4.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("text-", ctx_r4.storeInfo().colorStyle.text_code, " text-decoration-underline");
  }
}

function CartComponent_section_4_a_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_section_4_a_39_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r17.next();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r5.storeInfo().fontName)("background-color", ctx_r5.selectedTheme().color)("color", ctx_r5.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", "CHECKOUT", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}

function CartComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CartComponent_section_4_div_4_Template, 5, 9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CartComponent_section_4_div_5_Template, 12, 14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "aside", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Shipping estimates");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CartComponent_section_4_Template_select_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r19.calculateShipping($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Choose your country");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Canada");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "United Kingdom");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Please choose your country!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartComponent_section_4_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r21.calculate();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Calculate shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, CartComponent_section_4_a_39_Template, 1, 9, "a", 37);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hasCart() && ctx_r2.loadedCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.hasCart() && ctx_r2.loadedCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r2.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.total()));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Shipping: ", ctx_r2.shipping(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color)("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hasCart() && ctx_r2.loadedCart);
  }
}

class CartComponent {
  constructor(platformID, cdr, router, titleService, metaService, routingService, loadService, _router, rootComponent, spinner) {
    this.platformID = platformID;
    this.cdr = cdr;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.routingService = routingService;
    this.loadService = loadService;
    this._router = _router;
    this.rootComponent = rootComponent;
    this.spinner = spinner;
    this.loadedCart = false;
    this.isSpinning = false;
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
    return this.rootComponent.cart;
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

  callback() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this.platformID)) {
          _this.showSpinner();
        }

        _this.rootComponent.setOptions();

        _this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink.toString());

        _this.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username);

        if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getCountries();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getCustomer();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getTemplates();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this.platformID)) {
          _this.loadedCart = true;

          _this.loadService.getShippingAddress();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getBillingAddress();
        } else {
          _this.loadedCart = true;

          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this.platformID)) {
            _this.spinner.hide();
          }

          _this.cdr.detectChanges();
        }
      } else {
        _this.routingService.routeTo404(_this.getStoreName().isCustom);
      }
    })();
  }

  routeToProduct(productID) {
    this.rootComponent.routeToProduct(productID);
  }

  routeToShop() {
    this.rootComponent.routeToShop();
  }

  init() {
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = undefined;
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

  isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformID);
  }

  hasCart() {
    var _a;

    return ((_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.length) != 0;
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

  routeToShipping() {
    var _a, _b, _c, _d;

    if (((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _a === void 0 ? void 0 : _a.email) && ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.name)) {
      this.rootComponent.routeToReview();
    } else if ((_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _c === void 0 ? void 0 : _c.email) {
      this.rootComponent.routeToBilling();
    } else if ((_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _d === void 0 ? void 0 : _d.name) {
      this.rootComponent.routeToShipping();
    } else {
      this.rootComponent.routeToShipping();
    }
  }

  next() {
    this.routeToShipping();
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

  ngOnInit() {
    this.init();
  }

}

CartComponent.ɵfac = function CartComponent_Factory(t) {
  return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_2__.RoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService));
};

CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CartComponent,
  selectors: [["app-cart"]],
  decls: 5,
  vars: 6,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [2, "max-height", "100%", "min-height", "100%"], [3, "class", 4, "ngIf"], ["class", "py-5", 3, "background-color", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center"], [1, "cover", 2, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "200px", "font-weight", "bold", "font-size", "35px"], [1, "text-center", 2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "text-center", 2, "line-height", "1.2em", "font-size", "25px", "text-shadow", "2px 2px 4px #42424281"], [3, "inline"], [1, "py-5"], [1, "container", "pb-5", "mb-2", "mb-md-4"], [1, "row"], [1, "col-lg-8"], [1, "col-lg-4", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "py-2", "px-xl-2"], [1, "text-center", "mb-4", "pb-3", "border-bottom", 3, "hidden"], [1, "h6", "mb-3", "pb-1"], [1, "fw-normal"], ["id", "order-options", 1, "accordion"], [1, "accordion-item"], [1, "accordion-header"], ["href", "#shipping-estimates", "role", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", "aria-controls", "shipping-estimates", 1, "accordion-button", "collapsed"], ["id", "shipping-estimates", "data-bs-parent", "#order-options", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], ["novalidate", "novalidate", 1, "needs-validation"], [1, "mb-3"], [1, "h5", "mb-3", "pb-1"], ["required", "required", 1, "form-select", 3, "change"], ["value", ""], ["value", "United States"], ["value", "Canada"], ["value", "United Kingdom"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "btn-primary", "d-block", "w-100", 3, "click"], [1, "text-center", "mt-2"], ["class", "btn mt-auto d-flex flex-wrap", "style", "font-weight:bold; font-size:20px; justify-content: center;", 3, "font-family", "background-color", "color", "innerHTML", "click", 4, "ngIf"], [1, "h6", "mb-1", "pb-1", "ps-3", "mt-2"], ["class", "d-sm-flex justify-content-between align-items-center pb-3 pt-3", 4, "ngFor", "ngForOf"], [1, "d-sm-flex", "justify-content-between", "align-items-center", "pb-3", "pt-3"], [1, "d-block", "d-sm-flex", "align-items-center", "text-center", "text-sm-start"], ["role", "button", 1, "d-inline-block", "flex-shrink-0", "mx-auto", "me-sm-4", 3, "click"], ["onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", "width", "160", "alt", "Product", 2, "border-radius", "2.5%", 3, "src"], [1, "pt-2"], ["role", "button", 2, "font-weight", "bold", 3, "click"], [1, "fs-sm"], [1, "text-muted", "me-2"], [1, "fs-lg", "text-accent", "pt-2"], [1, "pt-2", "pt-sm-0", "ps-sm-3", "mx-auto", "mx-sm-0", "text-center", "text-sm-start", 2, "max-width", "5.5rem"], ["for", "quantity1", 1, "form-label"], ["type", "number", "id", "quantity1", "min", "1", 1, "form-control", 3, "value", "change"], ["qtyChooser", ""], ["type", "button", 1, "btn", "btn-link", "px-0", "text-danger", 3, "click"], [1, "ci-close-circle", "me-0"], [1, "fs-sm", 2, "font-size", "10px"], [1, "h6", "ps-3", "mt-2", "text-center"], [1, "d-block", "align-items-center", "pt-2"], [1, "d-block", "align-items-center", "text-center", "text-sm-start"], ["role", "button", 1, "mx-auto", "me-sm-4", 3, "click"], ["alt", "Product", 2, "max-width", "100%", "height", "auto", 3, "src"], [1, "btn", "mt-auto", "d-flex", "flex-wrap", 2, "font-weight", "bold", "font-size", "20px", "justify-content", "center", 3, "innerHTML", "click"]],
  template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CartComponent_ngx_spinner_1_Template, 3, 10, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CartComponent_header_3_Template, 10, 10, "header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CartComponent_section_4_Template, 40, 52, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.selectedTheme().bg_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.storeInfo().username != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.storeInfo().username != undefined);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: [".centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBSTdCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuLmNvdmVye1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 37503:
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Globals": () => (/* binding */ Globals)
/* harmony export */ });
/* harmony import */ var _models_store_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/store.model */ 91293);
/* harmony import */ var _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/shipping-country.model */ 31558);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/product.model */ 81454);
/* harmony import */ var _models_template_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/template.model */ 36083);
/* harmony import */ var _models_blog_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/blog.model */ 38266);
/* harmony import */ var _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/shipping-address.model */ 37927);
/* harmony import */ var _models_billing_address_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/billing-address.model */ 47677);
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/order.model */ 29297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);









class Globals {
    static matchingProvince(a) {
        return this.caProvinces.find(p => { p.name.toLowerCase() == a.toLowerCase() || p.abbreviation.toLowerCase() == a.toLowerCase(); });
    }
}
Globals.storeInfo = new _models_store_model__WEBPACK_IMPORTED_MODULE_0__.Store();
Globals.userInfo = undefined;
Globals.availableCurrencies = [];
Globals.selectedCurrency = new _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_1__.Country();
Globals.templates = [];
Globals.availableTemplates = [];
Globals.selectedTemplate = new _models_template_model__WEBPACK_IMPORTED_MODULE_3__.Template();
Globals.selectedProduct = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product();
Globals.orders = [];
Globals.selectedOrder = new _models_order_model__WEBPACK_IMPORTED_MODULE_7__.Order();
Globals.selectedBlog = new _models_blog_model__WEBPACK_IMPORTED_MODULE_4__.Blog();
Globals.blogs = [];
Globals.URL = "";
Globals.productsSold = [];
Globals.views = [];
Globals.dropCarts = [];
Globals.newCustomers = 0;
Globals.shippingInfo = new _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_5__.ShippingInfo();
Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_6__.BillingInfo();
Globals.themes = [];
Globals.shippingTax = 0;
Globals.didLog = false;
Globals.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
Globals.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
Globals.useOtherPaymentMethod = false;
Globals.isNewUser = false;
Globals.socials = [
    {
        name: 'Instagram',
        img: '/assets/instagram.png',
    },
    {
        name: 'TikTok',
        img: '/assets/tiktok.png',
    },
    {
        name: 'Youtube',
        img: '/assets/youtube.png',
    },
    {
        name: 'Facebook',
        img: '/assets/facebook.png',
    },
    {
        name: 'Twitter',
        img: '/assets/twitter.png',
    },
    {
        name: 'Pinterest',
        img: '/assets/pinterest.png',
    }
];
Globals.loaders = [
    'ball-8bits',
    'ball-atom',
    'ball-beat',
    'ball-circus',
    'ball-climbing-dot',
    'ball-clip-rotate',
    'ball-clip-rotate-multiple',
    'ball-clip-rotate-pulse',
    'ball-elastic-dots',
    'ball-fall',
    'ball-fussion',
    'ball-grid-beat',
    'ball-grid-pulse',
    'ball-newton-cradle',
    'ball-pulse',
    'ball-pulse-rise',
    'ball-pulse-sync',
    'ball-rotate',
    'ball-running-dots',
    'ball-scale',
    'ball-scale-multiple',
    'ball-scale-pulse',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-spin',
    'ball-spin-clockwise',
    'ball-spin-clockwise-fade',
    'ball-spin-clockwise-fade-rotating',
    'ball-spin-fade',
    'ball-spin-fade-rotating',
    'ball-spin-rotate',
    'ball-square-clockwise-spin',
    'ball-square-spin',
    'ball-triangle-path',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'cog',
    'cube-transition',
    'fire',
    'line-scale',
    'line-scale-party',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'line-spin-clockwise-fade',
    'line-spin-clockwise-fade-rotating',
    'line-spin-fade',
    'line-spin-fade-rotating',
    'pacman',
    'square-jelly-box',
    'square-loader',
    'square-spin',
    'timer',
    'triangle-skew-spin',
];
Globals.fonts = [
    'Arbutus',
    'Bungee Hairline',
    'Bungee Outline',
    'Clicker Script',
    'Codystar',
    'Condiment',
    'Diplomata SC',
    'DotGothic16',
    'Erica One',
    'Ewert',
    'Geo',
    'Lexend Peta',
    'Meie Script',
    'Monofett',
    'Montserrat',
    'Montserrat Alternates',
    'Montserrat Subrayada',
    'Nanum Brush Script',
    'Notable',
    'Original Surfer',
    'Permanent Marker',
    'Playfair Display',
    'Roboto',
    'Rowdies',
    'Saira Stencil One',
    'Tulpen One',
];
Globals.countries = [
    {
        'name': 'Canada',
        'abbreviation': 'CA'
    },
    {
        'name': 'United States',
        'abbreviation': 'US'
    },
    {
        'name': 'United Kingdom',
        'abbreviation': 'UK'
    }
];
Globals.usStates = [
    {
        'name': 'Alabama',
        'abbreviation': 'AL'
    },
    {
        'name': 'Alaska',
        'abbreviation': 'AK'
    },
    {
        'name': 'American Samoa',
        'abbreviation': 'AS'
    },
    {
        'name': 'Arizona',
        'abbreviation': 'AZ'
    },
    {
        'name': 'Arkansas',
        'abbreviation': 'AR'
    },
    {
        'name': 'California',
        'abbreviation': 'CA'
    },
    {
        'name': 'Colorado',
        'abbreviation': 'CO'
    },
    {
        'name': 'Connecticut',
        'abbreviation': 'CT'
    },
    {
        'name': 'Delaware',
        'abbreviation': 'DE'
    },
    {
        'name': 'District Of Columbia',
        'abbreviation': 'DC'
    },
    {
        'name': 'Federated States Of Micronesia',
        'abbreviation': 'FM'
    },
    {
        'name': 'Florida',
        'abbreviation': 'FL'
    },
    {
        'name': 'Georgia',
        'abbreviation': 'GA'
    },
    {
        'name': 'Guam',
        'abbreviation': 'GU'
    },
    {
        'name': 'Hawaii',
        'abbreviation': 'HI'
    },
    {
        'name': 'Idaho',
        'abbreviation': 'ID'
    },
    {
        'name': 'Illinois',
        'abbreviation': 'IL'
    },
    {
        'name': 'Indiana',
        'abbreviation': 'IN'
    },
    {
        'name': 'Iowa',
        'abbreviation': 'IA'
    },
    {
        'name': 'Kansas',
        'abbreviation': 'KS'
    },
    {
        'name': 'Kentucky',
        'abbreviation': 'KY'
    },
    {
        'name': 'Louisiana',
        'abbreviation': 'LA'
    },
    {
        'name': 'Maine',
        'abbreviation': 'ME'
    },
    {
        'name': 'Marshall Islands',
        'abbreviation': 'MH'
    },
    {
        'name': 'Maryland',
        'abbreviation': 'MD'
    },
    {
        'name': 'Massachusetts',
        'abbreviation': 'MA'
    },
    {
        'name': 'Michigan',
        'abbreviation': 'MI'
    },
    {
        'name': 'Minnesota',
        'abbreviation': 'MN'
    },
    {
        'name': 'Mississippi',
        'abbreviation': 'MS'
    },
    {
        'name': 'Missouri',
        'abbreviation': 'MO'
    },
    {
        'name': 'Montana',
        'abbreviation': 'MT'
    },
    {
        'name': 'Nebraska',
        'abbreviation': 'NE'
    },
    {
        'name': 'Nevada',
        'abbreviation': 'NV'
    },
    {
        'name': 'New Hampshire',
        'abbreviation': 'NH'
    },
    {
        'name': 'New Jersey',
        'abbreviation': 'NJ'
    },
    {
        'name': 'New Mexico',
        'abbreviation': 'NM'
    },
    {
        'name': 'New York',
        'abbreviation': 'NY'
    },
    {
        'name': 'North Carolina',
        'abbreviation': 'NC'
    },
    {
        'name': 'North Dakota',
        'abbreviation': 'ND'
    },
    {
        'name': 'Northern Mariana Islands',
        'abbreviation': 'MP'
    },
    {
        'name': 'Ohio',
        'abbreviation': 'OH'
    },
    {
        'name': 'Oklahoma',
        'abbreviation': 'OK'
    },
    {
        'name': 'Oregon',
        'abbreviation': 'OR'
    },
    {
        'name': 'Palau',
        'abbreviation': 'PW'
    },
    {
        'name': 'Pennsylvania',
        'abbreviation': 'PA'
    },
    {
        'name': 'Puerto Rico',
        'abbreviation': 'PR'
    },
    {
        'name': 'Rhode Island',
        'abbreviation': 'RI'
    },
    {
        'name': 'South Carolina',
        'abbreviation': 'SC'
    },
    {
        'name': 'South Dakota',
        'abbreviation': 'SD'
    },
    {
        'name': 'Tennessee',
        'abbreviation': 'TN'
    },
    {
        'name': 'Texas',
        'abbreviation': 'TX'
    },
    {
        'name': 'Utah',
        'abbreviation': 'UT'
    },
    {
        'name': 'Vermont',
        'abbreviation': 'VT'
    },
    {
        'name': 'Virgin Islands',
        'abbreviation': 'VI'
    },
    {
        'name': 'Virginia',
        'abbreviation': 'VA'
    },
    {
        'name': 'Washington',
        'abbreviation': 'WA'
    },
    {
        'name': 'West Virginia',
        'abbreviation': 'WV'
    },
    {
        'name': 'Wisconsin',
        'abbreviation': 'WI'
    },
    {
        'name': 'Wyoming',
        'abbreviation': 'WY'
    }
];
Globals.caProvinces = [
    {
        'name': 'Alberta',
        'abbreviation': 'AB'
    },
    {
        'name': 'British Columbia',
        'abbreviation': 'BC'
    },
    {
        'name': 'Manitoba',
        'abbreviation': 'MB'
    },
    {
        'name': 'New Brunswick',
        'abbreviation': 'NB'
    },
    {
        'name': 'Newfoundland & Labrador',
        'abbreviation': 'NL'
    },
    {
        'name': 'Nova Scotia',
        'abbreviation': 'NS'
    },
    {
        'name': 'Prince Edward Island',
        'abbreviation': 'PEI'
    },
    {
        'name': 'Quebec',
        'abbreviation': 'QC'
    },
    {
        'name': 'Saskatchewan',
        'abbreviation': 'SK'
    },
    {
        'name': 'Ontario',
        'abbreviation': 'ON'
    }
];
Globals.ukNations = [
    {
        'name': 'England',
        'abbreviation': 'ENG'
    },
    {
        'name': 'Scotland',
        'abbreviation': 'SCT'
    },
    {
        'name': 'Northern Ireland',
        'abbreviation': 'NIR'
    },
    {
        'name': 'Wales',
        'abbreviation': 'WLS'
    },
];
Globals.allCountries = [
    { "name": "Afghanistan", "code": "AF" },
    { "name": "Åland Islands", "code": "AX" },
    { "name": "Albania", "code": "AL" },
    { "name": "Algeria", "code": "DZ" },
    { "name": "American Samoa", "code": "AS" },
    { "name": "AndorrA", "code": "AD" },
    { "name": "Angola", "code": "AO" },
    { "name": "Anguilla", "code": "AI" },
    { "name": "Antarctica", "code": "AQ" },
    { "name": "Antigua and Barbuda", "code": "AG" },
    { "name": "Argentina", "code": "AR" },
    { "name": "Armenia", "code": "AM" },
    { "name": "Aruba", "code": "AW" },
    { "name": "Australia", "code": "AU" },
    { "name": "Austria", "code": "AT" },
    { "name": "Azerbaijan", "code": "AZ" },
    { "name": "Bahamas", "code": "BS" },
    { "name": "Bahrain", "code": "BH" },
    { "name": "Bangladesh", "code": "BD" },
    { "name": "Barbados", "code": "BB" },
    { "name": "Belarus", "code": "BY" },
    { "name": "Belgium", "code": "BE" },
    { "name": "Belize", "code": "BZ" },
    { "name": "Benin", "code": "BJ" },
    { "name": "Bermuda", "code": "BM" },
    { "name": "Bhutan", "code": "BT" },
    { "name": "Bolivia", "code": "BO" },
    { "name": "Bosnia and Herzegovina", "code": "BA" },
    { "name": "Botswana", "code": "BW" },
    { "name": "Bouvet Island", "code": "BV" },
    { "name": "Brazil", "code": "BR" },
    { "name": "British Indian Ocean Territory", "code": "IO" },
    { "name": "Brunei Darussalam", "code": "BN" },
    { "name": "Bulgaria", "code": "BG" },
    { "name": "Burkina Faso", "code": "BF" },
    { "name": "Burundi", "code": "BI" },
    { "name": "Cambodia", "code": "KH" },
    { "name": "Cameroon", "code": "CM" },
    { "name": "Canada", "code": "CA" },
    { "name": "Cape Verde", "code": "CV" },
    { "name": "Cayman Islands", "code": "KY" },
    { "name": "Central African Republic", "code": "CF" },
    { "name": "Chad", "code": "TD" },
    { "name": "Chile", "code": "CL" },
    { "name": "China", "code": "CN" },
    { "name": "Christmas Island", "code": "CX" },
    { "name": "Cocos (Keeling) Islands", "code": "CC" },
    { "name": "Colombia", "code": "CO" },
    { "name": "Comoros", "code": "KM" },
    { "name": "Congo", "code": "CG" },
    { "name": "Congo, The Democratic Republic of the", "code": "CD" },
    { "name": "Cook Islands", "code": "CK" },
    { "name": "Costa Rica", "code": "CR" },
    { "name": "Cote D\"Ivoire", "code": "CI" },
    { "name": "Croatia", "code": "HR" },
    { "name": "Cuba", "code": "CU" },
    { "name": "Cyprus", "code": "CY" },
    { "name": "Czech Republic", "code": "CZ" },
    { "name": "Denmark", "code": "DK" },
    { "name": "Djibouti", "code": "DJ" },
    { "name": "Dominica", "code": "DM" },
    { "name": "Dominican Republic", "code": "DO" },
    { "name": "Ecuador", "code": "EC" },
    { "name": "Egypt", "code": "EG" },
    { "name": "El Salvador", "code": "SV" },
    { "name": "Equatorial Guinea", "code": "GQ" },
    { "name": "Eritrea", "code": "ER" },
    { "name": "Estonia", "code": "EE" },
    { "name": "Ethiopia", "code": "ET" },
    { "name": "Falkland Islands (Malvinas)", "code": "FK" },
    { "name": "Faroe Islands", "code": "FO" },
    { "name": "Fiji", "code": "FJ" },
    { "name": "Finland", "code": "FI" },
    { "name": "France", "code": "FR" },
    { "name": "French Guiana", "code": "GF" },
    { "name": "French Polynesia", "code": "PF" },
    { "name": "French Southern Territories", "code": "TF" },
    { "name": "Gabon", "code": "GA" },
    { "name": "Gambia", "code": "GM" },
    { "name": "Georgia", "code": "GE" },
    { "name": "Germany", "code": "DE" },
    { "name": "Ghana", "code": "GH" },
    { "name": "Gibraltar", "code": "GI" },
    { "name": "Greece", "code": "GR" },
    { "name": "Greenland", "code": "GL" },
    { "name": "Grenada", "code": "GD" },
    { "name": "Guadeloupe", "code": "GP" },
    { "name": "Guam", "code": "GU" },
    { "name": "Guatemala", "code": "GT" },
    { "name": "Guernsey", "code": "GG" },
    { "name": "Guinea", "code": "GN" },
    { "name": "Guinea-Bissau", "code": "GW" },
    { "name": "Guyana", "code": "GY" },
    { "name": "Haiti", "code": "HT" },
    { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
    { "name": "Holy See (Vatican City State)", "code": "VA" },
    { "name": "Honduras", "code": "HN" },
    { "name": "Hong Kong", "code": "HK" },
    { "name": "Hungary", "code": "HU" },
    { "name": "Iceland", "code": "IS" },
    { "name": "India", "code": "IN" },
    { "name": "Indonesia", "code": "ID" },
    { "name": "Iran, Islamic Republic Of", "code": "IR" },
    { "name": "Iraq", "code": "IQ" },
    { "name": "Ireland", "code": "IE" },
    { "name": "Isle of Man", "code": "IM" },
    { "name": "Israel", "code": "IL" },
    { "name": "Italy", "code": "IT" },
    { "name": "Jamaica", "code": "JM" },
    { "name": "Japan", "code": "JP" },
    { "name": "Jersey", "code": "JE" },
    { "name": "Jordan", "code": "JO" },
    { "name": "Kazakhstan", "code": "KZ" },
    { "name": "Kenya", "code": "KE" },
    { "name": "Kiribati", "code": "KI" },
    { "name": "Korea, Democratic People\"S Republic of", "code": "KP" },
    { "name": "Korea, Republic of", "code": "KR" },
    { "name": "Kuwait", "code": "KW" },
    { "name": "Kyrgyzstan", "code": "KG" },
    { "name": "Lao People\"S Democratic Republic", "code": "LA" },
    { "name": "Latvia", "code": "LV" },
    { "name": "Lebanon", "code": "LB" },
    { "name": "Lesotho", "code": "LS" },
    { "name": "Liberia", "code": "LR" },
    { "name": "Libyan Arab Jamahiriya", "code": "LY" },
    { "name": "Liechtenstein", "code": "LI" },
    { "name": "Lithuania", "code": "LT" },
    { "name": "Luxembourg", "code": "LU" },
    { "name": "Macao", "code": "MO" },
    { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
    { "name": "Madagascar", "code": "MG" },
    { "name": "Malawi", "code": "MW" },
    { "name": "Malaysia", "code": "MY" },
    { "name": "Maldives", "code": "MV" },
    { "name": "Mali", "code": "ML" },
    { "name": "Malta", "code": "MT" },
    { "name": "Marshall Islands", "code": "MH" },
    { "name": "Martinique", "code": "MQ" },
    { "name": "Mauritania", "code": "MR" },
    { "name": "Mauritius", "code": "MU" },
    { "name": "Mayotte", "code": "YT" },
    { "name": "Mexico", "code": "MX" },
    { "name": "Micronesia, Federated States of", "code": "FM" },
    { "name": "Moldova, Republic of", "code": "MD" },
    { "name": "Monaco", "code": "MC" },
    { "name": "Mongolia", "code": "MN" },
    { "name": "Montserrat", "code": "MS" },
    { "name": "Morocco", "code": "MA" },
    { "name": "Mozambique", "code": "MZ" },
    { "name": "Myanmar", "code": "MM" },
    { "name": "Namibia", "code": "NA" },
    { "name": "Nauru", "code": "NR" },
    { "name": "Nepal", "code": "NP" },
    { "name": "Netherlands", "code": "NL" },
    { "name": "Netherlands Antilles", "code": "AN" },
    { "name": "New Caledonia", "code": "NC" },
    { "name": "New Zealand", "code": "NZ" },
    { "name": "Nicaragua", "code": "NI" },
    { "name": "Niger", "code": "NE" },
    { "name": "Nigeria", "code": "NG" },
    { "name": "Niue", "code": "NU" },
    { "name": "Norfolk Island", "code": "NF" },
    { "name": "Northern Mariana Islands", "code": "MP" },
    { "name": "Norway", "code": "NO" },
    { "name": "Oman", "code": "OM" },
    { "name": "Pakistan", "code": "PK" },
    { "name": "Palau", "code": "PW" },
    { "name": "Palestinian Territory, Occupied", "code": "PS" },
    { "name": "Panama", "code": "PA" },
    { "name": "Papua New Guinea", "code": "PG" },
    { "name": "Paraguay", "code": "PY" },
    { "name": "Peru", "code": "PE" },
    { "name": "Philippines", "code": "PH" },
    { "name": "Pitcairn", "code": "PN" },
    { "name": "Poland", "code": "PL" },
    { "name": "Portugal", "code": "PT" },
    { "name": "Puerto Rico", "code": "PR" },
    { "name": "Qatar", "code": "QA" },
    { "name": "Reunion", "code": "RE" },
    { "name": "Romania", "code": "RO" },
    { "name": "Russian Federation", "code": "RU" },
    { "name": "RWANDA", "code": "RW" },
    { "name": "Saint Helena", "code": "SH" },
    { "name": "Saint Kitts and Nevis", "code": "KN" },
    { "name": "Saint Lucia", "code": "LC" },
    { "name": "Saint Pierre and Miquelon", "code": "PM" },
    { "name": "Saint Vincent and the Grenadines", "code": "VC" },
    { "name": "Samoa", "code": "WS" },
    { "name": "San Marino", "code": "SM" },
    { "name": "Sao Tome and Principe", "code": "ST" },
    { "name": "Saudi Arabia", "code": "SA" },
    { "name": "Senegal", "code": "SN" },
    { "name": "Serbia and Montenegro", "code": "CS" },
    { "name": "Seychelles", "code": "SC" },
    { "name": "Sierra Leone", "code": "SL" },
    { "name": "Singapore", "code": "SG" },
    { "name": "Slovakia", "code": "SK" },
    { "name": "Slovenia", "code": "SI" },
    { "name": "Solomon Islands", "code": "SB" },
    { "name": "Somalia", "code": "SO" },
    { "name": "South Africa", "code": "ZA" },
    { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
    { "name": "Spain", "code": "ES" },
    { "name": "Sri Lanka", "code": "LK" },
    { "name": "Sudan", "code": "SD" },
    { "name": "Suriname", "code": "SR" },
    { "name": "Svalbard and Jan Mayen", "code": "SJ" },
    { "name": "Swaziland", "code": "SZ" },
    { "name": "Sweden", "code": "SE" },
    { "name": "Switzerland", "code": "CH" },
    { "name": "Syrian Arab Republic", "code": "SY" },
    { "name": "Taiwan, Province of China", "code": "TW" },
    { "name": "Tajikistan", "code": "TJ" },
    { "name": "Tanzania, United Republic of", "code": "TZ" },
    { "name": "Thailand", "code": "TH" },
    { "name": "Timor-Leste", "code": "TL" },
    { "name": "Togo", "code": "TG" },
    { "name": "Tokelau", "code": "TK" },
    { "name": "Tonga", "code": "TO" },
    { "name": "Trinidad and Tobago", "code": "TT" },
    { "name": "Tunisia", "code": "TN" },
    { "name": "Turkey", "code": "TR" },
    { "name": "Turkmenistan", "code": "TM" },
    { "name": "Turks and Caicos Islands", "code": "TC" },
    { "name": "Tuvalu", "code": "TV" },
    { "name": "Uganda", "code": "UG" },
    { "name": "Ukraine", "code": "UA" },
    { "name": "United Arab Emirates", "code": "AE" },
    { "name": "United Kingdom", "code": "GB" },
    { "name": "United States", "code": "US" },
    { "name": "United States Minor Outlying Islands", "code": "UM" },
    { "name": "Uruguay", "code": "UY" },
    { "name": "Uzbekistan", "code": "UZ" },
    { "name": "Vanuatu", "code": "VU" },
    { "name": "Venezuela", "code": "VE" },
    { "name": "Viet Nam", "code": "VN" },
    { "name": "Virgin Islands, British", "code": "VG" },
    { "name": "Virgin Islands, U.S.", "code": "VI" },
    { "name": "Wallis and Futuna", "code": "WF" },
    { "name": "Western Sahara", "code": "EH" },
    { "name": "Yemen", "code": "YE" },
    { "name": "Zambia", "code": "ZM" },
    { "name": "Zimbabwe", "code": "ZW" }
];
Globals.ɵfac = function Globals_Factory(t) { return new (t || Globals)(); };
Globals.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: Globals, factory: Globals.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);









function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_23_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.useEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "CREATE ACCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_23_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.useGuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "No thanks, continue as Guest");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.authForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fadeIn second bg-", ctx_r0.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("email", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fadeIn second mt-2 bg-", ctx_r0.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fadeIn third bg-", ctx_r0.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fadeIn third bg-", ctx_r0.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName)("background-color", ctx_r0.selectedTheme().color)("color", ctx_r0.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("bg-", ctx_r0.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("underlineHover text-", ctx_r0.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
} }
function LoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.signInEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "SIGN IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.changeAuth(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Don't have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fadeIn second mt-2 bg-", ctx_r1.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fadeIn third bg-", ctx_r1.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName)("background-color", ctx_r1.selectedTheme().color)("color", ctx_r1.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("bg-", ctx_r1.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("underlineHover text-", ctx_r1.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
} }
class LoginComponent {
    constructor(cdr, load, fb, modalService, spinner) {
        this.cdr = cdr;
        this.load = load;
        this.fb = fb;
        this.modalService = modalService;
        this.spinner = spinner;
        this.authMode = 1;
        this.err = "";
        this.title = "account";
        this.signedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.loadingAction = "Creating Account...";
        this.authForm = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
            confirmpassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
        });
        this.loginForm = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
        });
        this.isSpinning = false;
    }
    storeInfo() {
        return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo;
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
    showSpinner() {
        if (!this.isSpinning) {
            this.isSpinning = true;
            this.spinner.show("loginSpinner");
            setTimeout(() => {
                this.hideSpinner();
            }, 2000);
        }
    }
    hideSpinner() {
        if (this.isSpinning) {
            this.spinner.hide("loginSpinner");
            this.isSpinning = false;
        }
    }
    isSignIn() {
        this.loadingAction = "Signing in...";
        return this.authMode == 2;
    }
    isGoogle() {
        this.loadingAction = "Signing in...";
        return this.authMode == 4;
    }
    isApple() {
        this.loadingAction = "Signing in...";
        return this.authMode == 3;
    }
    isSignUp() {
        this.loadingAction = "Creating Account...";
        return this.authMode == 1;
    }
    changeAuth(to) {
        this.authMode = to;
        this.hideSpinner();
        this.cdr.detectChanges();
    }
    useGuest() {
        this.load.myCallback = () => this.close();
        this.showSpinner();
        this.load.registerAccount("Guest");
    }
    close() {
        this.hideSpinner();
        console.log("go");
        if (this.isLanding) {
            this.signedIn.emit(true);
        }
        else {
            this.modalService.dismissAll("success");
        }
    }
    error(err) {
        this.spinner.hide("loginSpinner");
        console.log(err);
        this.err = err;
        this.cdr.detectChanges();
    }
    signInEmail() {
        if (this.loginForm.valid) {
            this.load.myCallback = () => this.close();
            this.load.errCallback = (err) => this.error(err);
            const usernameOrEmail = this.loginForm.controls.username.value;
            const password = this.loginForm.controls.password.value;
            let fieldToSearch = "Username";
            const credentials = {
                "email": usernameOrEmail,
                "password": password,
                "Code": password,
                "Field": fieldToSearch,
                "Term": usernameOrEmail
            };
            this.showSpinner();
            if (usernameOrEmail.includes("@")) {
                // this.showSpinner()
                this.load.registerAccount("Email_IN", credentials);
            }
            else {
                // this.showSpinner()
                this.load.registerAccount("Email_IN_USER", credentials);
            }
        }
        else {
        }
    }
    useApple() {
        this.load.myCallback = () => this.close();
        this.load.errCallback = (err) => this.error(err);
        this.load.registerAccount("Apple", undefined, this.affiliate);
    }
    useGoogle() {
        this.load.myCallback = () => this.close();
        this.load.errCallback = (err) => this.error(err);
        this.load.registerAccount("Google", undefined, this.affiliate);
    }
    useEmail() {
        if (this.authForm.valid) {
            const email = this.authForm.controls.email.value;
            const username = this.authForm.controls.username.value;
            const password = this.authForm.controls.password.value;
            const confirmpassword = this.authForm.controls.confirmpassword.value;
            const credentials = {
                "email": email,
                "password": password,
                "username": username,
            };
            console.log(this.affiliate);
            this.showSpinner();
            if (password == confirmpassword) {
                this.load.myCallback = () => this.close();
                this.load.checkUsername(username, err => {
                    if (err) {
                        this.error(err);
                    }
                    else {
                        this.load.registerAccount("Email_UP", credentials, this.affiliate);
                    }
                });
            }
        }
        return false;
    }
    ngOnInit() {
        if (this.isLanding)
            this.title = 'store';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_1__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { isLanding: "isLanding", affiliate: "affiliate" }, outputs: { signedIn: "signedIn" }, decls: 25, vars: 35, consts: [["size", "medium", 3, "bdColor", "color", "type", "fullScreen", "disableAnimation", "name"], [1, "mt-5"], [1, "wrapper", "w-100"], ["id", "formContent", 1, "w-100"], [2, "line-height", "1.0em", "font-size", "25px", "font-weight", "bold"], [1, "text-center", "mt-1", 2, "line-height", "1.0em", "font-size", "15px", "font-weight", "normal"], [1, "container", "px-4", "px-lg-5", "mt-5", 2, "width", "300px"], [1, "row", "row-cols-3", "row-cols-md-3", "row-cols-xl-3", "justify-content-center", 2, "width", "auto"], [1, "col"], ["role", "button", 1, "brand-logo", 3, "click"], ["src", "/assets/email.png", 1, "rounded-circle", "mx-auto", "d-block", "mb-5", 2, "width", "50px", "height", "auto"], [1, "rounded-circle", "mx-auto", "d-block", "mb-5", 2, "width", "50px", "height", "auto", 3, "src"], ["src", "/assets/google.png", 1, "rounded-circle", "mx-auto", "d-block", "mb-5", 2, "width", "50px", "height", "auto"], [1, "text-center", "mt-1", 2, "line-height", "1.0em", "font-size", "12px", "height", "15px", "font-weight", "normal", "color", "red"], [4, "ngIf"], [1, "mt-4", 3, "formGroup"], ["placeholder", "Email Address", "type", "text", "name", "email", "formControlName", "email", 3, "email"], ["type", "text", "id", "username", "name", "username", "placeholder", "Username", "formControlName", "username"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "formControlName", "password"], ["type", "password", "id", "confirmpass", "name", "confirmpass", "placeholder", "Confirm Password", "formControlName", "confirmpassword"], ["type", "submit", "role", "button", 1, "btn", "btn-lg", "btn-block", "btn-dark", "mt-5", "mb-5", "pt-3", "pb-3", "ps-4", "pe-4", "fadeIn", "fourth", 2, "font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", "font-size", "small", 3, "click"], ["id", "formFooter"], ["role", "button", 3, "click"], ["type", "text", "id", "username", "name", "username", "placeholder", "Username/Email", "formControlName", "username"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Or log in below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_13_listener() { return ctx.changeAuth(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_16_listener() { return ctx.useApple(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_19_listener() { return ctx.useGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 13, 38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 11, 27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.selectedIndicator().color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("bdColor", ctx.selectedIndicator().bg_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("color", ctx.selectedIndicator().color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", ctx.selectedIndicator().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullScreen", false)("disableAnimation", true)("name", "loginSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.loadingAction, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.selectedTheme().bg_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.selectedTheme().bg_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("text-center text-", ctx.storeInfo().colorStyle.text_code, " mt-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Create your ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName)("color", ctx.selectedTheme().color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "/assets/apple_", ctx.storeInfo().colorStyle.back_code, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.err, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSignUp());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSignIn());
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator], styles: ["html[_ngcontent-%COMP%] {\n    background-color: #56baed;\n  }\n\nbody[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n  }\n\na[_ngcontent-%COMP%] {\n    color: #92badd;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }\n\nbutton.forgot[_ngcontent-%COMP%] {\n    color: #92badd;\n    display:block;\n    text-decoration: none;\n    font-weight: 400;\n    text-align: center;\n    font-size: 12px;\n    margin: 0 auto;\n  }\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display:inline-block;\n    margin: 40px 8px 10px 8px; \n    color: #cccccc;\n  }\n\n\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px;\n    margin: 0px;\n  }\n\n#formContent[_ngcontent-%COMP%] {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 100%;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n\n#formFooter[_ngcontent-%COMP%] {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n\n\n\nh2.inactive[_ngcontent-%COMP%] {\n    color: #cccccc;\n  }\n\nh2.active[_ngcontent-%COMP%] {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n  }\n\n\n\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n  }\n\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\n    background-color: #39ace7;\n  }\n\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\n    transform: scale(0.95);\n  }\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: left;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n\ninput[type=text][_ngcontent-%COMP%]:placeholder, input[type=password][_ngcontent-%COMP%]:placeholder {\n    color: #cccccc;\n  }\n\n\n\n\n\n.fadeInDown[_ngcontent-%COMP%] {\n    animation-name: fadeInDown;\n    animation-duration: 1s;\n    animation-fill-mode: both;\n  }\n\n@keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      transform: none;\n    }\n  }\n\n\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn[_ngcontent-%COMP%] {\n    opacity:0;\n    animation:fadeIn ease-in 1;\n    animation-fill-mode:forwards;\n    animation-duration:1s;\n  }\n\n.fadeIn.first[_ngcontent-%COMP%] {\n    animation-delay: 0.4s;\n  }\n\n.fadeIn.second[_ngcontent-%COMP%] {\n    animation-delay: 0.6s;\n  }\n\n.fadeIn.third[_ngcontent-%COMP%] {\n    animation-delay: 0.8s;\n  }\n\n.fadeIn.fourth[_ngcontent-%COMP%] {\n    animation-delay: 1s;\n  }\n\n\n\n.underlineHover[_ngcontent-%COMP%]:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n\n.underlineHover[_ngcontent-%COMP%]:hover {\n    color: #0d0d0d;\n  }\n\n.underlineHover[_ngcontent-%COMP%]:hover:after{\n    width: 100%;\n  }\n\n\n\n*[_ngcontent-%COMP%]:focus {\n      outline: none;\n  }\n\n#icon[_ngcontent-%COMP%] {\n    width:60%;\n  }\n\n.sign-in-facebook[_ngcontent-%COMP%] {\n    background: url('http://i.stack.imgur.com/e2S63.png') #f2f2f2;\n    background-position: -9px -7px;\n    background-repeat: no-repeat;\n    background-size: 39px 43px;\n    padding-left: 41px;\n    color: #000;\n  }\n\n.sign-in-facebook[_ngcontent-%COMP%]:hover {\n    background: url('http://i.stack.imgur.com/e2S63.png') #e0e0e0;\n    background-position: -9px -7px;\n    background-repeat: no-repeat;\n    background-size: 39px 43px;\n    padding-left: 41px;\n    color: #000;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFVBQVU7O0FBRVY7SUFDSSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsYUFBYTtFQUNmOztBQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0FBSUEsY0FBYzs7QUFFZDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBRUE7SUFFRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLDRCQUE0QjtFQUM5Qjs7QUFJQSxTQUFTOztBQUVUO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0FBSUEsbUJBQW1COztBQUVuQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUtFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUlBLGVBQWU7O0FBRWYsdUNBQXVDOztBQUN2QztJQUVFLDBCQUEwQjtJQUUxQixzQkFBc0I7SUFFdEIseUJBQXlCO0VBQzNCOztBQWVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGOztBQUVBLGtDQUFrQzs7QUFHbEMsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFMUQ7SUFDRSxTQUFTO0lBR1QsMEJBQTBCO0lBSTFCLDRCQUE0QjtJQUk1QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFHRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFHRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFHRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFHRSxtQkFBbUI7RUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUlBLFdBQVc7O0FBRVg7TUFDSSxhQUFhO0VBQ2pCOztBQUVBO0lBQ0UsU0FBUztFQUNYOztBQUVBO0lBQ0UsNkRBQTZEO0lBQzdELDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSw2REFBNkQ7SUFDN0QsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBCQVNJQyAqL1xuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgYSB7XG4gICAgY29sb3I6ICM5MmJhZGQ7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICBidXR0b24uZm9yZ290IHtcbiAgICBjb2xvcjogIzkyYmFkZDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBTVFJVQ1RVUkUgKi9cbiAgXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIFxuICAjZm9ybUNvbnRlbnQge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAjZm9ybUZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBUQUJTICovXG4gIFxuICBoMi5pbmFjdGl2ZSB7XG4gICAgY29sb3I6ICNjY2NjY2M7XG4gIH1cbiAgXG4gIGgyLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cbiAgXG4gIGlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciwgaW5wdXRbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIEFOSU1BVElPTlMgKi9cbiAgXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbiAgLmZhZGVJbkRvd24ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgXG4gIC5mYWRlSW4ge1xuICAgIG9wYWNpdHk6MDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICB9XG4gIFxuICAuZmFkZUluLmZpcnN0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIH1cbiAgXG4gIC5mYWRlSW4uc2Vjb25kIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIH1cbiAgXG4gIC5mYWRlSW4udGhpcmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgfVxuICBcbiAgLmZhZGVJbi5mb3VydGgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICBcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbiAgLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG4gIH1cbiAgXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gIH1cbiAgXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBPVEhFUlMgKi9cbiAgXG4gICo6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgfSBcbiAgXG4gICNpY29uIHtcbiAgICB3aWR0aDo2MCU7XG4gIH1cbiAgXG4gIC5zaWduLWluLWZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9pLnN0YWNrLmltZ3VyLmNvbS9lMlM2My5wbmcnKSAjZjJmMmYyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05cHggLTdweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzlweCA0M3B4O1xuICAgIHBhZGRpbmctbGVmdDogNDFweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICAuc2lnbi1pbi1mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8vaS5zdGFjay5pbWd1ci5jb20vZTJTNjMucG5nJykgI2UwZTBlMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOXB4IC03cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM5cHggNDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQxcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gIH0iXX0= */"] });


/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ 98458);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);










class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginModule, bootstrap: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent] });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_0__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule], exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent] }); })();


/***/ }),

/***/ 47677:
/*!*************************************************!*\
  !*** ./src/app/models/billing-address.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingInfo": () => (/* binding */ BillingInfo)
/* harmony export */ });
class BillingInfo {
    constructor(name, company, number, brand, street, city, country, admin_area, unit, postal, country_code) {
        this.name = name !== null && name !== void 0 ? name : "";
        this.company = company !== null && company !== void 0 ? company : "";
        this.number = number !== null && number !== void 0 ? number : "";
        this.brand = brand !== null && brand !== void 0 ? brand : "VISA";
        this.street = street !== null && street !== void 0 ? street : "";
        this.city = city !== null && city !== void 0 ? city : "";
        this.country = country !== null && country !== void 0 ? country : "";
        this.admin_area = admin_area !== null && admin_area !== void 0 ? admin_area : "";
        this.postal = postal !== null && postal !== void 0 ? postal : "";
        this.unit = unit;
        this.country_code = country_code !== null && country_code !== void 0 ? country_code : "";
    }
}


/***/ }),

/***/ 38266:
/*!**************************************!*\
  !*** ./src/app/models/blog.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blog": () => (/* binding */ Blog)
/* harmony export */ });
class Blog {
    constructor(uid, timestamp, timestampDiff, isAvailable, title, blogItems, blogID, blogURL) {
        this.blogItems = [];
        this.uid = uid !== null && uid !== void 0 ? uid : "";
        this.timestamp = timestamp !== null && timestamp !== void 0 ? timestamp : new Date();
        this.timestampDiff = timestampDiff !== null && timestampDiff !== void 0 ? timestampDiff : "";
        this.isAvailable = isAvailable !== null && isAvailable !== void 0 ? isAvailable : false;
        this.title = title !== null && title !== void 0 ? title : "My Blog";
        this.blogItems = blogItems !== null && blogItems !== void 0 ? blogItems : [];
        this.blogID = blogID !== null && blogID !== void 0 ? blogID : "null";
        if (blogURL) {
            this.coverURl = new URL(blogURL);
        }
        else {
            this.coverURl = new URL("https://shopmythred.com");
        }
    }
}


/***/ }),

/***/ 25356:
/*!***************************************!*\
  !*** ./src/app/models/color.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
class Color {
    constructor(code, display, rgb, img, imgBack) {
        this.code = code;
        this.display = display;
        this.rgb = rgb;
        this.img = img;
        this.imgBack = imgBack;
    }
}


/***/ }),

/***/ 30504:
/*!*******************************************!*\
  !*** ./src/app/models/inventory.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inventory": () => (/* binding */ Inventory)
/* harmony export */ });
class Inventory {
    constructor(code, name, amount, timestamp, id, autoReload) {
        this.code = code !== null && code !== void 0 ? code : "";
        this.name = name !== null && name !== void 0 ? name : "";
        this.amount = amount !== null && amount !== void 0 ? amount : 0;
        this.timestamp = timestamp !== null && timestamp !== void 0 ? timestamp : new Date();
        this.id = id !== null && id !== void 0 ? id : "";
        this.autoReload = autoReload !== null && autoReload !== void 0 ? autoReload : false;
    }
}


/***/ }),

/***/ 29297:
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
    constructor(orderID, timestamp, products, status, intents, totalCost, tax, subtotal, address, currency, currencySymbol, trackingNumber, shippingIntent, shippingCost, uid, merchantUID) {
        this.orderID = orderID !== null && orderID !== void 0 ? orderID : "";
        this.timestamp = timestamp !== null && timestamp !== void 0 ? timestamp : new Date();
        this.products = products !== null && products !== void 0 ? products : [];
        this.status = status !== null && status !== void 0 ? status : "cancelled";
        this.intents = intents !== null && intents !== void 0 ? intents : [];
        this.totalCost = totalCost !== null && totalCost !== void 0 ? totalCost : 0;
        this.tax = tax !== null && tax !== void 0 ? tax : 0;
        this.subtotal = subtotal !== null && subtotal !== void 0 ? subtotal : 0;
        this.address = address;
        this.currency = currency !== null && currency !== void 0 ? currency : "cad";
        this.currencySymbol = currencySymbol !== null && currencySymbol !== void 0 ? currencySymbol : "$";
        this.trackingNumber = trackingNumber;
        this.shippingIntent = shippingIntent;
        this.shippingCost = shippingCost !== null && shippingCost !== void 0 ? shippingCost : 0;
        this.uid = uid !== null && uid !== void 0 ? uid : "";
        this.merchantUID = merchantUID;
    }
}


/***/ }),

/***/ 49991:
/*!*************************************************!*\
  !*** ./src/app/models/product-in-cart.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductInCart": () => (/* binding */ ProductInCart)
/* harmony export */ });
class ProductInCart {
    constructor(product, size, quantity, isDeleted, timestamp, timestampDiff, saleID, profit) {
        this.product = product;
        this.size = size !== null && size !== void 0 ? size : "M";
        this.quantity = quantity !== null && quantity !== void 0 ? quantity : 1;
        this.isDeleted = isDeleted !== null && isDeleted !== void 0 ? isDeleted : false;
        this.timestamp = timestamp !== null && timestamp !== void 0 ? timestamp : new Date();
        this.timestampDiff = timestampDiff !== null && timestampDiff !== void 0 ? timestampDiff : "";
        this.saleID = saleID !== null && saleID !== void 0 ? saleID : "";
        this.profit = profit !== null && profit !== void 0 ? profit : 0;
    }
}


/***/ }),

/***/ 81454:
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
class Product {
    constructor(uid, picID, description, productID, timestamp, timestampDiff, blurred, price, name, templateColor, likes, liked, comments, isAvailable, isPublic, productType, displaySide, supportedSides, url) {
        this.uid = uid !== null && uid !== void 0 ? uid : "";
        this.picID = picID !== null && picID !== void 0 ? picID : "";
        this.description = description !== null && description !== void 0 ? description : "";
        this.productID = productID !== null && productID !== void 0 ? productID : "";
        this.timestamp = timestamp !== null && timestamp !== void 0 ? timestamp : new Date();
        this.timestampDiff = timestampDiff !== null && timestampDiff !== void 0 ? timestampDiff : "";
        this.blurred = blurred !== null && blurred !== void 0 ? blurred : false;
        this.price = price !== null && price !== void 0 ? price : 0;
        this.name = name !== null && name !== void 0 ? name : "";
        this.templateColor = templateColor !== null && templateColor !== void 0 ? templateColor : "";
        this.likes = likes !== null && likes !== void 0 ? likes : 0;
        this.liked = liked !== null && liked !== void 0 ? liked : false;
        this.comments = comments !== null && comments !== void 0 ? comments : 0;
        this.isAvailable = isAvailable !== null && isAvailable !== void 0 ? isAvailable : false;
        this.isPublic = isPublic !== null && isPublic !== void 0 ? isPublic : false;
        this.productType = productType !== null && productType !== void 0 ? productType : "";
        this.displaySide = displaySide !== null && displaySide !== void 0 ? displaySide : "";
        this.supportedSides = supportedSides !== null && supportedSides !== void 0 ? supportedSides : [];
        this.url = new URL(url !== null && url !== void 0 ? url : "https://shopmythred.com");
    }
    getUrl(downloadBack) {
        if (this.uid) {
            if (downloadBack) {
                return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F" + this.uid + "%2FProducts%2F" + this.productID + "%2FBACK_" + this.productID + ".png?alt=media";
            }
            return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F" + this.uid + "%2FProducts%2F" + this.productID + "%2F" + this.productID + ".png?alt=media";
        }
        return undefined;
    }
}


/***/ }),

/***/ 37927:
/*!**************************************************!*\
  !*** ./src/app/models/shipping-address.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingInfo": () => (/* binding */ ShippingInfo)
/* harmony export */ });
class ShippingInfo {
    constructor(name, company, street, city, country, admin_area, unit, postal, phone_num, country_code, email) {
        this.name = name !== null && name !== void 0 ? name : "";
        this.company = company !== null && company !== void 0 ? company : "";
        this.street = street !== null && street !== void 0 ? street : "";
        this.city = city !== null && city !== void 0 ? city : "";
        this.country = country !== null && country !== void 0 ? country : "";
        this.admin_area = admin_area !== null && admin_area !== void 0 ? admin_area : "";
        this.postal = postal !== null && postal !== void 0 ? postal : "";
        this.phone_num = phone_num !== null && phone_num !== void 0 ? phone_num : "";
        this.unit = unit;
        this.country_code = country_code !== null && country_code !== void 0 ? country_code : "";
        this.email = email !== null && email !== void 0 ? email : "";
    }
}


/***/ }),

/***/ 31558:
/*!**************************************************!*\
  !*** ./src/app/models/shipping-country.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Country": () => (/* binding */ Country)
/* harmony export */ });
class Country {
    constructor(name, flag, name_full, currency_name, currency_symbol, rate, is_main_currency, shipping_rate_usd) {
        this.name = name !== null && name !== void 0 ? name : "";
        this.name_full = name_full !== null && name_full !== void 0 ? name_full : "";
        this.flag = flag !== null && flag !== void 0 ? flag : "";
        this.currency_name = currency_name !== null && currency_name !== void 0 ? currency_name : "";
        this.currency_symbol = currency_symbol !== null && currency_symbol !== void 0 ? currency_symbol : "";
        this.rate = rate !== null && rate !== void 0 ? rate : 1;
        this.is_main_currency = is_main_currency !== null && is_main_currency !== void 0 ? is_main_currency : false;
        this.shipping_rate_usd = shipping_rate_usd !== null && shipping_rate_usd !== void 0 ? shipping_rate_usd : 0;
    }
}


/***/ }),

/***/ 23397:
/*!**********************************************!*\
  !*** ./src/app/models/store-domain.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreDomain": () => (/* binding */ StoreDomain)
/* harmony export */ });
class StoreDomain {
    constructor(host, protocol, status, txt) {
        this.host = host !== null && host !== void 0 ? host : "";
        this.protocol = protocol !== null && protocol !== void 0 ? protocol : "";
        this.status = status !== null && status !== void 0 ? status : 1;
        this.txt = txt;
    }
    fullURL() {
        return this.protocol + "://" + this.host;
    }
}


/***/ }),

/***/ 91293:
/*!***************************************!*\
  !*** ./src/app/models/store.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _theme_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.model */ 14937);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);


class Store {
    constructor(uid, dpID, username, fullName, bio, notifID, userFollowing, userLiked, followerCount, postCount, followingCount, usersBlocking, profileLink, verified, isPublic, postNotifsList, slogan, loading, themeLink, homeLink, actionLink, colorStyle, fontName, socials, customURL) {
        var _a, _b, _c, _d, _e;
        this.uid = uid;
        this.dpID = dpID;
        this.username = username;
        this.fullName = fullName;
        this.bio = bio;
        this.notifID = notifID;
        this.userFollowing = userFollowing;
        this.userLiked = userLiked;
        this.followerCount = followerCount;
        this.postCount = postCount;
        this.followingCount = followingCount;
        this.usersBlocking = usersBlocking;
        if (profileLink) {
            this.profileLink = new URL((_a = profileLink) !== null && _a !== void 0 ? _a : "");
        }
        if (themeLink) {
            this.themeLink = new URL((_b = themeLink) !== null && _b !== void 0 ? _b : "");
        }
        if (homeLink) {
            this.homeLink = new URL((_c = homeLink) !== null && _c !== void 0 ? _c : "");
        }
        if (actionLink) {
            this.actionLink = new URL((_d = actionLink) !== null && _d !== void 0 ? _d : "");
        }
        this.verified = verified;
        this.isPublic = isPublic;
        this.postNotifsList = postNotifsList;
        this.slogan = (_e = slogan !== null && slogan !== void 0 ? slogan : fullName) !== null && _e !== void 0 ? _e : "";
        this.loading = loading !== null && loading !== void 0 ? loading : {
            name: "ball-clip-rotate-pulse",
            color: [100.0, 100.0, 100.0, 1],
            bg_color: [255.0, 255.0, 255.0, 0.98]
        };
        this.colorStyle = colorStyle !== null && colorStyle !== void 0 ? colorStyle : new _theme_model__WEBPACK_IMPORTED_MODULE_0__.StoreTheme('Light', 'light', 'dark', [255.0, 255.0, 255.0, 1], [10.0, 10.0, 10.0, 1]);
        this.fontName = fontName !== null && fontName !== void 0 ? fontName : 'Montserrat'; //"Roboto"
        // this.colorStyle = colorStyle ?? new StoreTheme('Dark','dark','light',[10.0, 10.0, 10.0, 1],[255.0, 255.0, 255.0, 1])
        // this.colorStyle = colorStyle ?? new StoreTheme('Red','light','dark',[255.0, 0.0, 0.0, 1],[10.0, 10.0, 10.0, 1])
        let s = [];
        if (socials != undefined && socials.length != 0) {
            _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.socials.forEach(social => {
                let same = socials.filter(obj => {
                    return obj.name == social.name;
                });
                if (same && same.length != 0) {
                    s.push(same[0]);
                }
            });
            this.socials = s;
        }
        this.customURL = customURL;
    }
}


/***/ }),

/***/ 10773:
/*!***********************************************!*\
  !*** ./src/app/models/template-side.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateSide": () => (/* binding */ TemplateSide)
/* harmony export */ });
class TemplateSide {
    constructor(name, heightCM, widthCM, widthMultiplier, centerYConst, centerXConst, useReverseAspect, rotation) {
        this.name = name;
        this.heightCM = heightCM;
        this.widthCM = widthCM;
        this.widthMultiplier = widthMultiplier;
        this.centerYConst = centerYConst;
        this.centerXConst = centerXConst;
        this.useReverseAspect = useReverseAspect;
        this.rotation = rotation;
    }
    aspectRatio() {
        if (this.useReverseAspect) {
            return this.widthCM / this.heightCM;
        }
        return this.heightCM / this.widthCM;
    }
    reversedAspectRatio() {
        return this.widthCM / this.heightCM;
    }
    regularAspectRatio() {
        return this.heightCM / this.widthCM;
    }
}


/***/ }),

/***/ 36083:
/*!******************************************!*\
  !*** ./src/app/models/template.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template": () => (/* binding */ Template)
/* harmony export */ });
class Template {
    constructor(templateID, templateDisplayName, info, colors, sizes, minPrice, productCode, category, moreInfo, isDiscount, supportedSides, extraCost, bulkPrice, bulkUnit, bulkSuggestPrice, onlyBulk, has3D) {
        this.templateID = templateID !== null && templateID !== void 0 ? templateID : "";
        this.templateDisplayName = templateDisplayName !== null && templateDisplayName !== void 0 ? templateDisplayName : "";
        this.info = info !== null && info !== void 0 ? info : "";
        this.colors = colors !== null && colors !== void 0 ? colors : [];
        this.sizes = sizes !== null && sizes !== void 0 ? sizes : [];
        this.minPrice = minPrice !== null && minPrice !== void 0 ? minPrice : 0;
        this.productCode = productCode !== null && productCode !== void 0 ? productCode : "ATC1000";
        this.category = category !== null && category !== void 0 ? category : "";
        this.moreInfo = moreInfo !== null && moreInfo !== void 0 ? moreInfo : "";
        this.isDiscount = isDiscount !== null && isDiscount !== void 0 ? isDiscount : false;
        this.supportedSides = supportedSides !== null && supportedSides !== void 0 ? supportedSides : [];
        this.extraCost = extraCost !== null && extraCost !== void 0 ? extraCost : 0;
        this.bulkPrice = bulkPrice !== null && bulkPrice !== void 0 ? bulkPrice : 0;
        this.bulkUnit = bulkUnit !== null && bulkUnit !== void 0 ? bulkUnit : 0;
        this.bulkSuggestPrice = bulkSuggestPrice !== null && bulkSuggestPrice !== void 0 ? bulkSuggestPrice : 0;
        this.onlyBulk = onlyBulk !== null && onlyBulk !== void 0 ? onlyBulk : false;
        this.has3D = has3D !== null && has3D !== void 0 ? has3D : false;
    }
}


/***/ }),

/***/ 14937:
/*!***************************************!*\
  !*** ./src/app/models/theme.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreTheme": () => (/* binding */ StoreTheme)
/* harmony export */ });
class StoreTheme {
    constructor(name, back_code, text_code, bg_color, btn_color) {
        this.name = name !== null && name !== void 0 ? name : "";
        this.back_code = back_code !== null && back_code !== void 0 ? back_code : "";
        this.text_code = text_code !== null && text_code !== void 0 ? text_code : "";
        this.bg_color = bg_color !== null && bg_color !== void 0 ? bg_color : [];
        this.btn_color = btn_color !== null && btn_color !== void 0 ? btn_color : [];
    }
}


/***/ }),

/***/ 57207:
/*!********************************************************!*\
  !*** ./src/app/popup-dialog/popup-dialog.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupDialogComponent": () => (/* binding */ PopupDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);



function PopupDialogComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PopupDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.title = "Popup Title";
        this.message = "This is the message";
        this.yesBtn = "Yes";
        this.noBtn = "No";
    }
    dismiss(success) {
        this.activeModal.dismiss({ Success: success });
    }
    ngOnInit() {
    }
}
PopupDialogComponent.ɵfac = function PopupDialogComponent_Factory(t) { return new (t || PopupDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
PopupDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupDialogComponent, selectors: [["app-popup-dialog"]], decls: 12, vars: 5, consts: [[1, "w-100"], [1, "text-center", "fw-bolder", "m-2"], [1, "text-center", "fw-bolder", "mx-2", "mt-2"], [1, "px-2", "w-100"], ["class", "rounded w-100 aspect-ratio", "style", "object-fit: contain;", 3, "src", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "m-2"], ["role", "button", 1, "btn", "flex-fill", "btn-danger", "me-1", 3, "click"], ["role", "button", 1, "btn", "flex-fill", "btn-dark", "ms-1", 3, "click"], [1, "rounded", "w-100", "aspect-ratio", 2, "object-fit", "contain", 3, "src"]], template: function PopupDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupDialogComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupDialogComponent_Template_a_click_8_listener() { return ctx.dismiss(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupDialogComponent_Template_a_click_10_listener() { return ctx.dismiss(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.img != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.noBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.yesBtn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1cC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6029:
/*!******************************************!*\
  !*** ./src/app/services/load.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadService": () => (/* binding */ LoadService)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ 42329);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product.model */ 81454);
/* harmony import */ var _models_template_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/template.model */ 36083);
/* harmony import */ var _models_template_side_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/template-side.model */ 10773);
/* harmony import */ var _models_color_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/color.model */ 25356);
/* harmony import */ var _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/shipping-country.model */ 31558);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _models_blog_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/blog.model */ 38266);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/product-in-cart.model */ 49991);
/* harmony import */ var _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/shipping-address.model */ 37927);
/* harmony import */ var _models_billing_address_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/billing-address.model */ 47677);
/* harmony import */ var _models_inventory_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/inventory.model */ 30504);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ 91605);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/order.model */ 29297);
/* harmony import */ var _models_store_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/store.model */ 91293);
/* harmony import */ var _models_theme_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/theme.model */ 14937);
/* harmony import */ var _models_store_domain_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/store-domain.model */ 23397);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/functions */ 19486);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/storage */ 68274);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-stripe */ 72284);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);




























class LoadService {
  constructor(platformID, db, auth, functions, storage, stripeService, snackBar) {
    this.platformID = platformID;
    this.db = db;
    this.auth = auth;
    this.functions = functions;
    this.storage = storage;
    this.stripeService = stripeService;
    this.snackBar = snackBar;
    this.isShop = false;
    this.hideCart = false;
    this.shouldShowCurrency = false;
  }

  logView() {
    if (!_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.didLog && _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid) {
      _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.didLog = true;
      this.functions.httpsCallable("updateView")({
        storeUID: _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
          if (resp) {} else {}
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => {
        console.error({
          err
        });
      });
    }
  }

  beginBankAdd(callback) {
    this.functions.httpsCallable("getExpressCreateLink")({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
        if (resp) {
          console.log(resp);
          callback(resp);
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), err => {
      console.error({
        err
      });
    });
  }

  getBankInfo(callback) {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      let sub = _this.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe(doc => {
        let docData = doc;

        if (docData) {
          let activeMerchant = docData.activeMerchant;
          let merchantID = docData.merchant_id;

          if (activeMerchant && merchantID) {
            _this.functions.httpsCallable('getBankInfo')({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe(resp => {
              callback(resp);
            }, err => {
              callback(undefined);
              console.error({
                err
              });
            });
          } else {
            callback(undefined);
          }
        } else {
          callback(undefined);
        }

        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this.platformID)) sub.unsubscribe();
      });
    })();
  }

  getSubInfo(callback) {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this2.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      let sub = _this2.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe(doc => {
        var _a;

        let docData = doc;

        if (docData) {
          let plan_id = docData.plan_id;
          let can_trial = (_a = docData.canTrial) !== null && _a !== void 0 ? _a : true;

          if (plan_id && plan_id != "") {
            _this2.functions.httpsCallable('getSubInfo')({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe(resp => {
              callback(resp);
            }, err => {
              callback(undefined, can_trial);
              console.error({
                err
              });
            });
          } else {
            if (!can_trial) {
              callback(undefined, false);
            }
          }
        } else {
          callback(undefined, true);
        }

        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this2.platformID)) sub.unsubscribe();
      });
    })();
  }

  getInventory(callback) {
    var _this3 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this3.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      let sub = _this3.db.collection("Users/" + uid + "/Inventory").valueChanges({
        idField: 'inventoryID'
      }).subscribe(docDatas => {
        let totalInventory = new Array();
        docDatas.forEach(doc => {
          var _a;

          let docData = doc;

          if (docData) {
            let amt = docData.amount;
            let code = docData.id;
            let id = docData.inventoryID;
            let autoReload = (_a = docData.auto_reload) !== null && _a !== void 0 ? _a : false;
            let timestamp = docData.timestamp.toDate();
            let name = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates.filter(obj => {
              return obj.productCode == code;
            })[0].templateDisplayName;
            let inventory = new _models_inventory_model__WEBPACK_IMPORTED_MODULE_12__.Inventory(code, name, amt, timestamp, id, autoReload);
            totalInventory.push(inventory);
          }

          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this3.platformID)) sub.unsubscribe();
        });
        callback(totalInventory);
      });
    })();
  }

  setAutoReload(inventory, callback) {
    var _this4 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this4.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      yield _this4.db.collection("Users/" + uid + "/Inventory").doc(inventory.id).update({
        auto_reload: true
      });
      callback(true);
    })();
  }

  removeAutoReload(inventory, callback) {
    var _this5 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this5.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      yield _this5.db.collection("Users/" + uid + "/Inventory").doc(inventory.id).update({
        auto_reload: false
      });
      callback(true);
    })();
  }

  getCountries() {
    let sub = this.db.collection("Print_Info").doc("Shipping_Info").valueChanges().subscribe(docData => {
      const data = docData;
      const usShipping = Math.round(data.shipping_rate_us * 100);
      const caShipping = Math.round(data.shipping_rate_canada * 100);
      const intlShipping = Math.round(data.shipping_rate_intl * 100);
      const currencies = data.supportedCurrencies;
      _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.availableCurrencies = [];
      currencies.forEach(currency => {
        var _a;

        const name = currency.country;
        const flag = currency.flag;
        const currency_name = currency.name;
        const rate = currency.rate;
        const is_main_currency = currency.is_main_currency;
        const symbol = currency.symbol;
        const name_full = currency.country_full;
        const country = new _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_6__.Country(name, flag, name_full, currency_name, symbol, rate, is_main_currency, 0);

        if (name == "CA") {
          country.shipping_rate_usd = caShipping;
        } else if (name == "US") {
          country.shipping_rate_usd = usShipping;
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedCurrency = country;
        } else {
          country.shipping_rate_usd = intlShipping;
        }

        if (!((_a = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.availableCurrencies) === null || _a === void 0 ? void 0 : _a.includes(country))) {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.availableCurrencies.push(country);
        }
      });
      _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.availableCurrencies.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) {
        let cacheCurrency = localStorage.getItem("LOCAL_CURRENCY");

        if (cacheCurrency && cacheCurrency != null && cacheCurrency != "") {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedCurrency = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.availableCurrencies.find(currency => currency.currency_name == cacheCurrency);
        } else {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedCurrency = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.availableCurrencies.find(currency => currency.currency_name == "USD");
        }
      }

      if (this.myCallback) this.myCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  getUser(username, uid, isCustom = false) {
    var query = this.db.collection("Users", ref => ref.where("Username", '==', username));

    if (uid) {
      query = this.db.collection("Users", ref => ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.FieldPath.documentId(), '==', uid));
    }

    if (isCustom) {
      query = this.db.collection("Users", ref => ref.where("Custom_URL.host", '==', username).where("Custom_URL.status", '==', 2));
    }

    let sub = query.valueChanges({
      idField: 'UID'
    }).subscribe(doc => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

      let docData = doc[0];

      if (docData) {
        let uid = docData.UID; //UID OF COMMENT IMAGE

        let dpUID = docData["ProfilePicID"]; //UID OF COMMENT IMAGE

        let username = docData["Username"]; //COMMENTER'S USERNAME

        let fullName = docData["Full_Name"];
        let bio = docData["Bio"];
        let notifID = docData["Notification ID"];
        let userFollowing = (_a = docData["Following_List"]) !== null && _a !== void 0 ? _a : [];
        let usersBlocking = (_b = docData["Users_Blocking"]) !== null && _b !== void 0 ? _b : [];
        let followerCount = (_c = docData["Followers_Count"]) !== null && _c !== void 0 ? _c : 0;
        let followingCount = (_d = docData["Following_Count"]) !== null && _d !== void 0 ? _d : 0;
        let postCount = (_e = docData["Posts_Count"]) !== null && _e !== void 0 ? _e : 0;
        let verified = (_f = docData["Verified"]) !== null && _f !== void 0 ? _f : false;
        let postNotifs = (_g = docData["Post_Notifications"]) !== null && _g !== void 0 ? _g : [];
        let isPublic = (_h = docData["Public"]) !== null && _h !== void 0 ? _h : true;
        let slogan = docData["Slogan"];
        let loading = docData["indicator"];
        let style = docData["store_style"];
        let font = docData["font"];
        let socials = docData["Socials"];
        let custom_url = (_j = docData["Custom_URL"]) !== null && _j !== void 0 ? _j : {};
        let host = custom_url.host;
        let protocol = custom_url.protocol;
        let status = custom_url.status;
        let txt = custom_url.txt;
        let finalURL = new _models_store_domain_model__WEBPACK_IMPORTED_MODULE_17__.StoreDomain(host, protocol, status, txt);
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo = new _models_store_model__WEBPACK_IMPORTED_MODULE_15__.Store(uid, dpUID, username, fullName, bio, notifID, userFollowing, [], followerCount, postCount, followingCount, usersBlocking, this.getProfileURL(uid, dpUID), verified, isPublic, postNotifs, slogan, undefined, this.getDefaultURL(), this.getDefaultURL(), this.getDefaultURL(), undefined, font, socials, finalURL);
        let list = (_k = docData["image_list"]) !== null && _k !== void 0 ? _k : [];
        list.forEach(type => {
          if (type == 'theme') {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.themeLink = new URL(this.getThemeURL(uid));
          } else if (type == 'home') {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.homeLink = new URL(this.getHomeURL(uid));
          } else if (type == 'action') {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.actionLink = new URL(this.getActionURL(uid));
          }
        });

        if (loading === null || loading === void 0 ? void 0 : loading.name) {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.loading.name = loading === null || loading === void 0 ? void 0 : loading.name;
        }

        if (loading === null || loading === void 0 ? void 0 : loading.color) {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.loading.color = this.parseColor(loading.color);
        }

        if (loading === null || loading === void 0 ? void 0 : loading.bg_color) {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.loading.bg_color = this.parseColor(loading.bg_color);
        }

        if (style) {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.colorStyle = new _models_theme_model__WEBPACK_IMPORTED_MODULE_16__.StoreTheme(style === null || style === void 0 ? void 0 : style.name, style === null || style === void 0 ? void 0 : style.back_code, style === null || style === void 0 ? void 0 : style.text_code, this.parseColor(style === null || style === void 0 ? void 0 : style.bg_color), this.parseColor(style === null || style === void 0 ? void 0 : style.btn_color));
        }
      } else {
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid = "";
      }

      if (this.myCallback) this.myCallback();

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) {
        (_l = this.rootComponent) === null || _l === void 0 ? void 0 : _l.getCart();
        sub.unsubscribe();
      }
    });
  }

  parseColor(color) {
    var finalArr = new Array();
    color === null || color === void 0 ? void 0 : color.split(",").forEach(color => {
      finalArr.push(Number(color.trim()));
    });
    return finalArr;
  }

  getCustomer() {
    var _this6 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo = new _models_store_model__WEBPACK_IMPORTED_MODULE_15__.Store();
      let uid = (_a = yield _this6.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      if (uid) {
        let sub = _this6.db.collection("Users").doc(uid).valueChanges({
          idField: 'UID'
        }).subscribe(doc => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

          let docData = doc;

          if (docData) {
            let uid = docData.UID; //UID OF COMMENT IMAGE

            let dpUID = docData["ProfilePicID"]; //UID OF COMMENT IMAGE

            let username = docData["Username"]; //COMMENTER'S USERNAME

            let fullName = docData["Full_Name"];
            let bio = docData["Bio"];
            let notifID = docData["Notification ID"];
            let userFollowing = (_a = docData["Following_List"]) !== null && _a !== void 0 ? _a : [];
            let usersBlocking = (_b = docData["Users_Blocking"]) !== null && _b !== void 0 ? _b : [];
            let followerCount = (_c = docData["Followers_Count"]) !== null && _c !== void 0 ? _c : 0;
            let followingCount = (_d = docData["Following_Count"]) !== null && _d !== void 0 ? _d : 0;
            let postCount = (_e = docData["Posts_Count"]) !== null && _e !== void 0 ? _e : 0;
            let verified = (_f = docData["Verified"]) !== null && _f !== void 0 ? _f : false;
            let postNotifs = (_g = docData["Post_Notifications"]) !== null && _g !== void 0 ? _g : [];
            let isPublic = (_h = docData["Public"]) !== null && _h !== void 0 ? _h : true;
            let slogan = docData["Slogan"];
            let style = docData["store_style"];
            let font = docData["font"];
            let socials = docData["Socials"];
            let custom_url = (_j = docData["Custom_URL"]) !== null && _j !== void 0 ? _j : {};
            let host = custom_url.host;
            let protocol = custom_url.protocol;
            let status = custom_url.status;
            let txt = custom_url.txt;
            let finalURL = new _models_store_domain_model__WEBPACK_IMPORTED_MODULE_17__.StoreDomain(host, protocol, status, txt);
            let loading = docData["indicator"];
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo = new _models_store_model__WEBPACK_IMPORTED_MODULE_15__.Store(uid, dpUID, username, fullName, bio, notifID, userFollowing, [], followerCount, postCount, followingCount, usersBlocking, _this6.getProfileURL(uid, dpUID), verified, isPublic, postNotifs, slogan, undefined, _this6.getDefaultURL(), _this6.getDefaultURL(), _this6.getDefaultURL(), undefined, font, socials, finalURL);
            let list = (_k = docData["image_list"]) !== null && _k !== void 0 ? _k : [];
            list.forEach(type => {
              if (type == 'theme') {
                _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.themeLink = new URL(_this6.getThemeURL(uid));
              } else if (type == 'home') {
                _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.homeLink = new URL(_this6.getHomeURL(uid));
              } else if (type == 'action') {
                _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.actionLink = new URL(_this6.getActionURL(uid));
              }
            });

            if (loading === null || loading === void 0 ? void 0 : loading.name) {
              _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.loading.name = loading === null || loading === void 0 ? void 0 : loading.name;
            }

            if (loading === null || loading === void 0 ? void 0 : loading.color) {
              _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.loading.color = _this6.parseColor(loading.color);
            }

            if (loading === null || loading === void 0 ? void 0 : loading.bg_color) {
              _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.loading.bg_color = _this6.parseColor(loading.bg_color);
            }

            if (style) {
              _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.colorStyle = new _models_theme_model__WEBPACK_IMPORTED_MODULE_16__.StoreTheme(style === null || style === void 0 ? void 0 : style.name, style === null || style === void 0 ? void 0 : style.back_code, style === null || style === void 0 ? void 0 : style.text_code, _this6.parseColor(style === null || style === void 0 ? void 0 : style.bg_color), _this6.parseColor(style === null || style === void 0 ? void 0 : style.btn_color));
            }

            if (_this6.myCallback) _this6.myCallback();
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this6.platformID)) sub.unsubscribe();
          }
        });
      } else {
        if (_this6.myCallback) _this6.myCallback();
      }
    })();
  }

  getThemes() {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.themes = [];
    var query = this.db.collection("Store_Themes", ref => ref.orderBy("index", "asc"));
    let sub = query.valueChanges().subscribe(docDatas => {
      docDatas.forEach(doc => {
        var _a;

        let docData = doc;

        if (docData) {
          let name = docData.name;
          let btn_color = docData.btn_color;
          let bg_color = docData.bg_color;
          let back_code = docData.back_code;
          let text_code = docData.text_code;
          let theme = new _models_theme_model__WEBPACK_IMPORTED_MODULE_16__.StoreTheme(name, back_code, text_code, this.parseColor(bg_color), this.parseColor(btn_color));
          (_a = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.themes) === null || _a === void 0 ? void 0 : _a.push(theme);
        }
      });
      if (this.myCallback) this.myCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  getPosts(callback, filterID, uid = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid) {
    const time = firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.Timestamp.now();
    var query = this.db.collection("Users/" + uid + "/Products", ref => ref.where("Timestamp", '<=', time).where("Has_Picture", '==', true).where("Available", '==', true).where("Public", '==', true).orderBy("Timestamp", "desc"));

    if (filterID) {
      query = this.db.collection("Users/" + uid + "/Products", ref => ref.where("Timestamp", '<=', time).where("Type", '==', filterID).where("Available", '==', true).where("Public", '==', true).orderBy("Timestamp", "desc"));
    }

    let sub = query.get().subscribe(docDatas => {
      var products = new Array();
      docDatas.docs.forEach(doc => {
        var _a, _b, _c, _d;

        let docData = doc.data();

        if (docData) {
          let uid = docData.UID;
          let productID = docData.Product_ID;
          let timestamp = docData.Timestamp.toDate();
          let description = docData.Description;
          let name = docData.Name;
          let blurred = docData.Blurred;
          let templateColor = docData.Template_Color;
          let likes = docData.Likes;
          let priceCents = docData.Price_Cents;
          let comments = docData.Comments;
          let isPublic = (_a = docData.Public) !== null && _a !== void 0 ? _a : true;
          let productType = (_b = docData.Type) !== null && _b !== void 0 ? _b : "ATC1000";
          let displaySide = (_c = docData.Side) !== null && _c !== void 0 ? _c : "front";
          let sides = (_d = docData["Sides"]) !== null && _d !== void 0 ? _d : ["Front"];
          let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(uid, productID, description, productID, timestamp, "", blurred, priceCents, name, templateColor, likes, false, comments, true, isPublic, productType, displaySide, sides, this.getURL(uid, productID));
          products.push(product);
        }
      });

      if (!filterID) {
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.availableTemplates = this.getTemplatesFiltered(products);
      }

      products.sort(function (a, b) {
        if (a.timestamp > b.timestamp) {
          return -1;
        }

        if (a.timestamp < b.timestamp) {
          return 1;
        }

        return 0;
      });

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) {
        sub.unsubscribe();
      }

      callback(products);
    });
  }

  setFilterProducts(products) {
    if (this.shopComponent) this.shopComponent.storeProducts = products;
  }

  addProduct(product) {
    var _a, _b, _c;

    if (this.shopComponent) (_a = this.shopComponent.storeProducts) === null || _a === void 0 ? void 0 : _a.unshift(product);
    if (this.adminComponent) (_b = this.adminComponent.storeProducts) === null || _b === void 0 ? void 0 : _b.unshift(product);
    if (this.homeComponent) (_c = this.homeComponent.storeProducts) === null || _c === void 0 ? void 0 : _c.unshift(product);
  }

  editProduct(product) {
    var _a, _b, _c;

    if (this.shopComponent) {
      let p = (_a = this.shopComponent.storeProducts) === null || _a === void 0 ? void 0 : _a.filter(obj => {
        return obj.productID == product.productID;
      })[0];
      p.name = product.name;
      p.description = product.description;
      p.price = product.price;
    }

    if (this.adminComponent) {
      let p = (_b = this.adminComponent.storeProducts) === null || _b === void 0 ? void 0 : _b.filter(obj => {
        return obj.productID == product.productID;
      })[0];
      p.name = product.name;
      p.description = product.description;
      p.price = product.price;
    }

    if (this.homeComponent) {
      let p = (_c = this.homeComponent.storeProducts) === null || _c === void 0 ? void 0 : _c.filter(obj => {
        return obj.productID == product.productID;
      })[0];
      p.name = product.name;
      p.description = product.description;
      p.price = product.price;
    }
  }

  removeProduct(product) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    if (this.shopComponent) {
      let p = (_a = this.shopComponent.storeProducts) === null || _a === void 0 ? void 0 : _a.filter(obj => {
        return obj.productID == product.productID;
      })[0];
      let index = (_b = this.shopComponent.storeProducts) === null || _b === void 0 ? void 0 : _b.indexOf(p);

      if (index) {
        (_c = this.shopComponent.storeProducts) === null || _c === void 0 ? void 0 : _c.splice(index, 1);
      }
    }

    if (this.adminComponent) {
      let p = (_d = this.adminComponent.storeProducts) === null || _d === void 0 ? void 0 : _d.filter(obj => {
        return obj.productID == product.productID;
      })[0];
      let index = (_e = this.adminComponent.storeProducts) === null || _e === void 0 ? void 0 : _e.indexOf(p);

      if (index) {
        (_f = this.adminComponent.storeProducts) === null || _f === void 0 ? void 0 : _f.splice(index, 1);
      }
    }

    if (this.homeComponent) {
      let p = (_g = this.homeComponent.storeProducts) === null || _g === void 0 ? void 0 : _g.filter(obj => {
        return obj.productID == product.productID;
      })[0];
      let index = (_h = this.homeComponent.storeProducts) === null || _h === void 0 ? void 0 : _h.indexOf(p);

      if (index) {
        (_j = this.homeComponent.storeProducts) === null || _j === void 0 ? void 0 : _j.splice(index, 1);
      }
    }
  }

  getBlogs(filterID) {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.blogs = [];
    const time = firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.Timestamp.now();
    var query = this.db.collection("Users/" + _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid + "/Blogs", ref => ref.where("Timestamp", '<=', time).where("isAvailable", '==', true).orderBy("Timestamp", "desc"));
    let sub = query.valueChanges({
      idField: "Blog_ID"
    }).subscribe(docDatas => {
      docDatas.forEach(doc => {
        let docData = doc;

        if (docData) {
          let uid = docData.UID;
          let title = docData.Title;
          let timestamp = docData.Timestamp.toDate();
          let isAvailable = docData.isAvailable;
          let blogID = docData.Blog_ID;
          let blogItems = docData.Blog_Items;
          let coverURL = docData.Cover_URL;
          let blog = new _models_blog_model__WEBPACK_IMPORTED_MODULE_8__.Blog(uid, timestamp, "", isAvailable, title, blogItems, blogID, coverURL);
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.blogs.push(blog);
        }
      });
      if (this.myCallback) this.myCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  hasEmptyProperties(obj, ignoreKeys) {
    for (var key in obj) {
      if (ignoreKeys.includes(key)) {
        continue;
      }

      if (obj[key] == null || obj[key] == "" || obj[key] == undefined) {
        return true;
      }
    }

    return false;
  }

  linkAddress(callback) {
    var _this7 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      let uid = (_a = yield _this7.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      let shipping = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingInfo;

      if (uid && shipping && _this7.hasEmptyProperties(shipping, ["unit", "company", "country_code"])) {
        return;
      }

      let email = shipping.email;

      if ((_b = yield _this7.isLoggedIn()) === null || _b === void 0 ? void 0 : _b.isAnonymous) {
        let fData = {
          email: email
        };

        _this7.functions.httpsCallable('updateAuth')(fData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
          var _ref3 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
            if (typeof resp == "string") {
              yield _this7.setAddress(uid);

              _this7.auth.signInWithEmailAndPassword(email, resp).then(() => {
                // Signed in..
                callback();
              }).catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                callback("An error occured, please try again."); // if (this.myCallback) 
                // this.myCallback()
              });
            } else {
              //error
              console.log(resp);

              if (resp.errorInfo.code == "auth/email-already-exists") {
                console.log("This email address is being used by another account."); //show popup ******

                callback("Your email is being used by another Guest order.");
              } else {
                console.log(resp.errorInfo.code);
                callback("An error occured, please try again.");
              }
            }
          });

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }(), err => {
          console.error({
            err
          });
        });
      } else {
        yield _this7.setAddress(uid);
        callback();
      }
    })();
  }

  setAddress(uid) {
    var _this8 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      let shipping = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingInfo;
      let data = {
        Administrative_Area: shipping === null || shipping === void 0 ? void 0 : shipping.admin_area,
        City: shipping === null || shipping === void 0 ? void 0 : shipping.city,
        Country: shipping === null || shipping === void 0 ? void 0 : shipping.country,
        First_Name: shipping === null || shipping === void 0 ? void 0 : shipping.name.split(' ').slice(0, -1).join(' '),
        Last_Name: shipping === null || shipping === void 0 ? void 0 : shipping.name.split(' ').slice(-1).join(' '),
        Phone_Num: shipping === null || shipping === void 0 ? void 0 : shipping.phone_num,
        Email: shipping === null || shipping === void 0 ? void 0 : shipping.email,
        Postal_Code: shipping === null || shipping === void 0 ? void 0 : shipping.postal,
        Street: shipping === null || shipping === void 0 ? void 0 : shipping.street,
        Company: (_a = shipping === null || shipping === void 0 ? void 0 : shipping.company) !== null && _a !== void 0 ? _a : "",
        Unit_Number: (_b = shipping === null || shipping === void 0 ? void 0 : shipping.unit) !== null && _b !== void 0 ? _b : ""
      };

      if (uid) {
        yield _this8.db.collection("Users/" + uid + "/Payment_Info").doc("Delivery_Address").set(data);
      }
    })();
  }

  createPayment(storeID, isCard = true, callback) {
    var _this9 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this9.functions.httpsCallable('createWebIntent')({
        merchant_uid: storeID,
        isCard: isCard
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
        var _ref4 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
          callback(resp.order_id, resp.client_secret);
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }(), err => {
        callback("", "", err);
      });
    })();
  }

  stopSubscription(callback) {
    var _this10 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this10.functions.httpsCallable('removeSubIntent')({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
        var _ref5 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
          console.log(resp);
          callback(resp);
        });

        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }(), err => {
        console.error({
          err
        });
      });
    })();
  }

  reactivateSubscription(callback) {
    var _this11 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this11.functions.httpsCallable('reactivateSubIntent')({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
        var _ref6 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
          console.log(resp);
          callback(resp);
        });

        return function (_x6) {
          return _ref6.apply(this, arguments);
        };
      }(), err => {
        console.error({
          err
        });
      });
    })();
  }

  startSubscription(callback) {
    var _this12 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this12.functions.httpsCallable('createSubIntent')({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
        var _ref7 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
          console.log(resp);
          callback(resp);
        });

        return function (_x7) {
          return _ref7.apply(this, arguments);
        };
      }(), err => {
        console.error({
          err
        });
      });
    })();
  }

  createBulkPayment(type, callback) {
    var _this13 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this13.functions.httpsCallable('createBulkIntent')({
        type: type
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
        var _ref8 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
          callback(resp);
        });

        return function (_x8) {
          return _ref8.apply(this, arguments);
        };
      }(), err => {
        console.error({
          err
        });
      });
    })();
  }

  linkCard(details, callback) {
    var _this14 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      var billing = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo;
      let uid = (_a = yield _this14.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      console.log("assssss");

      if (details.card && details.stripe) {
        if (billing && _this14.hasEmptyProperties(billing, ["unit", "company", "brand", "number"])) {
          console.log(billing);
          return;
        }

        console.log("s");
        let stripe = details.stripe;

        if (_this14.isUndefined(billing === null || billing === void 0 ? void 0 : billing.unit)) {
          billing.unit = undefined;
        }

        let name = billing === null || billing === void 0 ? void 0 : billing.name;
        let card = details.card;
        var b = {
          line1: billing === null || billing === void 0 ? void 0 : billing.street,
          city: billing === null || billing === void 0 ? void 0 : billing.city,
          state: billing === null || billing === void 0 ? void 0 : billing.admin_area,
          postal_code: billing === null || billing === void 0 ? void 0 : billing.postal,
          country: billing === null || billing === void 0 ? void 0 : billing.country_code
        };

        if (billing === null || billing === void 0 ? void 0 : billing.unit) {
          b.line2 = billing.unit;
        }

        stripe.createPaymentMethod({
          type: 'card',
          card: card.element,
          billing_details: {
            address: b,
            name: name
          }
        }).subscribe(result => {
          var _a;

          if (result.paymentMethod) {
            // Use the token
            var fData = {
              token: result.paymentMethod.id,
              name: billing === null || billing === void 0 ? void 0 : billing.name,
              line1: billing === null || billing === void 0 ? void 0 : billing.street,
              line2: (_a = billing === null || billing === void 0 ? void 0 : billing.unit) !== null && _a !== void 0 ? _a : null,
              city: billing === null || billing === void 0 ? void 0 : billing.city,
              state: billing === null || billing === void 0 ? void 0 : billing.admin_area,
              zip: billing === null || billing === void 0 ? void 0 : billing.postal,
              country: billing === null || billing === void 0 ? void 0 : billing.country_code
            };

            if (true) {
              _this14.functions.httpsCallable('verifyCard')(fData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
                var _ref9 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
                  var _a, _b;

                  let data = {
                    Administrative_Area: billing === null || billing === void 0 ? void 0 : billing.admin_area,
                    City: billing === null || billing === void 0 ? void 0 : billing.city,
                    Country: billing === null || billing === void 0 ? void 0 : billing.country,
                    First_Name: billing === null || billing === void 0 ? void 0 : billing.name.split(' ').slice(0, -1).join(' '),
                    Last_Name: billing === null || billing === void 0 ? void 0 : billing.name.split(' ').slice(-1).join(' '),
                    Postal_Code: billing === null || billing === void 0 ? void 0 : billing.postal,
                    Street: billing === null || billing === void 0 ? void 0 : billing.street,
                    Company: (_a = billing === null || billing === void 0 ? void 0 : billing.company) !== null && _a !== void 0 ? _a : "",
                    Unit_Number: (_b = billing === null || billing === void 0 ? void 0 : billing.unit) !== null && _b !== void 0 ? _b : ""
                  };

                  if (uid) {
                    yield _this14.db.collection("Users/" + uid + "/Payment_Info").doc("Billing_Address").set(data);
                  }

                  callback();
                });

                return function (_x9) {
                  return _ref9.apply(this, arguments);
                };
              }(), err => {
                callback(err);
                console.error({
                  err
                });
              });
            }
          } else if (result.error) {
            // Error creating the token
            callback(result.error.message);
            console.log(result.error.message);
          }
        });
      } else {
        let data = {
          Administrative_Area: billing === null || billing === void 0 ? void 0 : billing.admin_area,
          City: billing === null || billing === void 0 ? void 0 : billing.city,
          Country: billing === null || billing === void 0 ? void 0 : billing.country,
          First_Name: billing === null || billing === void 0 ? void 0 : billing.name.split(' ').slice(0, -1).join(' '),
          Last_Name: billing === null || billing === void 0 ? void 0 : billing.name.split(' ').slice(-1).join(' '),
          Postal_Code: billing === null || billing === void 0 ? void 0 : billing.postal,
          Street: billing === null || billing === void 0 ? void 0 : billing.street,
          Company: (_b = billing === null || billing === void 0 ? void 0 : billing.company) !== null && _b !== void 0 ? _b : "",
          Unit_Number: (_c = billing === null || billing === void 0 ? void 0 : billing.unit) !== null && _c !== void 0 ? _c : ""
        };

        if (uid) {
          console.log("adsfg");
          yield _this14.db.collection("Users/" + uid + "/Payment_Info").doc("Billing_Address").set(data);
        }

        if (_this14.myCallback) _this14.myCallback();
      }
    })();
  }

  getBlog(blogID) {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedBlog = new _models_blog_model__WEBPACK_IMPORTED_MODULE_8__.Blog();
    let sub = this.db.collectionGroup("Blogs", ref => ref.where("Blog_ID", '==', blogID)).valueChanges().subscribe(docDatas => {
      docDatas.forEach(doc => {
        const docData = doc;

        if (docData) {
          let uid = docData.UID;
          let title = docData.Title;
          let timestamp = docData.Timestamp.toDate();
          let isAvailable = docData.isAvailable;
          let blogID = docData.Blog_ID;
          let blogItems = docData.Blog_Items;
          let coverURL = docData.Cover_URL;
          let blog = new _models_blog_model__WEBPACK_IMPORTED_MODULE_8__.Blog(uid, timestamp, "", isAvailable, title, blogItems, blogID, coverURL);
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedBlog = blog;
        }
      });
      if (this.myCallback) this.myCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  getAllBillingInfo() {
    var _this15 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this15.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      let sub = _this15.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe(doc => {
        let docData = doc;

        if (docData) {
          var card_type = docData.card_type;

          if (card_type) {
            card_type = card_type[0].toUpperCase() + card_type.slice(1);
          }

          let card_last_4 = docData.card_last_4;

          if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.brand = card_type;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.number = card_last_4;
          } else {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_11__.BillingInfo(undefined, undefined, card_last_4, card_type);
          }
        } else {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_11__.BillingInfo();
        }

        _this15.getBillingAddress();

        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this15.platformID)) sub.unsubscribe();
      });
    })();
  }

  getBillingInfo() {
    var _this16 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this16.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      let sub = _this16.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe(doc => {
        let docData = doc;

        if (docData) {
          let card_type = docData.card_type;
          let card_last_4 = docData.card_last_4;

          if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.brand = card_type;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.number = card_last_4;
          } else {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_11__.BillingInfo(undefined, undefined, card_last_4, card_type);
          }
        } else {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_11__.BillingInfo();
        }

        if (_this16.myCallback) _this16.myCallback();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this16.platformID)) sub.unsubscribe();
      });
    })();
  }

  getShippingAddress(oUID) {
    var _this17 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      var uid = oUID;

      if (!uid) {
        uid = (_a = yield _this17.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      }

      let sub = _this17.db.collection("Users/" + uid + "/Payment_Info").doc("Delivery_Address").valueChanges().subscribe(doc => {
        var _a, _b, _c;

        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingInfo = undefined;
        let docData = doc;

        if (docData) {
          let area = docData.Administrative_Area;
          let city = docData.City;
          let country = docData.Country;
          let firstName = docData.First_Name;
          let lastName = docData.Last_Name;
          let name = firstName + " " + lastName;
          let phone = docData.Phone_Num;
          let postal_code = docData.Postal_Code;
          let street = docData.Street;
          var company = (_a = docData.Company) !== null && _a !== void 0 ? _a : "";
          var email = (_b = docData.Email) !== null && _b !== void 0 ? _b : "";
          if (company == "") company = undefined;
          if (email == "") email = undefined;
          var unit = (_c = docData.Unit_Number) !== null && _c !== void 0 ? _c : "";
          if (unit == "") unit = undefined;
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingInfo = new _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_10__.ShippingInfo(name, company, street, city, country, area, unit, postal_code, phone, undefined, email);
        } else {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingInfo = new _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_10__.ShippingInfo();
        }

        if (_this17.myCallback) _this17.myCallback();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this17.platformID)) sub.unsubscribe();
      });
    })();
  }

  getBillingAddress() {
    var _this18 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this18.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      let sub = _this18.db.collection("Users/" + uid + "/Payment_Info").doc("Billing_Address").valueChanges().subscribe(doc => {
        // Globals.selectedBlog = undefined
        var _a, _b;

        let docData = doc;

        if (docData) {
          let area = docData.Administrative_Area;
          let city = docData.City;
          let country = docData.Country;
          let firstName = docData.First_Name;
          let lastName = docData.Last_Name;
          let name = firstName + " " + lastName;
          let postal_code = docData.Postal_Code;
          let street = docData.Street;
          var company = (_a = docData.Company) !== null && _a !== void 0 ? _a : "";
          if (company == "") company = undefined;
          var unit = (_b = docData.Unit_Number) !== null && _b !== void 0 ? _b : "";
          if (unit == "") unit = undefined;

          if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.admin_area = area;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.city = city;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.country = country;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.name = name;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.postal = postal_code;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.street = street;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo.company = company !== null && company !== void 0 ? company : "";
          } else {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_11__.BillingInfo(name, company, undefined, undefined, street, city, country, area, unit, postal_code, undefined);
          }
        } else {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_11__.BillingInfo();
        }

        if (_this18.myCallback) _this18.myCallback();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this18.platformID)) sub.unsubscribe();
      });
    })();
  }

  isUndefined(element) {
    return element == undefined || element == null || element == "";
  }

  getTax(taxData) {
    var _this19 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // let uid = (await this.isLoggedIn())?.uid
      var _a, _b;

      const country = taxData.country;
      const admin = taxData.admin_area;
      const street = taxData.street;
      const postal = taxData.postal;
      var salesTax = 0.0;

      if (country === "Canada" || country === "CA") {
        console.log(admin);
        let a = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.matchingProvince(admin)) === null || _a === void 0 ? void 0 : _a.abbreviation) !== null && _b !== void 0 ? _b : "ON";

        let sub = _this19.db.collection("Canada_Tax_Docs").doc(a).get().subscribe(doc => {
          // Globals.selectedBlog = undefined
          let taxDoc = doc.data();
          console.log(taxDoc);

          if (taxDoc) {
            if (!_this19.isUndefined(taxDoc.HST)) {
              salesTax += taxDoc.HST;
            } else {
              if (!_this19.isUndefined(taxDoc.GST)) {
                salesTax += taxDoc.GST;
              }

              if (!_this19.isUndefined(taxDoc.PST)) {
                salesTax += taxDoc.PST;
              }
            }
          }

          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingTax = salesTax;
          if (_this19.myCallback) _this19.myCallback();
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this19.platformID)) sub.unsubscribe();
        });
      } else if (country === "United States" || country === "US" || country === "USA") {
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingTax = salesTax;
        if (_this19.myCallback) _this19.myCallback();
      } else if (country === "United Kingdom" || country === "UK" || country === "GB") {
        let sub = _this19.db.collection("Canada_Tax_Docs").doc(admin).valueChanges().subscribe(doc => {
          // Globals.selectedBlog = undefined
          let taxDoc = doc;

          if (taxDoc) {
            if (!_this19.isUndefined(taxDoc.HST)) {
              salesTax += taxDoc.VAT;
            }
          }

          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.shippingTax = salesTax;
          if (_this19.myCallback) _this19.myCallback();
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this19.platformID)) sub.unsubscribe();
        });
      }
    })();
  }

  addToCart(mappedData) {
    var _this20 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      let uid = (_a = yield _this20.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      const storeUID = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid;

      if (!storeUID) {
        return;
      }

      let data = {
        "Cart_List": firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.FieldValue.arrayUnion(mappedData),
        "UID": storeUID,
        "Timestamp": mappedData.Timestamp
      };

      if (uid) {
        yield _this20.db.collection("Users/" + uid + "/Cart_Info").doc("Cart_List_" + storeUID).set(data, {
          merge: true
        });
      }

      _this20.rootComponent.cart = undefined;
      (_b = _this20.rootComponent) === null || _b === void 0 ? void 0 : _b.getCart();
    })();
  }

  saveUser(mappedData) {
    var _this21 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this21.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      if (mappedData.profile_pic) {
        let picID = yield _this21.uploadFile(mappedData, uid);
        mappedData.picID = picID;
      }

      yield _this21.saveUsername(mappedData, uid);
    })();
  }

  saveEmail(mappedData, callback) {
    var _this22 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let user = yield _this22.isLoggedIn();
      let email = user === null || user === void 0 ? void 0 : user.email;
      let password = mappedData.password;
      let newEmail = mappedData.newEmail;
      const credentials = firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.auth.EmailAuthProvider.credential(email, password);
      user === null || user === void 0 ? void 0 : user.reauthenticateWithCredential(credentials).then( /*#__PURE__*/function () {
        var _ref10 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (result) {
          if (result) {
            user === null || user === void 0 ? void 0 : user.updateEmail(newEmail).then( /*#__PURE__*/(0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
              callback(true);
            }));
          } else {
            callback(false);
          }
        });

        return function (_x10) {
          return _ref10.apply(this, arguments);
        };
      }());
    })();
  }

  savePassword(mappedData, callback) {
    var _this23 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let user = yield _this23.isLoggedIn();
      let email = user === null || user === void 0 ? void 0 : user.email;
      let password = mappedData.password;
      let newPassword = mappedData.newPassword;
      const credentials = firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.auth.EmailAuthProvider.credential(email, password);
      user === null || user === void 0 ? void 0 : user.reauthenticateWithCredential(credentials).then( /*#__PURE__*/function () {
        var _ref12 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (result) {
          if (result) {
            user === null || user === void 0 ? void 0 : user.updatePassword(newPassword).then( /*#__PURE__*/(0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
              callback(true);
            }));
          } else {
            callback(false);
          }
        });

        return function (_x11) {
          return _ref12.apply(this, arguments);
        };
      }());
    })();
  }

  updateProduct(mappedData) {
    var _this24 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d, _e, _f, _g;

      let uid = (_b = (_a = yield _this24.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : "";
      let productID = mappedData.productID;
      let data = {
        "Name": (_c = mappedData.name) !== null && _c !== void 0 ? _c : "Post",
        "Search_Name": (_d = mappedData.name.toLowerCase()) !== null && _d !== void 0 ? _d : "post",
        "Description": (_e = mappedData.description) !== null && _e !== void 0 ? _e : "",
        "Price_Cents": (_f = mappedData.price) !== null && _f !== void 0 ? _f : 2000,
        "Available": (_g = mappedData.available) !== null && _g !== void 0 ? _g : true
      };
      yield _this24.db.collection("Users/" + uid + "/Products").doc(productID).update(data);
      let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(uid, productID, data.Description, productID, undefined, undefined, undefined, data.Price_Cents, data.Name, undefined, undefined, undefined, undefined, data.Available);

      _this24.editProduct(product);

      return console.log("Updated Product");
    })();
  }

  deleteProduct(mappedData) {
    var _this25 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      let uid = (_b = (_a = yield _this25.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : "";
      let productID = mappedData.productID;
      let data = {
        "Available": false
      };
      yield _this25.db.collection("Users/" + uid + "/Products").doc(productID).update(data);
      let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(undefined, undefined, undefined, productID);

      _this25.removeProduct(product);
    })();
  }

  createProduct(mappedData) {
    var _this26 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d;

      let uid = (_b = (_a = yield _this26.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : "";

      let productID = _this26.db.collection("Users/" + uid + "/Products").doc().ref.id;

      console.log(productID);
      let data = (_c = yield _this26.saveProductInfo(mappedData, productID, uid)) !== null && _c !== void 0 ? _c : {};

      if (((_d = mappedData.images) === null || _d === void 0 ? void 0 : _d.length) > 0) {
        yield mappedData.images.forEach( /*#__PURE__*/function () {
          var _ref14 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (image) {
            let url = yield _this26.uploadProductImages(image.img, image.type, productID, uid);
            console.log(url);
          });

          return function (_x12) {
            return _ref14.apply(this, arguments);
          };
        }());
        let url = mappedData.images.filter(obj => {
          return obj.type == "link_";
        })[0].img;
        let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(uid, productID, data.Description, productID, data.Timestamp, undefined, data.Blurred, data.Price_Cents, data.Name, data.Template_Color, data.Likes, false, data.Comments, data.Available, data.Public, data.Type, data.Side, data.sides, url);

        _this26.addProduct(product); // Globals.products?.unshift(product)

      }
    })();
  }

  saveStore(mappedData) {
    var _this27 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      let uid = (_a = yield _this27.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;

      if (((_b = mappedData.images) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        mappedData.image_list = new Array();
        yield mappedData.images.forEach( /*#__PURE__*/function () {
          var _ref15 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (image) {
            mappedData.image_list.push(image.type);
            let url = yield _this27.uploadStoreImages(image.img, image.type, uid);
          });

          return function (_x13) {
            return _ref15.apply(this, arguments);
          };
        }());
      }

      yield _this27.saveStoreInfo(mappedData, uid);
    })();
  }

  uploadProductImages(image, type, productID, uid) {
    var _this28 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const filePath = 'Users/' + uid + '/Products/' + productID + "/" + type + productID + '.png';

      let ref = _this28.storage.ref(filePath);

      const byteArray = new Buffer(image.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64'); // const task = await this.storage.upload(filePath, byteArray);

      const task = yield ref.put(byteArray);
      const url = yield task.ref.getDownloadURL(); // if (type == "theme"){
      //   Globals.userInfo!.themeLink = url
      //   if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      //     Globals.storeInfo!.themeLink = url
      //   }
      // }
      // else if (type == "home"){
      //   Globals.userInfo!.homeLink = url
      //   if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      //     Globals.storeInfo!.homeLink = url
      //   }
      // }
      // else if (type == "action"){
      //   Globals.userInfo!.actionLink = url
      //   if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      //     Globals.storeInfo!.actionLink = url
      //   }
      // }

      return url;
      return undefined;
    })();
  }

  uploadStoreImages(image, type, uid) {
    var _this29 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      if (type) {
        const filePath = 'Users/' + uid + '/Store_Images/' + type + '.png';

        let ref = _this29.storage.ref(filePath);

        const byteArray = new Buffer(image.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64'); // const task = await this.storage.upload(filePath, byteArray);

        const task = yield ref.put(byteArray);
        const url = yield task.ref.getDownloadURL();

        if (type == "theme") {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.themeLink = url;

          if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid == ((_a = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _a === void 0 ? void 0 : _a.uid)) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.themeLink = url;
          }
        } else if (type == "home") {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.homeLink = url;

          if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid == ((_b = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _b === void 0 ? void 0 : _b.uid)) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.homeLink = url;
          }
        } else if (type == "action") {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.actionLink = url;

          if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid == ((_c = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _c === void 0 ? void 0 : _c.uid)) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.actionLink = url;
          }
        }

        return url;
      }

      return undefined;
    })();
  }

  saveProductInfo(mappedData, productID, uid) {
    var _this30 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d, _e, _f, _g;

      let data = {
        "Name": (_a = mappedData.name) !== null && _a !== void 0 ? _a : "Post",
        "Search_Name": (_b = mappedData.name.toLowerCase()) !== null && _b !== void 0 ? _b : "post",
        "Description": (_c = mappedData.description) !== null && _c !== void 0 ? _c : "",
        "Price_Cents": (_d = mappedData.price) !== null && _d !== void 0 ? _d : 2000,
        "UID": uid,
        "Blurred": false,
        "Timestamp": new Date(),
        "Template_Color": (_e = mappedData.templateColor) !== null && _e !== void 0 ? _e : "black",
        "Likes": 0,
        "Comments": 0,
        "Has_Picture": false,
        "Product_ID": productID,
        "Available": true,
        "Public": true,
        "Type": (_f = mappedData.productType) !== null && _f !== void 0 ? _f : "ATC1000",
        "Side": (_g = mappedData.displaySide) !== null && _g !== void 0 ? _g : "front",
        "Sides": mappedData.sides
      };

      if (uid) {
        yield _this30.db.collection("Users/" + uid + "/Products").doc(productID).set(data);
        return data; // Globals.userInfo!.slogan = mappedData.slogan
        // let matchingTheme = Globals.themes?.filter(theme => theme.name == mappedData.theme.name)[0]
        // if (matchingTheme){
        //   Globals.userInfo!.colorStyle = matchingTheme
        // }
        // Globals.userInfo!.slogan = mappedData.slogan
        // Globals.userInfo!.fontName = mappedData.font
        // if (Globals.storeInfo.uid == Globals.userInfo?.uid){
        //   if (matchingTheme){
        //     Globals.storeInfo!.colorStyle = matchingTheme
        //     Globals.storeInfo!.fontName = mappedData.font
        //   }
        // }
      }

      return undefined;
    })();
  }

  saveStoreInfo(mappedData, uid) {
    var _this31 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      var data = {
        "Slogan": (_a = mappedData.slogan) !== null && _a !== void 0 ? _a : ""
      };

      if (mappedData.indicator) {
        data["indicator"] = mappedData.indicator;
      }

      if (mappedData.theme) {
        data["store_style"] = mappedData.theme;
      }

      if (mappedData.font) {
        data["font"] = mappedData.font;
      }

      if (mappedData.image_list) {
        data["image_list"] = firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.FieldValue.arrayUnion(...mappedData.image_list);
      }

      if (uid) {
        yield _this31.db.collection("Users").doc(uid).update(data);
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.slogan = mappedData.slogan;
        let matchingTheme = (_b = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.themes) === null || _b === void 0 ? void 0 : _b.filter(theme => theme.name == mappedData.theme.name)[0];

        if (matchingTheme) {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.colorStyle = matchingTheme;
        }

        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.slogan = mappedData.slogan;
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.fontName = mappedData.font;

        if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid == ((_c = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _c === void 0 ? void 0 : _c.uid)) {
          if (matchingTheme) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.colorStyle = matchingTheme;
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.fontName = mappedData.font;
          }
        }
      }

      if (_this31.myCallback) _this31.myCallback();
    })();
  }

  uploadFile(mappedData, uid) {
    var _this32 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let picID = (0,uuid__WEBPACK_IMPORTED_MODULE_13__.v4)().toString().replace("-", "");
      const filePath = 'Users/' + uid + '/profile_pic-' + picID + '.jpeg';

      let ref = _this32.storage.ref(filePath);

      const byteArray = new Buffer(mappedData.profile_pic.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64'); // const task = await this.storage.upload(filePath, byteArray);

      const task = yield ref.put(byteArray);
      const url = yield task.ref.getDownloadURL();
      _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.dpID = picID;
      _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.profileLink = url;

      if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid == ((_a = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _a === void 0 ? void 0 : _a.uid)) {
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.dpID = picID;
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.profileLink = url;
      }

      return picID;
    })();
  }

  saveUsername(mappedData, uid) {
    var _this33 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d, _e;

      var data = {
        "Username": mappedData.username,
        "Full_Name": mappedData.full_name,
        "Bio": mappedData.bio
      };

      if (mappedData.picID) {
        data["ProfilePicID"] = mappedData.picID;
      }

      if (mappedData.socials) {
        data["Socials"] = (_a = mappedData.socials) !== null && _a !== void 0 ? _a : [];
      }

      console.log(mappedData.custom_url);

      if (mappedData.custom_url && mappedData.custom_url.trim() != "") {
        var splitURL = mappedData.custom_url.split("://");
        data["Custom_URL"] = {
          host: splitURL[1],
          protocol: splitURL[0],
          status: 1
        };
      } else {
        if (((_b = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _b === void 0 ? void 0 : _b.customURL) || ((_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _c === void 0 ? void 0 : _c.customURL) === null || _d === void 0 ? void 0 : _d.fullURL().trim()) != "") {
          data["Custom_URL"] = firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.firestore.FieldValue.delete();
        }
      }

      if (uid) {
        yield _this33.db.collection("Users").doc(uid).update(data);
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.username = mappedData.username;
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo.fullName = mappedData.full_name;

        if (_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid == ((_e = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo) === null || _e === void 0 ? void 0 : _e.uid)) {
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.username = mappedData.username;
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.fullName = mappedData.full_name;
        }
      }

      if (_this33.myCallback) _this33.myCallback();
    })();
  }

  openSnackBar(message, timeDuration = 1000, horizontal = 'right', vertical = 'top') {
    this.snackBar.open(message, '', {
      duration: timeDuration,
      horizontalPosition: horizontal,
      verticalPosition: vertical
    });
  }

  changeCart(mappedData) {
    var _this34 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let uid = (_a = yield _this34.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      let data = {
        "Cart_List": mappedData
      };
      const storeUID = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid;

      if (!storeUID) {
        return;
      }

      if (uid) {
        yield _this34.db.collection("Users/" + uid + "/Cart_Info").doc("Cart_List_" + storeUID).set(data);
      }
    })();
  }

  signOut() {
    var _this35 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this35.auth.signOut().then(() => {
        _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.userInfo = undefined;
        _this35.rootComponent.cart = [];
        if (_this35.myCallback) _this35.myCallback();
      }).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (_this35.errCallback) _this35.errCallback(errorMessage);
      }); // Sign Out
    })();
  }

  isLoggedIn() {
    return this.auth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).toPromise();
  }

  registerAccount(type, credentials, affiliate) {
    var _this36 = this;

    if (type == "Guest") {
      this.auth.signInAnonymously().then(() => {
        // Signed in..
        if (this.myCallback) this.myCallback();
      }).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (this.errCallback) this.errCallback(errorMessage);
      });
    } else if (type == "Email_UP") {
      let username = credentials === null || credentials === void 0 ? void 0 : credentials.username;
      let password = credentials === null || credentials === void 0 ? void 0 : credentials.password;
      let email = credentials === null || credentials === void 0 ? void 0 : credentials.email;
      this.auth.createUserWithEmailAndPassword(email, password).then( /*#__PURE__*/function () {
        var _ref16 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (result) {
          var _a, _b, _c, _d; // Signed in..


          yield (_a = result.user) === null || _a === void 0 ? void 0 : _a.sendEmailVerification();

          if (result.user && username) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.isNewUser = (_c = (_b = result.additionalUserInfo) === null || _b === void 0 ? void 0 : _b.isNewUser) !== null && _c !== void 0 ? _c : false;
            yield _this36.setUsername((_d = result.user) === null || _d === void 0 ? void 0 : _d.uid, username, true, affiliate);
            if (_this36.myCallback) _this36.myCallback();
          } else {
            yield _this36.auth.signOut();
            if (_this36.errCallback) _this36.errCallback("Unknown Error Occured. Please Try Again Later");
          }
        });

        return function (_x14) {
          return _ref16.apply(this, arguments);
        };
      }()).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (this.errCallback) this.errCallback(errorMessage);
        console.log(errorCode);
      });
    } else if (type == "Email_IN") {
      let password = credentials === null || credentials === void 0 ? void 0 : credentials.password;
      let email = credentials === null || credentials === void 0 ? void 0 : credentials.email;
      this.auth.signInWithEmailAndPassword(email, password).then( /*#__PURE__*/function () {
        var _ref17 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (result) {
          var _a, _b; // Signed in..


          if (result.user) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.isNewUser = (_b = (_a = result.additionalUserInfo) === null || _a === void 0 ? void 0 : _a.isNewUser) !== null && _b !== void 0 ? _b : false;
            if (_this36.myCallback) _this36.myCallback();
          } else {
            yield _this36.auth.signOut();
            if (_this36.errCallback) _this36.errCallback("Unknown Error Occured. Please Try Again Later");
          }
        });

        return function (_x15) {
          return _ref17.apply(this, arguments);
        };
      }()).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/wrong-password") errorMessage = "The password is incorrect.";
        if (this.errCallback) this.errCallback(errorMessage);
        console.log(errorCode);
      });
    } else if (type == "Email_IN_USER") {
      let data = {
        "Field": credentials === null || credentials === void 0 ? void 0 : credentials.Field,
        "Term": credentials === null || credentials === void 0 ? void 0 : credentials.Term
      };
      this.functions.httpsCallable('auth')(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)()).subscribe( /*#__PURE__*/function () {
        var _ref18 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resp) {
          if (resp) {
            if (resp.includes("ERROR:")) {
              let err = resp.replace("ERROR:", "");
              if (_this36.errCallback) _this36.errCallback(err);
              console.log(err);
            } else {
              let email = resp;
              let password = credentials === null || credentials === void 0 ? void 0 : credentials.password;

              _this36.auth.signInWithEmailAndPassword(email, password).then( /*#__PURE__*/function () {
                var _ref19 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (result) {
                  var _a, _b; // Signed in..


                  if (result.user) {
                    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.isNewUser = (_b = (_a = result.additionalUserInfo) === null || _a === void 0 ? void 0 : _a.isNewUser) !== null && _b !== void 0 ? _b : false;
                    if (_this36.myCallback) _this36.myCallback();
                  } else {
                    yield _this36.auth.signOut();
                    if (_this36.errCallback) _this36.errCallback("Unknown Error Occured. Please Try Again Later");
                  }
                });

                return function (_x17) {
                  return _ref19.apply(this, arguments);
                };
              }()).catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == "auth/wrong-password") errorMessage = "The password is incorrect.";
                if (_this36.errCallback) _this36.errCallback(errorMessage);
                console.log(errorCode);
              });
            }
          } else {
            if (_this36.errCallback) _this36.errCallback("Unknown Error Occured. Please Try Again Later");
          }
        });

        return function (_x16) {
          return _ref18.apply(this, arguments);
        };
      }(), err => {
        var errorCode = err.code;
        var errorMessage = err.message;
        if (this.errCallback) this.errCallback(errorMessage);
        console.log(errorCode);
      });
    } else if (type == "Apple") {
      var appleProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.auth.OAuthProvider('apple.com');
      appleProvider.addScope('email');
      appleProvider.addScope('name');
      this.auth.signInWithPopup(appleProvider).then( /*#__PURE__*/function () {
        var _ref20 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (result) {
          // Signed in..
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

          if (((_b = (_a = result.additionalUserInfo) === null || _a === void 0 ? void 0 : _a.isNewUser) !== null && _b !== void 0 ? _b : false) && ((_c = result.user) === null || _c === void 0 ? void 0 : _c.uid)) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.isNewUser = (_e = (_d = result.additionalUserInfo) === null || _d === void 0 ? void 0 : _d.isNewUser) !== null && _e !== void 0 ? _e : false;
            yield (_f = result.user) === null || _f === void 0 ? void 0 : _f.sendEmailVerification();
            yield _this36.setUsername((_g = result.user) === null || _g === void 0 ? void 0 : _g.uid, (_j = (_h = result === null || result === void 0 ? void 0 : result.additionalUserInfo) === null || _h === void 0 ? void 0 : _h.username) !== null && _j !== void 0 ? _j : 'user_' + uuid__WEBPACK_IMPORTED_MODULE_13__.v4.toString(), !_this36.isUndefined((_k = result === null || result === void 0 ? void 0 : result.additionalUserInfo) === null || _k === void 0 ? void 0 : _k.username), affiliate);
          }

          if (_this36.myCallback) _this36.myCallback();
        });

        return function (_x18) {
          return _ref20.apply(this, arguments);
        };
      }()).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (this.errCallback) this.errCallback(errorMessage);
      });
    } else if (type == "Google") {
      var googleProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__.default.auth.GoogleAuthProvider();
      googleProvider.addScope('email');
      googleProvider.addScope('profile');
      this.auth.signInWithPopup(googleProvider).then( /*#__PURE__*/function () {
        var _ref21 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (result) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k; // Signed in..


          if (((_b = (_a = result.additionalUserInfo) === null || _a === void 0 ? void 0 : _a.isNewUser) !== null && _b !== void 0 ? _b : false) && ((_c = result.user) === null || _c === void 0 ? void 0 : _c.uid)) {
            yield (_d = result.user) === null || _d === void 0 ? void 0 : _d.sendEmailVerification();
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.isNewUser = (_f = (_e = result.additionalUserInfo) === null || _e === void 0 ? void 0 : _e.isNewUser) !== null && _f !== void 0 ? _f : false;
            yield _this36.setUsername((_g = result.user) === null || _g === void 0 ? void 0 : _g.uid, (_j = (_h = result === null || result === void 0 ? void 0 : result.additionalUserInfo) === null || _h === void 0 ? void 0 : _h.username) !== null && _j !== void 0 ? _j : 'user_' + (0,uuid__WEBPACK_IMPORTED_MODULE_13__.v4)().replace('-', ''), !_this36.isUndefined((_k = result === null || result === void 0 ? void 0 : result.additionalUserInfo) === null || _k === void 0 ? void 0 : _k.username), affiliate);
          }

          if (_this36.myCallback) _this36.myCallback();
        });

        return function (_x19) {
          return _ref21.apply(this, arguments);
        };
      }()).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        if (this.errCallback) this.errCallback(errorMessage);
      });
    }
  }

  roundedFavIconLink() {
    return _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.profileLink;
  }

  setUsername(uid, username, hasUsername, affiliate) {
    var _this37 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var data = {
        'Full_Name': "GUEST",
        'Username': username,
        'Bio': '',
        'ProfilePicID': null,
        'notification_tokens': [],
        'Following_List': [],
        'Following_Count': 0,
        'Followers_Count': 0,
        'Posts_Count': 0,
        'Platform': "WEB"
      };

      if (hasUsername !== null && hasUsername !== void 0 ? hasUsername : false) {
        data.Full_Name = username.toUpperCase();
      }

      yield _this37.db.collection("Users").doc(uid).set(data, {
        merge: true
      });

      if (affiliate && affiliate != "") {
        yield _this37.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").set({
          affiliate: {
            id: affiliate,
            timestamp: new Date()
          }
        }, {
          merge: true
        });
      }

      return true;
    })();
  }

  checkUsername(username, callback, myUID) {
    var _this38 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let sub = _this38.db.collection("Users", ref => ref.where("Username", '==', username)).valueChanges({
        idField: 'UID'
      }).subscribe(docs => {
        if (docs && (docs === null || docs === void 0 ? void 0 : docs.length) != 0) {
          console.log(docs[0]);

          if (myUID == docs[0].UID) {
            callback();
          } else {
            callback("This username already exists");
          }
        } else {
          callback();
        }

        sub.unsubscribe();
      });
    })();
  }

  checkURL(url, callback) {
    var _this39 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (url.replace(" ", "") == "") {
        callback();
      }

      let sub = _this39.db.collection("Users", ref => ref.where("Custom_URL", '==', url)).valueChanges().subscribe(doc => {
        if (doc && (doc === null || doc === void 0 ? void 0 : doc.length) != 0) {
          callback("This domain is already linked to a store.");
        } else {
          callback();
        }

        sub.unsubscribe();
      });
    })();
  }

  authenticated() {
    var _this40 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const user = yield _this40.isLoggedIn();

      if (user) {
        return true;
      } else {
        return false;
      }
    })();
  }

  getCart(shouldGetProducts = false, callback) {
    var _this41 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      const uid = (_a = yield _this41.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      const storeUID = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid;
      console.log("moooooo");

      if (!storeUID || !uid) {
        if (_this41.myCallback) _this41.myCallback();
        return;
      }

      var cart = new Array();

      let sub = _this41.db.collection("Users/" + uid + "/Cart_Info").doc("Cart_List_" + storeUID).valueChanges().subscribe( /*#__PURE__*/function () {
        var _ref22 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (doc) {
          const docData = doc;

          if (docData) {
            let cartList = docData.Cart_List;
            const promises = cartList.map( /*#__PURE__*/function () {
              var _ref23 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (productInCart, i) {
                let uid = productInCart.UID;
                let size = productInCart.Size;
                let qty = productInCart.Qty;
                let timestamp = productInCart.Timestamp.toDate();
                let productID = productInCart.Post_ID;
                let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(uid, productID, undefined, productID, timestamp, undefined, undefined, undefined, undefined, undefined, undefined, false, undefined, true, undefined, undefined, undefined, [], _this41.getURL(uid, productID));
                let productCart = new _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_9__.ProductInCart(product, size, qty, false, timestamp, "", undefined);
                cart.push(productCart);
                if (shouldGetProducts) console.log('okmo');
                yield _this41.getPost(productID, true, i);
              });

              return function (_x21, _x22) {
                return _ref23.apply(this, arguments);
              };
            }());
            yield Promise.all(promises);
          }

          callback(cart);
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this41.platformID)) sub.unsubscribe();
        });

        return function (_x20) {
          return _ref22.apply(this, arguments);
        };
      }());
    })();
  }

  getOrder(orderID) {
    var _this42 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let sub = _this42.db.collectionGroup("Orders", ref => ref.where("order_id", '==', orderID)).valueChanges().subscribe(docDatas => {
        docDatas.forEach(doc => {
          var _a, _b, _c;

          const docData = doc;

          if (docData) {
            let status = (_a = docData.status) !== null && _a !== void 0 ? _a : "cancelled";
            let intents = docData.order_intents;
            let timestamp = docData.timestamp.toDate();
            let shippingIntent = docData.shipping_intent;
            let trackingNumber = docData.tracking_id;
            let shippingCost = ((_b = docData.shipping_cost) !== null && _b !== void 0 ? _b : 0) / 100;
            let taxPercent = docData.tax;
            let taxNum = docData.sales_tax;
            let currency = (_c = docData.currency) !== null && _c !== void 0 ? _c : "CAD";
            let currencySymbol = docData.currency_symbol;
            let orderID = docData.order_id;
            let merchantID = docData.merchant_uid;
            var subtotal = 0.0;
            let address = docData.delivery_address;
            let street = address.street_address;
            let city = address.city;
            let country = address.country;
            let postalCode = address.postal_code;
            let area = address.admin_area;
            let phone = address.phone_number;
            let name = address.full_name;
            let company = address.company;
            let email = address.email;
            let country_code = address.country_code;
            const uid = docData.uid; // let shippingCost = (doc["shipping_cost"] as? Double ?? 0.00) / 100              

            let unitNum = address.unit_number;
            let orderAddress = new _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_10__.ShippingInfo(name, company, street, city, country, area, unitNum, postalCode, phone, country_code, email);
            let tax = taxNum !== null && taxNum !== void 0 ? taxNum : (taxPercent !== null && taxPercent !== void 0 ? taxPercent : 0) * subtotal;
            let totalCost = (tax !== null && tax !== void 0 ? tax : 0.0) + (subtotal !== null && subtotal !== void 0 ? subtotal : 0.0) + (shippingCost !== null && shippingCost !== void 0 ? shippingCost : 0.0);
            let order = new _models_order_model__WEBPACK_IMPORTED_MODULE_14__.Order(orderID, timestamp, [], status, intents, totalCost, tax, subtotal, orderAddress, currency, currencySymbol, trackingNumber, shippingIntent, shippingCost, uid, merchantID);
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedOrder = order;

            _this42.getOrderProducts(order, uid, 0, true);
          } else {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedOrder = new _models_order_model__WEBPACK_IMPORTED_MODULE_14__.Order();
          }
        });
        if (_this42.myCallback) _this42.myCallback();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this42.platformID)) sub.unsubscribe();
      });
    })();
  }

  getOrders() {
    var _this43 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      const uid = (_a = yield _this43.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.uid;
      const storeUID = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.storeInfo.uid;

      if (!storeUID || !uid) {
        if (_this43.myCallback) _this43.myCallback();
        return;
      }

      var query = _this43.db.collection("Users/" + uid + "/Orders", ref => ref.where("merchant_uid", '==', storeUID).orderBy("timestamp", "desc"));

      _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.orders = [];
      let sub = query.valueChanges().subscribe(docDatas => {
        docDatas.forEach((doc, index) => {
          var _a, _b, _c;

          const docData = doc;

          if (docData) {
            let status = (_a = docData.status) !== null && _a !== void 0 ? _a : "cancelled";
            let intents = docData.order_intents;
            let timestamp = docData.timestamp.toDate();
            let shippingIntent = docData.shipping_intent;
            let trackingNumber = docData.tracking_id;
            let shippingCost = docData.shipping_cost;
            let taxPercent = docData.tax;
            let taxNum = docData.sales_tax;
            let currency = (_b = docData.currency) !== null && _b !== void 0 ? _b : "CAD";
            let currencySymbol = docData.currency_symbol;
            let orderID = docData.order_id;
            let merchantID = docData.merchant_uid;
            var subtotal = 0.0;
            let address = docData.delivery_address;
            let street = address.street_address;
            let city = address.city;
            let country = address.country;
            let postalCode = address.postal_code;
            let area = address.admin_area;
            let phone = address.phone_number;
            let name = address.full_name;
            let company = address.company;
            let email = address.email;
            let country_code = address.country_code;
            const uid = docData.uid; // let shippingCost = (doc["shipping_cost"] as? Double ?? 0.00) / 100              

            let unitNum = address.unit_number;
            let orderAddress = new _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_10__.ShippingInfo(name, company, street, city, country, area, unitNum, postalCode, phone, country_code, email);
            let tax = taxNum !== null && taxNum !== void 0 ? taxNum : (taxPercent !== null && taxPercent !== void 0 ? taxPercent : 0) * subtotal;
            let totalCost = (tax !== null && tax !== void 0 ? tax : 0.0) + (subtotal !== null && subtotal !== void 0 ? subtotal : 0.0) + (shippingCost !== null && shippingCost !== void 0 ? shippingCost : 0.0);
            let order = new _models_order_model__WEBPACK_IMPORTED_MODULE_14__.Order(orderID, timestamp, [], status, intents, totalCost, tax, subtotal, orderAddress, currency, currencySymbol, trackingNumber, shippingIntent, shippingCost, uid, merchantID);
            (_c = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.orders) === null || _c === void 0 ? void 0 : _c.push(order);

            _this43.getOrderProducts(order, uid, index);
          }
        });
        if (_this43.myCallback) _this43.myCallback();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this43.platformID)) sub.unsubscribe();
      });
    })();
  }

  getOrderProducts(order, uid, orderIndex, isSelectedOrder) {
    let sub = this.db.collection("Users/" + uid + "/Orders/" + order.orderID + "/Purchases").valueChanges().subscribe(docDatas => {
      docDatas.forEach((doc, index) => {
        const docData = doc;

        if (docData) {
          let productID = docData.productID;
          let quantity = docData.quantity;
          let size = docData.size;
          let status = docData.status;
          let price = docData.amount / quantity;
          let timestamp = docData.timestamp.toDate();
          let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(uid, productID, undefined, productID, timestamp, undefined, undefined, price, undefined, undefined, undefined, false, undefined, true, undefined, undefined, undefined, [], this.getURL(uid, productID));
          let orderProduct = new _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_9__.ProductInCart(product, size, quantity, false, timestamp, undefined, undefined);
          order.products.push(orderProduct);

          if (isSelectedOrder !== null && isSelectedOrder !== void 0 ? isSelectedOrder : false) {
            console.log('okpo');
            this.getPost(productID, undefined, undefined, undefined, orderIndex, index, true);
          } else {
            console.log('okp2o');
            this.getPost(productID, undefined, undefined, true, orderIndex, index, false);
          }
        }
      });
      if (this.myCallback) this.myCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  getMiscStats(uid) {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.views = [];
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.dropCarts = [];
    let sub = this.db.collection("Users/" + uid + "/Daily_Info/").valueChanges().subscribe(docDatas => {
      docDatas.forEach((doc, index) => {
        var _a;

        const docData = doc;

        if (docData) {
          let time = docData.time;
          let timestamp = docData.timestamp.toDate();
          let length = time.length;
          (_a = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.views) === null || _a === void 0 ? void 0 : _a.push({
            views: length,
            timestamp: timestamp
          });
        }
      });
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
      let sub2 = this.db.collectionGroup("Cart_Info", ref => ref.where("UID", "==", uid)).valueChanges().subscribe(docDatas => {
        docDatas.forEach((doc, index) => {
          var _a, _b;

          const docData = doc;

          if (docData) {
            let timestamp = (_a = docData.Timestamp) === null || _a === void 0 ? void 0 : _a.toDate();
            (_b = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.dropCarts) === null || _b === void 0 ? void 0 : _b.push({
              dropCarts: 1,
              timestamp: timestamp
            });
          }
        });
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub2.unsubscribe();
        if (this.miscCallback) this.miscCallback();
      });
    });
  }

  getAffiliateStats(uid, callback) {
    let stats = new Array();
    let sub = this.db.collectionGroup("Payment_Info", ref => ref.where("affiliate.id", '==', uid)).valueChanges().subscribe(docDatas => {
      docDatas.forEach((doc, index) => {
        const docData = doc;

        if (docData) {
          let affiliate = docData.affiliate;
          let timestamp = affiliate.timestamp.toDate();
          let id = affiliate.id;
          stats.push({
            affiliate: id,
            timestamp: timestamp
          });
        }
      });
      callback(stats);
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  getSoldProducts(uid = "") {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.productsSold = [];
    let sub = this.db.collectionGroup("Purchases", ref => ref.where("merchant_uid", '==', uid).where("status", '==', 'confirmed')).valueChanges().subscribe(docDatas => {
      docDatas.forEach((doc, index) => {
        var _a, _b;

        const docData = doc;

        if (docData) {
          let productID = docData.productID;
          let quantity = docData.quantity;
          let size = docData.size;
          let price = docData.amount / quantity;
          let profit = docData.moneyToMerchant / 100;
          let timestamp = (_a = docData.timestamp) === null || _a === void 0 ? void 0 : _a.toDate();
          let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(uid, productID, undefined, productID, timestamp, undefined, undefined, price / 100, undefined, undefined, undefined, false, undefined, true, undefined, undefined, undefined, [], this.getURL(uid, productID));
          let orderProduct = new _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_9__.ProductInCart(product, size, quantity, false, timestamp, undefined, undefined, profit !== null && profit !== void 0 ? profit : 0);
          (_b = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.productsSold) === null || _b === void 0 ? void 0 : _b.push(orderProduct);
          console.log('okro');
          this.getPost(productID, false, undefined, false, undefined, index, false, true);
        }
      });
      if (this.saleCallback) this.saleCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  getPost(productID, forCart, cartIndex, forOrder, orderIndex, productIndex, isSelectedOrder, forSale) {
    var _this44 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var query = _this44.db.collectionGroup("Products", ref => ref.where("Product_ID", '==', productID));

      if (!(forSale && productIndex && _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.productsSold)) {
        query = _this44.db.collectionGroup("Products", ref => ref.where("Product_ID", '==', productID).where("Public", '==', true));
      }

      let sub = query.valueChanges().subscribe(docDatas => {
        if (docDatas.length == 0) {
          if (_this44.myCallback) _this44.myCallback();
          if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this44.platformID)) sub.unsubscribe();
        }

        docDatas.forEach(doc => {
          var _a, _b, _c, _d, _e, _f, _g, _h;

          const docData = doc;

          if (docData) {
            let uid = docData.UID;
            let productID = docData.Product_ID;
            let timestamp = docData.Timestamp.toDate();
            let description = docData.Description;
            let name = docData.Name;
            let blurred = docData.Blurred;
            let templateColor = docData.Template_Color;
            let likes = docData.Likes;
            let comments = docData.Comments;
            let isPublic = (_a = docData.Public) !== null && _a !== void 0 ? _a : true;
            let productType = (_b = docData.Type) !== null && _b !== void 0 ? _b : "ATC1000";
            let displaySide = (_c = docData.Side) !== null && _c !== void 0 ? _c : "front";
            let sides = (_d = docData["Sides"]) !== null && _d !== void 0 ? _d : ["Front"];
            let priceCents = docData.Price_Cents;
            let product = new _models_product_model__WEBPACK_IMPORTED_MODULE_2__.Product(uid, productID, description, productID, timestamp, "", blurred, priceCents, name, templateColor, likes, false, comments, true, isPublic, productType, displaySide, sides, _this44.getURL(uid, productID));

            if (forSale && productIndex != undefined && _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.productsSold != undefined) {
              _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.productsSold[productIndex] = product;
            } else {
              if (forCart !== null && forCart !== void 0 ? forCart : false) {
                _this44.rootComponent.cart[cartIndex].product = product;
                if (_this44.myCallback) _this44.myCallback();
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this44.platformID)) sub.unsubscribe();
              } else {
                if (forOrder !== null && forOrder !== void 0 ? forOrder : false) {
                  product.price = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.orders[orderIndex].products[productIndex].product) === null || _e === void 0 ? void 0 : _e.price) !== null && _f !== void 0 ? _f : 0;
                  _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.orders[orderIndex].products[productIndex].product = product;
                } else if (isSelectedOrder !== null && isSelectedOrder !== void 0 ? isSelectedOrder : false) {
                  product.price = (_h = (_g = _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedOrder.products[productIndex].product) === null || _g === void 0 ? void 0 : _g.price) !== null && _h !== void 0 ? _h : 0;
                  _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedOrder.products[productIndex].product = product;
                } else {
                  _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedProduct = product;
                }

                if (_this44.myCallback) _this44.myCallback();
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(_this44.platformID)) sub.unsubscribe();
              }
            }
          }
        });
      });
    })();
  }

  getTemplatesFiltered(products) {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates = [...new Map(_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates.map(item => [item.productCode, item])).values()];
    console.log(_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates);
    return _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates.filter((template, i) => products.some(product => product.productType === template.productCode));
  }

  getURL(uid, productID) {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FProducts%2F' + productID + '%2Flink_' + productID + '.png?alt=media';
  }

  getProfileURL(uid, dpID) {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2Fprofile_pic-' + dpID + '.jpeg?alt=media';
  }

  getThemeURL(uid) {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "theme" + '.png?alt=media';
  }

  getDefaultURL() {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media';
  }

  getHomeURL(uid) {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "home" + '.png?alt=media';
  }

  getActionURL(uid) {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "action" + '.png?alt=media';
  }

  getAltURL() {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';
  }

  getTemplate(templateID) {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedTemplate = undefined;
    let sub = this.db.collection("Templates", ref => ref.where("Code", '==', templateID).orderBy("index", "asc")).valueChanges({
      idField: "TemplateID"
    }).subscribe(docDatas => {
      docDatas.forEach(doc => {
        var docData = doc;

        if (docData) {
          let type = doc.TemplateID;
          let testingAccounts = docData["testingAccounts"];
          let isAvailable = docData["isAvailable"]; // guard isAvailable ?? false || testingAccounts?.contains(pUserInfo.uid ?? "") ?? false else{
          //     continue
          //   }

          let display = docData["Display_Name"];
          let info = docData["Info"];
          let supportedSides = docData["Supported_Sides"];

          if (!supportedSides || supportedSides.length == 0) {
            return;
          }

          let vari = docData["Colors"];
          let minPrice = docData["Min_Price_USD"];
          let extra = docData["Extra_Cost_USD"];
          let code = docData["Code"];
          let sizes = docData["Sizes"];
          let category = docData["category"];
          let onlyBulk = docData["Only_Bulk"];
          let bulkPrice = docData["Bulk_Price_USD"];
          let bulkSuggestPrice = docData["Bulk_Suggest_Price_USD"];
          let bulkUnit = docData["Bulk_Unit"];
          let has3D = docData["has3D"];
          let moreInfo = docData["More_info"]; // let discountInfo = docData["Discount"] as Dict<any>
          // let discountedUsers = discountInfo["Artists"] as Array<string>
          // let discountedPrice = discountInfo.Minimum_Price_USD as number
          // let discountCodes = discountInfo.Discount_Codes as Array<Dict<any>>   

          const template = new _models_template_model__WEBPACK_IMPORTED_MODULE_3__.Template(type, display, info, [], sizes, minPrice, code, category, moreInfo, false, [], extra, bulkPrice, bulkUnit, bulkSuggestPrice, onlyBulk, has3D);
          supportedSides.forEach(side => {
            var _a;

            let name = side["Name"];
            let height = side["HeightCM"];
            let width = side["WidthCM"];
            let widthMultiplier = side["WidthMultiplier"];
            let centerYConst = side["CenterYConst"];
            let centerXConst = side["CenterXConst"];
            let rotation = side["Rotation"];
            let useReverseAspect = (_a = side["useReverseAspect"]) !== null && _a !== void 0 ? _a : false;
            let supportedSide = new _models_template_side_model__WEBPACK_IMPORTED_MODULE_4__.TemplateSide(name, height, width, widthMultiplier, centerYConst, centerXConst, useReverseAspect, rotation);
            template.supportedSides.push(supportedSide);
          });
          vari.forEach(v => {
            var _a, _b;

            let code = v["Code"];
            let display = v["Display"];
            let img = (_a = v["IMG"]) === null || _a === void 0 ? void 0 : _a.toBase64();
            let backImg = (_b = v["IMG_BACK"]) === null || _b === void 0 ? void 0 : _b.toBase64();
            let rgb = v["RGB"];
            let color = new _models_color_model__WEBPACK_IMPORTED_MODULE_5__.Color(code, display, rgb, img, backImg);
            template.colors.push(color);
          });
          _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.selectedTemplate = template;
        }
      });
      if (this.myCallback) this.myCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

  getTemplates() {
    _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates = [];
    let sub = this.db.collection("Templates", ref => ref.orderBy("index", "asc")).valueChanges({
      idField: "TemplateID"
    }).subscribe(docDatas => {
      docDatas.forEach(doc => {
        var docData = doc;

        if (docData) {
          let type = doc.TemplateID;
          let testingAccounts = docData["testingAccounts"];
          let isAvailable = docData["isAvailable"]; // guard isAvailable ?? false || testingAccounts?.contains(pUserInfo.uid ?? "") ?? false else{
          //     continue
          //   }

          let display = docData["Display_Name"];
          let info = docData["Info"];
          let supportedSides = docData["Supported_Sides"];

          if (!supportedSides || supportedSides.length == 0) {
            return;
          }

          let vari = docData["Colors"];
          let minPrice = docData["Min_Price_USD"];
          let extra = docData["Extra_Cost_USD"];
          let code = docData["Code"];
          let sizes = docData["Sizes"];
          let category = docData["category"];
          let has3D = docData["has3D"];
          let onlyBulk = docData["Only_Bulk"];
          let bulkPrice = docData["Bulk_Price_USD"];
          let bulkSuggestPrice = docData["Bulk_Suggest_Price_USD"];
          let bulkUnit = docData["Bulk_Unit"];
          let moreInfo = docData["More_info"]; // let discountInfo = docData["Discount"] as Dict<any>
          // let discountedUsers = discountInfo["Artists"] as Array<string>
          // let discountedPrice = discountInfo.Minimum_Price_USD as number
          // let discountCodes = discountInfo.Discount_Codes as Array<Dict<any>>   

          const template = new _models_template_model__WEBPACK_IMPORTED_MODULE_3__.Template(type, display, info, [], sizes, minPrice, code, category, moreInfo, false, [], extra, bulkPrice, bulkUnit, bulkSuggestPrice, onlyBulk, has3D);
          supportedSides.forEach(side => {
            var _a;

            let name = side["Name"];
            let height = side["HeightCM"];
            let width = side["WidthCM"];
            let widthMultiplier = side["WidthMultiplier"];
            let centerYConst = side["CenterYConst"];
            let centerXConst = side["CenterXConst"];
            let rotation = side["Rotation"];
            let useReverseAspect = (_a = side["useReverseAspect"]) !== null && _a !== void 0 ? _a : false;
            let supportedSide = new _models_template_side_model__WEBPACK_IMPORTED_MODULE_4__.TemplateSide(name, height, width, widthMultiplier, centerYConst, centerXConst, useReverseAspect, rotation);
            template.supportedSides.push(supportedSide);
          });
          vari.forEach(v => {
            var _a, _b;

            let code = v["Code"];
            let display = v["Display"];
            let img = (_a = v["IMG"]) === null || _a === void 0 ? void 0 : _a.toBase64();
            let backImg = (_b = v["IMG_BACK"]) === null || _b === void 0 ? void 0 : _b.toBase64();
            let rgb = v["RGB"];
            let color = new _models_color_model__WEBPACK_IMPORTED_MODULE_5__.Color(code, display, rgb, img, backImg);
            template.colors.push(color);
          });

          if (!_globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates.includes(template)) {
            _globals__WEBPACK_IMPORTED_MODULE_7__.Globals.templates.push(template);
          }
        }
      });
      if (this.myCallback) this.myCallback();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformID)) sub.unsubscribe();
    });
  }

}

LoadService.ɵfac = function LoadService_Factory(t) {
  return new (t || LoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_fire_functions__WEBPACK_IMPORTED_MODULE_23__.AngularFireFunctions), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__.AngularFireStorage), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_25__.StripeService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar));
};

LoadService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({
  token: LoadService,
  factory: LoadService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 78078:
/*!*********************************************!*\
  !*** ./src/app/services/routing.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingService": () => (/* binding */ RoutingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);



class RoutingService {
    constructor(_router, platformID) {
        this._router = _router;
        this.platformID = platformID;
    }
    routeTo404(isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("404");
            return;
        }
        this._router.navigateByUrl("not-found");
    }
    routeToStore404(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("not-found");
            return;
        }
        this._router.navigateByUrl(storeName + '/' + "not-found");
    }
    routeToHome(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("home");
            return;
        }
        this._router.navigateByUrl(storeName + "/" + "home");
    }
    routeToOrders(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("orders");
            return;
        }
        this._router.navigateByUrl(storeName + "/" + "orders");
    }
    routeToShop(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("products");
            return;
        }
        this._router.navigateByUrl(storeName + "/" + "products");
    }
    routeToAbout(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("about");
            return;
        }
        this._router.navigateByUrl(storeName + "/" + "about");
    }
    routeToCart(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("cart");
            return;
        }
        this._router.navigateByUrl(storeName + "/" + "cart");
    }
    routeToProduct(productID, storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("products/" + productID);
            return;
        }
        this._router.navigateByUrl(storeName + "/" + "products/" + productID);
    }
    routeToOrder(orderID, storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("orders/" + orderID);
            return;
        }
        this._router.navigateByUrl(storeName + "/" + "orders/" + orderID);
    }
    routeToProfile(storeName, isCustom = false, selected, externalURL) {
        var url = "";
        if (externalURL) {
            url = "externalURL" + "/" + "my-store";
            if (selected) {
                url += "?selected=" + selected;
            }
            window.location.href = url;
        }
        else {
            if (isCustom) {
                url = "my-store";
            }
            else {
                url = storeName + "/" + "my-store";
            }
            if (selected) {
                url += "?selected=" + selected;
            }
            this._router.navigateByUrl(url);
        }
    }
    routeToShipping(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("shipping-address");
            return;
        }
        this._router.navigateByUrl(storeName + '/shipping-address');
    }
    routeToReview(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("review-order");
            return;
        }
        this._router.navigateByUrl(storeName + '/' + "review-order");
    }
    routeToBilling(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("/billing-info");
            return;
        }
        this._router.navigateByUrl(storeName + '/billing-info');
    }
    routeToBillingAdmin(storeName, isCustom = false) {
        if (isCustom) {
            this._router.navigateByUrl("my-store/billing");
            return;
        }
        this._router.navigateByUrl(storeName + '/my-store/billing');
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID)); };
RoutingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3006:
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopComponent": () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/routing.service */ 78078);











function ShopComponent_header_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bg-", ctx_r0.storeInfo().colorStyle.back_code, " py-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.storeInfo().themeLink.toString() + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r0.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.storeInfo().fullName, " ");
} }
function ShopComponent_section_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShopComponent_section_6_div_5_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const product_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.routeToProduct(product_r4.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShopComponent_section_6_div_5_Template_a_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const product_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.routeToProduct(product_r4.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShopComponent_section_6_div_5_Template_a_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const product_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.routeToProduct(product_r4.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("card h-100 bg-", ctx_r3.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("border-secondary", ctx_r3.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", product_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r3.selectedTheme().color)("font-family", ctx_r3.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r3.storeInfo().colorStyle.text_code, " mt-auto d-flex justify-content-center text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.formatPrice(product_r4.price / 100));
} }
const _c0 = function () { return []; };
function ShopComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ShopComponent_section_6_div_5_Template, 13, 18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r1.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r1.selectedTheme().color)("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.mode());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r1.storeProducts == _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.storeProducts);
} }
function ShopComponent_footer_7_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShopComponent_footer_7_div_22_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const social_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.openSocial(social_r10.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r9.getLinkImg(social_r10.name), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ShopComponent_footer_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ShopComponent_footer_7_div_22_Template, 3, 5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Powered by Thred");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("py-5 bg-", ctx_r2.storeInfo().colorStyle.back_code, "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.storeInfo().socials);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("m-0 text-center text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A9 ", ctx_r2.storeInfo().fullName, " 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("m-0 text-center text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
} }
class ShopComponent {
    constructor(platformID, cdr, router, titleService, metaService, loadService, rootComponent, _router, spinner, routingService) {
        this.platformID = platformID;
        this.cdr = cdr;
        this.router = router;
        this.titleService = titleService;
        this.metaService = metaService;
        this.loadService = loadService;
        this.rootComponent = rootComponent;
        this._router = _router;
        this.spinner = spinner;
        this.routingService = routingService;
        this.isImgLoaded = false;
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
    selectedProduct() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedProduct; }
    ngOnDestroy() {
        this.loadService.shopComponent = undefined;
    }
    ngOnInit() {
        //Globals.siteTitle = "jojo"
        this.loadService.shopComponent = this;
        this.init();
    }
    isBrowser() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID);
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
    routeToProduct(productID) {
        this.rootComponent.routeToProduct(productID);
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
    callback() {
        var _a, _b, _c;
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
            this.routingService.routeTo404(this.getStoreName().isCustom);
        }
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
    mode() {
        return this.rootComponent.mode;
    }
    open(e, item) {
    }
    addTags(title, imgUrl, description, url) {
        this.metaService.updateTag({ property: 'og:title', content: title + " - " + "Products" });
        this.metaService.updateTag({ property: 'og:image', content: imgUrl });
        this.metaService.updateTag({ property: 'og:url', content: url });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.titleService.setTitle(title);
        this.metaService.updateTag({ property: 'description', content: description });
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
        return this.getCurrencyForCountry(_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency, _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency.name != "US") + priceAsString;
    }
    getCurrencyForCountry(country, shouldShowName) {
        var returnItem = country.currency_symbol;
        if (shouldShowName)
            returnItem = country.name + " " + returnItem;
        return returnItem;
    }
    titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_1__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_3__.RoutingService)); };
ShopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 8, vars: 16, consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center", "mt-5"], [3, "class", 4, "ngIf"], [2, "max-height", "100%", "min-height", "100%"], ["class", "py-5", 3, "background-color", 4, "ngIf"], [1, "cover", 2, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "300px", "font-weight", "bold", "font-size", "35px"], [2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "py-5"], [1, "display-4", "fw-bolder", "text-center"], [1, "container", "px-4", "px-lg-5", "mt-5", 3, "hidden"], [1, "row", "gx-4", "gx-lg-5", "row-cols-1", "row-cols-md-3", "row-cols-xl-4", "justify-content-center"], ["class", "col mb-5", 4, "ngFor", "ngForOf"], [1, "col", "mb-5"], ["role", "button", 3, "click"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", 1, "card-img-top", 3, "src"], [1, "card-body", "p-2", "pb-0"], [1, "text-center"], [1, "fw-bolder"], ["role", "button", 2, "text-decoration", "none", 3, "click"], [1, "card-footer", "p-4", "pt-0", "pb-4", "border-top-0", "bg-transparent"], ["role", "button", 2, "font-weight", "bold", 3, "click"], [1, "container", "w-100", "d-block", "justify-content-center"], [1, "w-100", "row", "row-cols-1", "row-cols-md-7", "row-cols-xl-7", "justify-content-center", "justify-content-sm-start", "mb-5"], [1, "col", "mb-", "mx-2"], ["role", "button"], ["alt", "ok", "src", "assets/visacard.png", 2, "object-fit", "contain"], [1, "col", "mb-2", "mx-2"], ["alt", "ok", "src", "assets/mastercard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/amexcard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/applecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/googlecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/microsoftcard.png", 2, "object-fit", "contain"], [1, "w-100", "row", "row-cols-2", "row-cols-md-4", "row-cols-xl-4", "justify-content-center"], ["class", "col mb-4 mx-3", 3, "width", 4, "ngFor", "ngForOf"], [1, "w-100", "row", "row-cols-4", "row-cols-md-7", "row-cols-xl-7", "justify-content-end"], [1, "col", "mb-4", "mx-2"], [1, "container"], [1, "col", "mb-4", "mx-3"], ["alt", "ok", 1, "rounded-circle", 2, "object-fit", "contain", 3, "src"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ShopComponent_header_4_Template, 5, 11, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ShopComponent_section_6_Template, 6, 12, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ShopComponent_footer_7_Template, 35, 49, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.selectedIndicator().color);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("bdColor", ctx.selectedIndicator().bg_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("color", ctx.selectedIndicator().color);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("type", ctx.selectedIndicator().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_6_0 = ctx.storeInfo()) == null ? null : tmp_6_0.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && (ctx.storeProducts == null ? null : ctx.storeProducts.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.selectedTheme().bg_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && (ctx.storeProducts == null ? null : ctx.storeProducts.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && (ctx.storeProducts == null ? null : ctx.storeProducts.length) != 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBSTdCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuLmNvdmVye1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 36352:
/*!**************************************************************!*\
  !*** ./src/app/view-order-info/view-order-info.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewOrderInfoComponent": () => (/* binding */ ViewOrderInfoComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/shipping-country.model */ 31558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/routing.service */ 78078);














function ViewOrderInfoComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullScreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_6_0 = ctx_r0.storeInfo()) == null ? null : tmp_6_0.fullName, "\n");
  }
}

function ViewOrderInfoComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " ORDER HAS BEEN PLACED ");
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
  }
}

function ViewOrderInfoComponent_section_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r3.storeInfo().username, "/products/", product_r5.product.productID, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", product_r5.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r3.storeInfo().username, "/products/", product_r5.product.productID, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_3_0 = product_r5.product == null ? null : product_r5.product.name) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_4_0 = product_r5.size) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.getColor(product_r5.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.formatPrice(product_r5.product.price / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_7_0 = product_r5.quantity) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 1);
  }
}

function ViewOrderInfoComponent_section_3_a_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewOrderInfoComponent_section_3_a_23_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r6.trackingLink();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Track Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ViewOrderInfoComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ViewOrderInfoComponent_section_3_div_19_Template, 24, 10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "aside", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ViewOrderInfoComponent_section_3_a_23_Template, 3, 0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Shipping & Handling:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Sales Tax:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Order Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
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
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getShippingAddressFirst());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getShippingAddressSecond());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getShippingAddressThird());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Order #: ", ctx_r2.selectedOrder().orderID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.selectedOrder().products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r2.stillLoading());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_8_0 = (tmp_8_0 = ctx_r2.selectedOrder()) == null ? null : tmp_8_0.trackingNumber) !== null && tmp_8_0 !== undefined ? tmp_8_0 : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Items (", ctx_r2.itemCount(), "):");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.total()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.shipping());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.productTax());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.orderTotal());
  }
}

class ViewOrderInfoComponent {
  constructor(platformID, cdr, router, titleService, metaService, loadService, _router, rootComponent, spinner, routingService) {
    this.platformID = platformID;
    this.cdr = cdr;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.loadService = loadService;
    this._router = _router;
    this.rootComponent = rootComponent;
    this.spinner = spinner;
    this.routingService = routingService;
    this.loadedCart = false;
    this.isSpinning = false;
  }

  storeInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo;
  }

  availableCurrencies() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies;
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
    return this.selectedOrder().address;
  }

  billingAddress() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo;
  }

  cartLength() {
    var _a, _b;

    if (((_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.length) == 0) {
      return "";
    }

    return (_b = this.rootComponent.cart) === null || _b === void 0 ? void 0 : _b.length;
  }

  selectedOrder() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder;
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

  calculate() {
    this.cdr.detectChanges();
  }

  shipping() {
    var _a, _b;

    let shipping = (_b = (_a = this.selectedOrder()) === null || _a === void 0 ? void 0 : _a.shippingCost) !== null && _b !== void 0 ? _b : 0;

    if (shipping > 0) {
      return this.formatPrice(shipping);
    }

    return "FREE";
  }

  total() {
    var _a;

    var total = 0;
    (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder) === null || _a === void 0 ? void 0 : _a.products.forEach(product => {
      var _a, _b, _c;

      total += ((_b = (_a = product.product) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 0) * ((_c = product.quantity) !== null && _c !== void 0 ? _c : 1);
    });
    return total / 100;
  }

  format(d) {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.months[d.getMonth()].substring(0, 3) + " " + d.getDate() + " " + d.getFullYear();
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

  showSpinner() {
    if (!this.isSpinning) {
      this.isSpinning = true;

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformID)) {
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

  callback(orderID) {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d, _e;

      if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
        _this.rootComponent.setOptions();

        _this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink.toString());

        _this.showSpinner();

        _this.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username);

        if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getTemplates();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getOrder(orderID);
        } else if (((_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder) === null || _d === void 0 ? void 0 : _d.merchantUID) != _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.uid) {
          _this.routingService.routeToStore404(_this.getStoreName().link, _this.getStoreName().isCustom);

          return;
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getShippingAddress((_e = _this.selectedOrder()) === null || _e === void 0 ? void 0 : _e.uid);
        } else {
          _this.loadedCart = true;

          _this.cdr.detectChanges();

          _this.rootComponent.cdr.detectChanges();
        }
      } else {
        _this.routingService.routeTo404(_this.getStoreName().isCustom);
      }
    })();
  } // routeToMain404(){
  //   this._router.navigateByUrl("not-found")
  // }
  // routeTo404(){
  //   const storeName = this.getStoreName()
  //   this._router.navigateByUrl(storeName + "/not-found")
  // }


  orderCurrency() {
    var _a, _b, _c, _d, _e;

    return new _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_2__.Country((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder) === null || _a === void 0 ? void 0 : _a.currency.toUpperCase().slice(0, ((_c = (_b = this.selectedOrder()) === null || _b === void 0 ? void 0 : _b.currency.length) !== null && _c !== void 0 ? _c : 0) - 1), undefined, undefined, (_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder) === null || _d === void 0 ? void 0 : _d.currency, (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder) === null || _e === void 0 ? void 0 : _e.currencySymbol, 1, true, 0);
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

  getShippingAddressFirst() {
    var _a, _b;

    var name = (_a = this.shippingAddress()) === null || _a === void 0 ? void 0 : _a.name;
    var company = (_b = this.shippingAddress()) === null || _b === void 0 ? void 0 : _b.company;
    if (company) name += " - " + company;
    return name;
  }

  stillLoading() {
    var _a, _b, _c, _d;

    return ((_b = (_a = this.selectedOrder()) === null || _a === void 0 ? void 0 : _a.products.filter(product => {
      var _a;

      return ((_a = product.product) === null || _a === void 0 ? void 0 : _a.price) == undefined;
    })) === null || _b === void 0 ? void 0 : _b.length) != 0 || ((_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies) === null || _c === void 0 ? void 0 : _c.filter(currency => currency.shipping_rate_usd == undefined)) === null || _d === void 0 ? void 0 : _d.length) != 0 || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingTax == undefined;
  }

  itemCount() {
    var _a;

    var count = 0;
    (_a = this.selectedOrder()) === null || _a === void 0 ? void 0 : _a.products.forEach(product => {
      var _a;

      count += (_a = product.quantity) !== null && _a !== void 0 ? _a : 0;
    });
    return count;
  }

  orderTotal() {
    return this.numberWithCommas(this.formatPrice(this.total() + this.shippingNum() + this.productTaxNum()));
  }

  productTax() {
    let tax = this.tax();

    if (tax > 0) {
      return this.numberWithCommas(this.formatPrice(tax !== null && tax !== void 0 ? tax : 0));
    }

    return "N/A";
  }

  trackingLink() {
    var _a, _b, _c, _d;

    var link = "";

    if (((_b = (_a = this.selectedOrder()) === null || _a === void 0 ? void 0 : _a.address) === null || _b === void 0 ? void 0 : _b.country) === "Canada") {
      link = "https://www.purolator.com/purolator/ship-track/tracking-details.page?pin=" + ((_c = this.selectedOrder()) === null || _c === void 0 ? void 0 : _c.trackingNumber);
    } else {
      link = "https://chitchats.com/tracking/" + ((_d = this.selectedOrder()) === null || _d === void 0 ? void 0 : _d.trackingNumber);
    }

    window.open(link, "_blank");
  }

  productTaxNum() {
    var _a;

    return (_a = this.tax()) !== null && _a !== void 0 ? _a : 0;
  }

  tax() {
    return this.selectedOrder().tax;
  }

  shippingNum() {
    var _a, _b;

    return (_b = (_a = this.selectedOrder()) === null || _a === void 0 ? void 0 : _a.shippingCost) !== null && _b !== void 0 ? _b : 0;
  }

  init() {
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo = undefined;
    const storeInfo = this.getStoreName();
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom);
  }

  downloadAllStoreInfo(storeName, isCustom = false) {
    let orderID = this.getOrderID();

    this.loadService.myCallback = () => this.callback(orderID);

    this.loadService.getUser(storeName, undefined, isCustom);
  }

  getStoreName() {
    var request = "";

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformServer)(this.platformID)) {
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
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformID);
  }

  hasCart() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedOrder != undefined;
  }

  formatPrice(price) {
    var priceAsString = new String((price * this.orderCurrency().rate).toFixed(2));
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

    return this.numberWithCommas(this.getCurrencyForCountry(this.orderCurrency(), this.orderCurrency().name != "US") + priceAsString);
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

  routeToShipping() {
    var _a, _b, _c, _d;

    if (((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _a === void 0 ? void 0 : _a.email) && ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.name)) {
      this.rootComponent.routeToReview();
    } else if ((_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _c === void 0 ? void 0 : _c.email) {
      this.rootComponent.routeToBilling();
    } else if ((_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _d === void 0 ? void 0 : _d.name) {
      this.rootComponent.routeToShipping();
    } else {
      this.rootComponent.routeToShipping();
    }
  }

  next() {
    this.routeToShipping();
  }

  getOrderID() {
    const routeParams = this.router.snapshot.paramMap;
    const orderID = routeParams.get('order'); // Find the product that correspond with the id provided in route.

    return orderID;
  }

  ngOnInit() {
    this.init();
  }

}

ViewOrderInfoComponent.ɵfac = function ViewOrderInfoComponent_Factory(t) {
  return new (t || ViewOrderInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_5__.RoutingService));
};

ViewOrderInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ViewOrderInfoComponent,
  selectors: [["app-view-order-info"]],
  decls: 4,
  vars: 3,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "py-5", 3, "hidden", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center", "mt-5"], [1, "cover", 2, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "100px", "font-weight", "bold", "font-size", "35px"], [1, "text-center", 2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "py-5", 3, "hidden"], [1, "container", "pb-5", "mb-2", "mb-md-4"], [1, "row"], [1, "col-lg-8"], [1, "bg-white", "rounded-3", "shadow-lg", "p-2", "pb-1"], [1, "py-0", "px-xl-2"], [1, "text-accent", 3, "hidden"], [1, "h6", "mb-3", "pb-1", "ps-2", "mt-2"], [1, "fw-normal", "ps-2", 2, "font-style", "italic"], [1, "bg-white", "rounded-3", "shadow-lg", "p-4", "pt-3", "mt-3"], [1, "h6", "mb-1", "pb-1", "ps-1", "mt-2"], [1, "py-2", "px-xl-2"], ["class", "d-sm-flex justify-content-between align-items-center pb-3 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "bg-white", "rounded-3", "shadow-lg", "p-4", "pb-0", 3, "hidden"], ["class", "btn btn-primary  d-block w-100 mb-4", "type", "button", 3, "click", 4, "ngIf"], [1, "text-center", "mt-4", "pt-3", "border-top", "border-bottom"], [1, "d-flex", "justify-content-between"], [1, "fw-bold", 2, "font-size", "9"], [1, "fw-normal", 2, "font-size", "9"], [1, "d-flex", "justify-content-between", "pt-2", "mt-2"], [1, "d-sm-flex", "justify-content-between", "align-items-center", "pb-3", "pt-2"], [1, "d-block", "d-sm-flex", "align-items-center", "text-center", "text-sm-start"], [1, "d-inline-block", "flex-shrink-0", "mx-auto", "me-sm-4", 3, "href"], ["onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", "width", "160", "alt", "Product", 2, "border-radius", "2.5%", 3, "src"], [1, "pt-2"], [1, "text-dark", "text-decoration-none", 2, "font-weight", "bold", 3, "href"], [1, "fs-sm"], [1, "text-muted", "me-2"], [1, "fs-lg", "text-accent", "pt-2"], [1, "pt-2", "pt-sm-0", "ps-sm-3", "mx-auto", "mx-sm-0", "text-center", "text-sm-start", 2, "max-width", "5.5rem"], ["for", "quantity1", 1, "form-label"], ["for", "quantity1", 1, "text-center", 2, "font-weight", "bold", "font-size", "22px", "width", "100%"], ["type", "button", 1, "btn", "btn-primary", "d-block", "w-100", "mb-4", 3, "click"], [1, "ci-card", "fs-lg", "me-2"]],
  template: function ViewOrderInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewOrderInfoComponent_ngx_spinner_1_Template, 3, 10, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewOrderInfoComponent_header_2_Template, 5, 5, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewOrderInfoComponent_section_3_Template, 45, 14, "section", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.hasCart());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.hasCart());
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
  styles: [".centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctb3JkZXItaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0VBQ2xDOztBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFJN0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InZpZXctb3JkZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG5cbi5jb3ZlcntcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 81821:
/*!****************************************************!*\
  !*** ./src/app/view-order/view-order.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewOrderComponent": () => (/* binding */ ViewOrderComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/shipping-country.model */ 31558);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/routing.service */ 78078);














function ViewOrderComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullScreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_6_0 = ctx_r0.storeInfo()) == null ? null : tmp_6_0.fullName, "\n");
  }
}

function ViewOrderComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " MY ORDERS ");
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
  }
}

function ViewOrderComponent_section_3_div_4_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Qty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const order_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r7.storeInfo().username, "/products/", product_r10.product.productID, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", product_r10.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r7.storeInfo().username, "/products/", product_r10.product.productID, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_3_0 = product_r10.product == null ? null : product_r10.product.name) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_4_0 = product_r10.size) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.getColor(product_r10.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_6_0 = product_r10.quantity) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.formatPrice(product_r10.product.price / 100, order_r6));
  }
}

function ViewOrderComponent_section_3_div_4_div_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewOrderComponent_section_3_div_4_div_1_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const order_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return ctx_r12.trackingLink(order_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Track Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ViewOrderComponent_section_3_div_4_div_1_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Tracking Unavailable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", true);
  }
}

function ViewOrderComponent_section_3_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ViewOrderComponent_section_3_div_4_div_1_div_6_Template, 22, 10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "View Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ViewOrderComponent_section_3_div_4_div_1_a_11_Template, 3, 0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ViewOrderComponent_section_3_div_4_div_1_a_12_Template, 3, 2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    let tmp_4_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r5.storeInfo().username, "/orders/", order_r6.orderID, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Order #: ", order_r6.orderID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", order_r6.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r5.storeInfo().username, "/orders/", order_r6.orderID, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_4_0 = order_r6.trackingNumber) !== null && tmp_4_0 !== undefined ? tmp_4_0 : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !((tmp_5_0 = order_r6.trackingNumber) !== null && tmp_5_0 !== undefined ? tmp_5_0 : false));
  }
}

function ViewOrderComponent_section_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewOrderComponent_section_3_div_4_div_1_Template, 13, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.orders());
  }
}

function ViewOrderComponent_section_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Your Order History is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Shop More Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("href", "/", ctx_r4.storeInfo().username, "/products", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function ViewOrderComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ViewOrderComponent_section_3_div_4_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ViewOrderComponent_section_3_div_5_Template, 12, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.hasCart() && ctx_r2.loadedCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.hasCart() && ctx_r2.loadedCart);
  }
}

class ViewOrderComponent {
  constructor(platformID, cdr, router, titleService, metaService, loadService, _router, rootComponent, spinner, routingService) {
    this.platformID = platformID;
    this.cdr = cdr;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.loadService = loadService;
    this._router = _router;
    this.rootComponent = rootComponent;
    this.spinner = spinner;
    this.routingService = routingService;
    this.loadedCart = false;
    this.isSpinning = false;
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

  orders() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.orders;
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

  shipping(order) {
    var _a, _b;

    let shipping = ((_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.find(country => country.name_full == this.selectedCountry)) === null || _a === void 0 ? void 0 : _a.shipping_rate_usd) !== null && _b !== void 0 ? _b : 0) / 100;

    if (shipping > 0) {
      return this.formatPrice(shipping, order);
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

  showSpinner() {
    if (!this.isSpinning) {
      this.isSpinning = true;

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformID)) {
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

  callback() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
        _this.showSpinner();

        _this.rootComponent.setOptions();

        _this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink.toString());

        _this.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username);

        if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getCustomer();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getCountries();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getTemplates();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.orders == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          if (yield _this.loadService.authenticated()) {
            _this.loadService.getOrders();
          } else {
            _this.loadedCart = true;
            _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.orders = [];

            _this.cdr.detectChanges();
          }
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getShippingAddress();
        } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(_this.platformID)) {
          _this.loadService.getBillingAddress();
        } else {
          _this.loadedCart = true;

          _this.cdr.detectChanges();
        }
      } else {
        _this.routingService.routeTo404(_this.getStoreName().isCustom);
      }
    })();
  }

  init() {
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.orders = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = undefined;
    const storeInfo = this.getStoreName();
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom);
  }

  downloadAllStoreInfo(storeName, isCustom = false) {
    this.loadService.myCallback = () => this.callback();

    this.loadService.getUser(storeName, undefined, isCustom);
  }

  getStoreName() {
    var request = "";

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformServer)(this.platformID)) {
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
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformID);
  }

  hasCart() {
    var _a, _b;

    return (_b = ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.orders) === null || _a === void 0 ? void 0 : _a.length) != 0) !== null && _b !== void 0 ? _b : false;
  }

  formatPrice(price, order) {
    var priceAsString = new String((price * this.orderCurrency(order).rate).toFixed(2));
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

    return this.numberWithCommas(this.getCurrencyForCountry(this.orderCurrency(order), this.orderCurrency(order).name != "US") + priceAsString);
  }

  orderCurrency(order) {
    var _a;

    return new _models_shipping_country_model__WEBPACK_IMPORTED_MODULE_2__.Country(order.currency.toUpperCase().slice(0, ((_a = order.currency.length) !== null && _a !== void 0 ? _a : 0) - 1), undefined, undefined, order.currency, order.currencySymbol, 1, true, 0);
  }

  numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getCurrencyForCountry(country, shouldShowName) {
    var returnItem = country.currency_symbol;
    if (shouldShowName) returnItem = country.name + " " + returnItem;
    return returnItem;
  }

  trackingLink(order) {
    var _a;

    var link = "";

    if (((_a = order.address) === null || _a === void 0 ? void 0 : _a.country) === "Canada") {
      link = "https://www.purolator.com/purolator/ship-track/tracking-details.page?pin=" + order.trackingNumber;
    } else {
      link = "https://chitchats.com/tracking/" + order.trackingNumber;
    }

    window.open(link, "_blank");
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

  routeToShipping() {
    var _a, _b, _c, _d;

    if (((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _a === void 0 ? void 0 : _a.email) && ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.name)) {
      this.rootComponent.routeToReview();
    } else if ((_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _c === void 0 ? void 0 : _c.email) {
      this.rootComponent.routeToBilling();
    } else if ((_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _d === void 0 ? void 0 : _d.name) {
      this.rootComponent.routeToShipping();
    } else {
      this.rootComponent.routeToShipping();
    }
  }

  next() {
    this.routeToShipping();
  }

  ngOnInit() {
    this.init();
  }

}

ViewOrderComponent.ɵfac = function ViewOrderComponent_Factory(t) {
  return new (t || ViewOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_5__.RoutingService));
};

ViewOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ViewOrderComponent,
  selectors: [["app-view-order"]],
  decls: 4,
  vars: 3,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "py-5", 3, "hidden", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center", "mt-5"], [1, "cover", 2, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "100px", "font-weight", "bold", "font-size", "35px"], [1, "text-center", 2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "py-5", 3, "hidden"], [1, "container", "pb-5", "mb-2", "mb-md-4"], [1, "row"], [1, "col-lg-0"], [4, "ngIf"], ["class", "bg-white rounded-3 shadow-lg p-4 pt-3 mt-0", 4, "ngIf"], ["class", "bg-white rounded-3 shadow-lg p-4 pt-3 mt-4", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-3", "shadow-lg", "p-4", "pt-3", "mt-4"], [1, "h6", "mb-0", "pb-0", "ps-2", "mt-0"], [1, "text-dark", "text-decoration-none", 2, "font-weight", "bold", 3, "href"], [1, "d-flex", "justify-content-between", "align-items-top"], [1, "py-2", "px-xl-2"], ["class", "d-sm-flex justify-content-between align-items-center pb-3 pt-2", 4, "ngFor", "ngForOf"], [1, "pt-2"], ["type", "button", 1, "btn", "btn-primary", "d-block", "mb-1", "pb-1", "ps-1", "mt-2", 2, "width", "200px", 3, "href"], [1, "ci-card", "fs-lg", "me-2"], ["class", "btn btn-primary  d-block mb-1 pb-1 ps-1 mt-2", "style", "width: 200px;", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-primary  d-block mb-1 pb-1 ps-1 mt-2", "style", "width: 200px;", "type", "button", 3, "disabled", 4, "ngIf"], [1, "d-sm-flex", "justify-content-between", "align-items-center", "pb-3", "pt-2"], [1, "d-block", "d-sm-flex", "align-items-center", "text-center", "text-sm-start"], [1, "d-inline-block", "flex-shrink-0", "mx-auto", "me-sm-4", 3, "href"], ["onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", "width", "160", "alt", "Product", 2, "border-radius", "2.5%", 3, "src"], [1, "fs-sm"], [1, "text-muted", "me-2"], [1, "fs-lg", "text-accent", "pt-2"], ["type", "button", 1, "btn", "btn-primary", "d-block", "mb-1", "pb-1", "ps-1", "mt-2", 2, "width", "200px", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "d-block", "mb-1", "pb-1", "ps-1", "mt-2", 2, "width", "200px"], [1, "bg-white", "rounded-3", "shadow-lg", "p-4", "pt-3", "mt-0"], [1, "h6", "ps-3", "mt-2", "text-center", 2, "font-weight", "bolder"], [1, "d-block", "align-items-center", "pt-2"], [1, "d-block", "align-items-center", "text-center", "text-sm-start"], ["href", "shop-single-v1.html", 1, "mx-auto", "me-sm-4"], ["src", "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media", "alt", "Product", 2, "max-width", "100%", "height", "auto"], [1, "h6", "ps-3", "mt-2", "text-center"], [1, "text-dark", "text-decoration-underline", 2, "font-weight", "bold", 3, "href"]],
  template: function ViewOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewOrderComponent_ngx_spinner_1_Template, 3, 10, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewOrderComponent_header_2_Template, 5, 5, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewOrderComponent_section_3_Template, 6, 3, "section", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser());
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
  styles: [".centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBSTdCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJ2aWV3LW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuLmNvdmVye1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD3Ec_FWZrlbTBWdgBWRrsBwMmXQ4aniWU",
        authDomain: "shopmythred.com",
        databaseURL: "https://clothingapp-ed125.firebaseio.com",
        projectId: "clothingapp-ed125",
        storageBucket: "clothingapp-ed125.appspot.com",
        messagingSenderId: "628658827719",
        appId: "1:628658827719:web:66671544aeb6d2a78029e2",
        measurementId: "G-YVHCR44N65"
    },
    pxx: ""
};
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map