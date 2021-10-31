(self["webpackChunkthred_web"] = self["webpackChunkthred_web"] || []).push([["src_app_product_product_module_ts"],{

/***/ 5142:
/*!********************************************************!*\
  !*** ./src/app/model-viewer/model-viewer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelViewerComponent": () => (/* binding */ ModelViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _models_template_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/template.model */ 36083);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product.model */ 81454);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 79866);











function ModelViewerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Launching Model Viewer...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullScreen", false)("disableAnimation", true)("name", "modelSpinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
} }
class ModelViewerComponent {
    constructor(http, sanitizer, modalService, platformID, spinner) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.platformID = platformID;
        this.spinner = spinner;
        this.myHtmlTemplate = '';
        this.data = {
            "template": new _models_template_model__WEBPACK_IMPORTED_MODULE_0__.Template(),
            "product": new _models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product()
        };
        this.template = new _models_template_model__WEBPACK_IMPORTED_MODULE_0__.Template();
        this.product = new _models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
        this.isSpinning = false;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.template = this.data.template;
        this.product = this.data.product;
        this.showSpinner();
        this.openModel();
    }
    getModelUrl(type) {
        switch (type) {
            case "ATC Hoodie":
                return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2Fhoodie_model.glb?alt=media";
            case "MUG":
                return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2Fmug_model2.glb?alt=media";
            default:
                return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2Fshirt_model.glb?alt=media";
        }
    }
    getModelTextureUrl(type, templateColor) {
        switch (type) {
            case "ATC Hoodie":
                return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2FTextures%2F" + templateColor + ".jpg?alt=media";
            case "MUG":
                return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2FTextures%2F" + templateColor + ".jpg?alt=media";
            default:
                return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2FTextures%2F" + templateColor + ".jpg?alt=media";
        }
    }
    getSkyBoxUrl(type, skyBoxCode) {
        var productType = "TShirts";
        switch (type) {
            case "ATC Hoodie":
                productType = "Hoodies";
                break;
            case "MUG":
                productType = "Mugs";
                break;
            default:
                productType = "TShirts";
        }
        return "https://storage.googleapis.com/clothingapp-ed125.appspot.com/Models/" + productType + "/Skyboxes/" + skyBoxCode + ".hdr";
    }
    openBtn() {
        this.modalService.dismissAll("success");
    }
    isBrowser() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformID);
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
    storeInfo() { return _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo; }
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
    showSpinner() {
        if (!this.isSpinning) {
            this.isSpinning = true;
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformID)) {
                this.spinner.show("modelSpinner");
            }
            ;
            setTimeout(() => {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformID)) {
                    this.hideSpinner();
                    this.spinner.hide();
                }
                ;
            }, 2000);
        }
    }
    hideSpinner() {
        if (this.isSpinning) {
            this.isSpinning = false;
            // this.spinner.hide()
        }
    }
    openModel() {
        var _a, _b, _c;
        var html = "";
        var skyBoxUrl = this.getSkyBoxUrl(this.product.productType, "room");
        var modelTextureURL = this.getModelTextureUrl(this.product.productType, this.product.templateColor);
        var modelURL = this.getModelUrl(this.product.productType);
        let backURL = (_a = this.product.getUrl(true)) !== null && _a !== void 0 ? _a : "";
        let url = (_b = this.product.getUrl(false)) !== null && _b !== void 0 ? _b : "";
        let color = this.template.colors.find(color => color.code == this.product.templateColor);
        if (color) {
            var colors = [1, 1, 1, 1];
            color.rgb.forEach((e, index) => {
                colors[index] = e;
            });
            switch ((_c = this.template.productCode) !== null && _c !== void 0 ? _c : "ATC1000") {
                case "ATC1000":
                    html = "<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer></script></head><body><model-viewer camera-controls skybox-image='" + skyBoxUrl + "'environment-image='" + skyBoxUrl + "'alt='A 3D astronaut model depicted within a forest'src='" + modelURL + "'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (i === 0){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + modelTextureURL + "');}else if (i === 1){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + url + "');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);</script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'></script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";
                    break;
                case "ATC Hoodie":
                    html = "<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer></script></head><body><model-viewer camera-controls skybox-image='" + skyBoxUrl + "'environment-image='" + skyBoxUrl + "'alt='A 3D astronaut model depicted within a forest'src='" + modelURL + "'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name === 'Left Cap' || materials[i].name === 'Right Cap' || materials[i].name == 'String Holes (Interior)'){materials[i].pbrMetallicRoughness.setBaseColorFactor([" + colors[0] + ", " + colors[1] + ", " + colors[2] + ", " + colors[3] + "]);}else if (materials[i].name === 'String Holes'){materials[i].pbrMetallicRoughness.setBaseColorFactor([0.7,0.7,0.7,1]);}else if (materials[i].name === 'Draw Strings' || materials[i].name === 'Body' || materials[i].name == 'Front Canvas'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + modelTextureURL + "');}else if (materials[i].name === 'Front Image'){console.log(materials[i]);materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + url + "');}else if (materials[i].name === 'Back Image'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + backURL + "');}console.log(materials[i].name)}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);</script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'></script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";
                    break;
                case "MUG":
                    html = "<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer></script></head><body><model-viewer camera-controls skybox-image='" + skyBoxUrl + "'environment-image='" + skyBoxUrl + "'alt='A 3D astronaut model depicted within a forest'src='" + modelURL + "'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name == 'DefaultMaterial.001'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('');materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + modelTextureURL + "');}else if (materials[i].name == 'Design'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + url + "');}else if (materials[i].name == 'Design_Back'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" + backURL + "');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);</script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'></script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";
                    break;
                default:
                    html = "";
                    return;
            }
            this.myHtmlTemplate = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    }
}
ModelViewerComponent.ɵfac = function ModelViewerComponent_Factory(t) { return new (t || ModelViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService)); };
ModelViewerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModelViewerComponent, selectors: [["app-model-viewer"]], decls: 6, vars: 10, consts: [["type", "submit", 2, "width", "100%", "height", "10%", "display", "block", "border", "none", "font-weight", "bold", "cursor", "pointer", 3, "click"], ["id", "capture", 1, "w-100"], [2, "z-index", "1", "position", "absolute", "border", "0", "width", "100%", "height", "600px", "overflow", "auto", 3, "srcdoc"], ["style", "z-index: 2; position: absolute; border: 0; width:100%; height: 600px; overflow: auto;", 4, "ngIf"], [2, "z-index", "2", "position", "absolute", "border", "0", "width", "100%", "height", "600px", "overflow", "auto"], ["size", "medium", 3, "bdColor", "color", "type", "fullScreen", "disableAnimation", "name"], [1, "mt-5"]], template: function ModelViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModelViewerComponent_Template_button_click_1_listener() { return ctx.openBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " CLOSE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModelViewerComponent_div_5_Template, 4, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("card-body p-0 pb-0 bg-", ctx.storeInfo().colorStyle.back_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("btn text-", ctx.storeInfo().colorStyle.text_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcdoc", ctx.myHtmlTemplate, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSpinning);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RlbC12aWV3ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7695:
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var src_app_models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/product.model */ 81454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _model_viewer_model_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model-viewer/model-viewer.component */ 5142);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product-in-cart.model */ 49991);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ 98458);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/routing.service */ 78078);



















function ProductComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngx-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fullScreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", (tmp_6_0 = ctx_r0.storeInfo()) == null ? null : tmp_6_0.fullName, "\n");
  }
}

function ProductComponent_section_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_section_2_div_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r8.open();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "VIEW IN 3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r3.selectedTemplate() == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r3.storeInfo().colorStyle.text_code, " mt-auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName);
  }
}

function ProductComponent_section_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Product does not support 3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r5.selectedTemplate() == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r5.storeInfo().colorStyle.text_code, " mt-auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r5.storeInfo().fontName);
  }
}

function ProductComponent_section_2_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_section_2_button_33_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const num_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r11.selectQuantity(num_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName)("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](num_r10);
  }
}

function ProductComponent_section_2_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_section_2_button_42_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const size_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r14.selectSize(size_r13, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const size_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r7.storeInfo().colorStyle.text_code, " my-1 mx-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r7.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](size_r13);
  }
}

function ProductComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_section_2_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r16.open();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ProductComponent_section_2_div_8_Template, 3, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ProductComponent_section_2_ng_template_9_Template, 3, 6, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, ProductComponent_section_2_button_33_Template, 2, 6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_section_2_Template_button_click_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r18.selectSize(ctx_r18.sizes(false)[0], $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ProductComponent_section_2_button_42_Template, 2, 6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_section_2_Template_a_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r19.addToCart();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_5_0;
    let tmp_13_0;
    let tmp_18_0;
    let tmp_21_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r1.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r1.storeInfo().username == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r1.selectedProduct() == undefined || ctx_r1.selectedTemplate() == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("card h-100 bg-", ctx_r1.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("border-secondary", ctx_r1.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", (tmp_5_0 = (tmp_5_0 = ctx_r1.selectedProduct()) == null ? null : tmp_5_0.url) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.has3D())("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("card h-80 bg-", ctx_r1.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("border-secondary", ctx_r1.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r1.selectedTemplate() == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName)("color", ctx_r1.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((tmp_13_0 = (tmp_13_0 = ctx_r1.selectedProduct()) == null ? null : tmp_13_0.name) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r1.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", "Details", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.formatPrice(((tmp_18_0 = (tmp_18_0 = ctx_r1.selectedProduct()) == null ? null : tmp_18_0.price) !== null && tmp_18_0 !== undefined ? tmp_18_0 : 0) / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName)("color", ctx_r1.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", (tmp_21_0 = (tmp_21_0 = ctx_r1.selectedProduct()) == null ? null : tmp_21_0.description) !== null && tmp_21_0 !== undefined ? tmp_21_0 : "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName)("color", ctx_r1.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r1.formattedInfo(), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r1.storeInfo().colorStyle.text_code, " btn-sm mb-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Qty: ", ctx_r1.quantity(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r1.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("border-secondary", ctx_r1.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.quantityNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", ctx_r1.selectedTheme().color)("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", "Choose Your Size", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r1.storeInfo().colorStyle.text_code, " active my-1 mx-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.sizes(false)[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.sizes(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName)("background-color", ctx_r1.selectedTheme().color)("color", ctx_r1.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", "ADD TO BAG", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName)("color", ctx_r1.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\uD83D\uDE80 Order now and get it before ", ctx_r1.nextweek(), "");
  }
}

function ProductComponent_footer_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductComponent_footer_3_div_22_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const social_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r22.openSocial(social_r21.link);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const social_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r20.getLinkImg(social_r21.name), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}

function ProductComponent_footer_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ProductComponent_footer_3_div_22_Template, 3, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Powered by Thred");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("py-5 bg-", ctx_r2.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.storeInfo().socials);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("m-0 text-center text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A9 ", ctx_r2.storeInfo().fullName, " 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("m-0 text-center text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
  }
}

class ProductComponent {
  constructor(platformID, cdr, db, router, titleService, metaService, loadService, modalService, route, rootComponent, _router, spinner, routingService) {
    this.platformID = platformID;
    this.cdr = cdr;
    this.db = db;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.loadService = loadService;
    this.modalService = modalService;
    this.route = route;
    this.rootComponent = rootComponent;
    this._router = _router;
    this.spinner = spinner;
    this.routingService = routingService;
    this.productToBuy = new _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_4__.ProductInCart();
    this.quantityNumbers = [];
    this.isSpinning = false;
    _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedTemplate = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedCurrency = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo.uid = undefined;
  }

  storeInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo;
  }

  availableCurrencies() {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.availableCurrencies;
  }

  selectedCurrency() {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedCurrency;
  }

  templates() {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.availableTemplates;
  }

  availableTemplates() {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.availableTemplates;
  }

  selectedTemplate() {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedTemplate;
  }

  selectedProduct() {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct;
  }

  getLinkImg(name) {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.socials.filter(obj => {
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

  selectedIndicator() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    let indicator = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    };
    return indicator;
  }

  ngOnInit() {
    const productID = this.getProductID();

    this.loadService.myCallback = () => this.checkLoad(productID);

    this.checkLoad(productID);

    for (let i = 0; i < 9; i++) {
      this.quantityNumbers.push(i + 1);
    } // this.route.navigate([], {
    //   queryParams: {
    //     id: productID
    //   },
    //   queryParamsHandling: 'merge',
    // });

  }

  ngAfterViewInit() {}

  open() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID) && this.has3D()) {
      const modalRef = this.modalService.open(_model_viewer_model_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ModelViewerComponent, {
        size: "lg"
      });
      modalRef.componentInstance.data = {
        "template": this.selectedTemplate(),
        "product": this.selectedProduct()
      };
    }
  }

  has3D() {
    var _a, _b;

    return (_b = (_a = this.selectedTemplate()) === null || _a === void 0 ? void 0 : _a.has3D) !== null && _b !== void 0 ? _b : false;
  }

  nextweek() {
    var d = new Date();
    return this.format(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10));
  }

  format(d) {
    return _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.days[d.getDay()] + ', ' + _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.months[d.getMonth()] + " " + d.getDate();
  }

  formattedInfo() {
    var _a, _b;

    return (_b = (_a = this.selectedTemplate()) === null || _a === void 0 ? void 0 : _a.moreInfo.replace(/\\n/g, "<br>")) !== null && _b !== void 0 ? _b : "";
  }

  sizes(popFirst) {
    var _a, _b, _c, _d;

    if (popFirst) {
      return (_b = (_a = this.selectedTemplate()) === null || _a === void 0 ? void 0 : _a.sizes.slice(1)) !== null && _b !== void 0 ? _b : [];
    }

    return (_d = (_c = this.selectedTemplate()) === null || _c === void 0 ? void 0 : _c.sizes) !== null && _d !== void 0 ? _d : [];
  }

  isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID);
  }

  selectedTheme() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.colorStyle) === null || _b === void 0 ? void 0 : _b.btn_color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.colorStyle) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.colorStyle) === null || _f === void 0 ? void 0 : _f.name;
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

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
        this.spinner.show();
      }

      ;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    }
  }

  hideSpinner() {
    if (this.isSpinning) {
      this.isSpinning = false; // this.spinner.hide()
    }
  }

  getStoreName() {
    var request = "";

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformServer)(this.platformID)) {
      request = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.URL;
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

  checkLoad(productID) {
    var _a;

    if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct == undefined) {
      _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct = new src_app_models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
      this.loadService.getPost(productID);
      this.productToBuy.product = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct;
    } else {
      if (!_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.isAvailable) {
        this.addTags(_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.name, _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.url.toString(), "* PRODUCT UNAVAILABLE *", "https://shopmythred.com");

        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
          this.routingService.routeToStore404(this.getStoreName().link, this.getStoreName().isCustom);
        }

        return;
      }

      this.addTags(_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.name, _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.url.toString(), this.formatPrice(_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.price / 100) + ". " + _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.description, "https://shopmythred.com");

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
        if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo.uid == undefined) {
          const storeInfo = this.getStoreName();
          this.loadService.getUser(storeInfo.link, undefined, storeInfo.isCustom);
        } else {
          this.showSpinner();
          this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo.profileLink.toString());

          if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo.uid != _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.uid) {
            this.routingService.routeToStore404(this.getStoreName().link, this.getStoreName().isCustom);
          } else if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
            this.loadService.getCustomer();
          } else if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedTemplate == undefined) {
            this.rootComponent.setOptions();
            this.loadService.getTemplate((_a = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct.productType) !== null && _a !== void 0 ? _a : "");
          } else if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedCurrency == undefined) {
            this.loadService.getCountries();
          } else {
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(this.platformID)) {
              this.loadService.logView();
            }

            this.cdr.detectChanges();
          }
        }
      }
    }
  }

  selectSize(size, $event) {
    this.productToBuy.size = size;
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active"); // if a Button already has Class: .active

      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }
  }

  selectQuantity(qty) {
    this.productToBuy.quantity = Number(qty);
  }

  quantity() {
    var _a;

    return (_a = this.productToBuy.quantity) !== null && _a !== void 0 ? _a : "1";
  }

  closeBtn() {
    console.log("Getting Cart");
    this.rootComponent.cart = undefined;
    this.rootComponent.getCart();
    this.addToCart();
  }

  addToCart() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct == undefined) return;
      _this.productToBuy.product = JSON.parse(JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.selectedProduct));
      let product = JSON.parse(JSON.stringify(_this.productToBuy));
      let mappedData = {
        "UID": (_a = product.product) === null || _a === void 0 ? void 0 : _a.uid,
        "Size": product.size,
        "Qty": product.quantity,
        "Timestamp": new Date(),
        "Post_ID": (_b = product.product) === null || _b === void 0 ? void 0 : _b.productID
      };

      if (yield _this.loadService.authenticated()) {
        yield _this.loadService.addToCart(mappedData);
      } else {
        let ngbModalOptions = {
          size: "lg"
        };

        const modalRef = _this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, ngbModalOptions);

        let sub = modalRef.dismissed.subscribe(result => {
          if (result == "success") {
            _this.closeBtn();
          }

          sub.unsubscribe();
        });
        modalRef.componentInstance.authMode = 1;
      } // let data = {
      //     "Cart_List" : FieldValue.arrayUnion([mappedData])
      // }
      // // Analytics.logEvent("added_to_cart", parameters: [
      // //     "name": "Add to Cart",
      // //     "full_text": "User added to cart"
      // // ])
      // Firestore.firestore().collection("Users/\(uid)/Cart_Info").document("Cart_List").setData(data, merge: true, completion: { error in
      //     if let err = error{
      //         completed()
      //         print(err.localizedDescription)
      //     }
      //     else{
      //         completed()
      //     }
      // })

    })();
  }

  addTags(title, imgUrl, description, url) {
    var _a, _b;

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
    var newTitle = title;

    if (_globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo.fullName) {
      newTitle += (_b = " - " + ((_a = _globals__WEBPACK_IMPORTED_MODULE_3__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.fullName)) !== null && _b !== void 0 ? _b : "";
    }

    this.titleService.setTitle(newTitle);
    this.metaService.updateTag({
      property: 'description',
      content: description
    });
  }

  formatPrice(price) {
    var _a, _b, _c, _d;

    var priceAsString = new String((price * ((_b = (_a = this.selectedCurrency()) === null || _a === void 0 ? void 0 : _a.rate) !== null && _b !== void 0 ? _b : 1)).toFixed(2)); // var priceAsString = new String(Number((price * (this.selectedCurrency()?.rate ?? 1)).toFixed(2)).toLocaleString('en'))

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

    return this.numberWithCommas(this.getCurrencyForCountry(((_d = (_c = this.selectedCurrency()) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : "US") != "US", this.selectedCurrency()) + priceAsString);
  }

  numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getURL(uid, productID) {
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FProducts%2F' + productID + '%2Flink_' + productID + '.png?alt=media';
  }

  getCurrencyForCountry(shouldShowName, country) {
    var _a, _b;

    var returnItem = (_a = country === null || country === void 0 ? void 0 : country.currency_symbol) !== null && _a !== void 0 ? _a : "$";
    if (shouldShowName) returnItem = ((_b = country === null || country === void 0 ? void 0 : country.name) !== null && _b !== void 0 ? _b : "US") + " " + returnItem;
    return returnItem;
  }

  getProductID() {
    const routeParams = this.router.snapshot.paramMap;
    const productID = routeParams.get('product'); // Find the product that correspond with the id provided in route.

    return productID;
  }

}

ProductComponent.ɵfac = function ProductComponent_Factory(t) {
  return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_6__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_8__.RoutingService));
};

ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ProductComponent,
  selectors: [["app-product"]],
  decls: 4,
  vars: 3,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], ["class", "py-5", 3, "hidden", "background-color", 4, "ngIf"], [3, "class", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center", "mt-5"], [1, "py-5", 3, "hidden"], [1, "container", "px-4", "px-lg-5", "mt-0"], [1, "row", "gx-4", "gx-lg-1", "row-cols-1", "row-cols-md-2", "row-cols-xl-2", "justify-content-center", 3, "hidden"], [1, "col", "mb-1"], ["role", "button", 3, "click"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", 1, "card-img-top", 3, "src"], [1, "card-footer", "p-4", "pt-3", "pb-3", "border-top-0", "bg-transparent"], ["class", "text-center", 3, "hidden", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "hidden"], [1, "card-body", "p-4", "pb-0"], [1, "text-center"], [1, "fw-bolder", 2, "font-size", "34px", "line-height", "1.4em"], [1, "card-body", "p-4", "pb-0", "mt-0"], [1, "text-left"], [1, "card-body", "p-0", "pb-0"], [1, "fw-bolder", 2, "font-size", "17px", 3, "innerHTML"], [1, "text-left", "mt-5", "mb-0", 2, "color", "rgb(190, 6, 6)"], [1, "fw-bolder", 2, "font-size", "35px"], [1, "fw-normal", 2, "font-size", "14px", "font-style", "italic", 3, "innerHTML"], [1, "fw-normal", 2, "font-size", "11px", 3, "innerHTML"], ["ngbDropdown", "", "container", "body", 1, "d-inline"], ["ngbDropdownToggle", ""], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "font-family", "color", "click", 4, "ngFor", "ngForOf"], [1, "container", "px-4", "mt-3"], [1, "row", "gx-4", "gx-lg-1", "row-cols-5", "row-cols-md-4", "row-cols-xl-6", "justify-content-center"], ["type", "button", "id", "size", 2, "font-weight", "bold", "font-size", "12px", 3, "click"], ["type", "button", "style", "font-weight:bold; font-size:12px;", "id", "size", 3, "font-family", "class", "click", 4, "ngFor", "ngForOf"], [1, "card-footer", "p-4", "pt-5", "pb-3", "border-top-0", "bg-transparent"], [1, "btn", "mt-auto", "d-flex", "flex-wrap", 2, "font-weight", "bold", "font-size", "25px", "justify-content", "center", 3, "innerHTML", "click"], [1, "btn", "mt-auto", "d-flex", "flex-wrap", 2, "font-weight", "bold", "font-size", "13px", "justify-content", "center"], [1, "text-center", 3, "hidden"], [2, "font-weight", "bold", "font-size", "15px", 3, "click"], [2, "font-weight", "bold", "font-size", "12px"], ["ngbDropdownItem", "", 3, "click"], [1, "container", "w-100", "d-block", "justify-content-center"], [1, "w-100", "row", "row-cols-1", "row-cols-md-7", "row-cols-xl-7", "justify-content-center", "justify-content-sm-start", "mb-5"], [1, "col", "mb-", "mx-2"], ["role", "button"], ["alt", "ok", "src", "assets/visacard.png", 2, "object-fit", "contain"], [1, "col", "mb-2", "mx-2"], ["alt", "ok", "src", "assets/mastercard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/amexcard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/applecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/googlecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/microsoftcard.png", 2, "object-fit", "contain"], [1, "w-100", "row", "row-cols-2", "row-cols-md-4", "row-cols-xl-4", "justify-content-center"], ["class", "col mb-4 mx-3", 3, "width", 4, "ngFor", "ngForOf"], [1, "w-100", "row", "row-cols-4", "row-cols-md-7", "row-cols-xl-7", "justify-content-end"], [1, "col", "mb-4", "mx-2"], [1, "container"], [1, "col", "mb-4", "mx-3"], ["alt", "ok", 1, "rounded-circle", 2, "object-fit", "contain", 3, "src"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductComponent_ngx_spinner_1_Template, 3, 10, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProductComponent_section_2_Template, 49, 86, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProductComponent_footer_3_Template, 35, 49, "footer", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isBrowser());
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownItem],
  styles: ["apple-pay-button[_ngcontent-%COMP%] {\n    --apple-pay-button-width: 140px;\n    --apple-pay-button-height: 30px;\n    --apple-pay-button-border-radius: 5px;\n    --apple-pay-button-padding: 5px 0px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLG1DQUFtQztFQUNyQyIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHBsZS1wYXktYnV0dG9uIHtcbiAgICAtLWFwcGxlLXBheS1idXR0b24td2lkdGg6IDE0MHB4O1xuICAgIC0tYXBwbGUtcGF5LWJ1dHRvbi1oZWlnaHQ6IDMwcHg7XG4gICAgLS1hcHBsZS1wYXktYnV0dG9uLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWFwcGxlLXBheS1idXR0b24tcGFkZGluZzogNXB4IDBweDtcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 11589:
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component */ 7695);
/* harmony import */ var _model_viewer_model_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model-viewer/model-viewer.component */ 5142);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);















const routes = [
    {
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent,
    },
];
class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProductModule, bootstrap: [_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent] });
ProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_0__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent,
        _model_viewer_model_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ModelViewerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_product_product_module_ts.js.map