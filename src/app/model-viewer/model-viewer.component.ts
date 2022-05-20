import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Template } from '../models/template.model';
import { Product } from '../models/product.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from '../globals';
import { isPlatformBrowser } from '@angular/common';
import { Dict } from '../services/load.service';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.css'],
})
export class ModelViewerComponent implements OnInit, AfterViewInit {
  myHtmlTemplate: any = '';

  data = {
    template: new Template(),
    product: new Product(),
    isSc: false,
  };

  titleBtn = 'INFO';

  template = new Template();
  product = new Product();
  showScInfo = true;

  constructor(
    public http: HttpClient,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    @Inject(PLATFORM_ID) private platformID: Object,
    private spinner: NgxSpinnerService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.template = this.data.template;
    this.product = this.data.product;
    this.titleBtn = this.data.isSc ? 'SNAPSHOTS' : 'INFO';
    this.showSpinner();

    this.openModel();
  }

  isMobile() {
    return window.screen.width < window.screen.height;
  }

  getModelUrl(type: string) {
    switch (type) {
      case 'ATC Hoodie':
        return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2Fhoodie_model.glb?alt=media';
      case 'MUG':
        return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2Fmug_model2.glb?alt=media';
      default:
        return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2Fshirt_model.glb?alt=media';
    }
  }

  getModelTextureUrl(type: string, templateColor: string) {
    switch (type) {
      case 'ATC Hoodie':
        return (
          'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FHoodies%2FTextures%2F' +
          templateColor +
          '.jpg?alt=media'
        );
      case 'MUG':
        return (
          'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FMugs%2FTextures%2F' +
          templateColor +
          '.jpg?alt=media'
        );
      default:
        return (
          'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Models%2FTShirts%2FTextures%2F' +
          templateColor +
          '.jpg?alt=media'
        );
    }
  }

  getSkyBoxUrl(type: string, skyBoxCode: string) {
    var productType = 'TShirts';

    switch (type) {
      case 'ATC Hoodie':
        productType = 'Hoodies';
        break;
      case 'MUG':
        productType = 'Mugs';
        break;
      default:
        productType = 'TShirts';
    }
    return (
      'https://storage.googleapis.com/clothingapp-ed125.appspot.com/Models/' +
      productType +
      '/Skyboxes/' +
      skyBoxCode +
      '.hdr'
    );
  }

  openBtn() {
    this.modalService.dismissAll('success');
  }

  isBrowser() {
    return isPlatformBrowser(this.platformID);
  }

  selectedIndicator() {
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    let indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  storeInfo() {
    return Globals.storeInfo;
  }

  selectedTheme() {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  isSpinning = false;

  showSpinner() {
    if (!this.isSpinning) {
      this.isSpinning = true;
      if (isPlatformBrowser(this.platformID)) {
        this.spinner.show('modelSpinner');
      }

      setTimeout(() => {
        if (isPlatformBrowser(this.platformID)) {
          this.hideSpinner();

          this.spinner.hide();
        }
      }, 2000);
    }
  }

  hideSpinner() {
    if (this.isSpinning) {
      this.isSpinning = false;
      // this.spinner.hide()
    }
  }

  public openModel() {
    var html: string = '';
    var skyBoxUrl = this.getSkyBoxUrl(this.product.productType, 'room');
    var modelTextureURL = this.getModelTextureUrl(
      this.product.productType,
      this.product.templateColor
    );
    var modelURL = this.getModelUrl(this.product.productType);

    let backURL = this.product.getUrl(true) ?? '';
    let url = this.product.getUrl(false) ?? '';

    let color = this.template.colors.find(
      (color) => color.code == this.product.templateColor
    );

    if (color) {
      var colors = [1, 1, 1, 1];

      color.rgb.forEach((e, index) => {
        colors[index] = e;
      });

      switch (this.template.productCode ?? 'ATC1000') {
        case 'ATC1000':
          html =
            "<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer></script></head><body><model-viewer camera-controls skybox-image='" +
            skyBoxUrl +
            "'environment-image='" +
            skyBoxUrl +
            "'alt='A 3D astronaut model depicted within a forest'src='" +
            modelURL +
            "'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (i === 0){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            modelTextureURL +
            "');}else if (i === 1){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            url +
            "');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);</script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'></script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";
          break;
        case 'ATC Hoodie':
          html =
            "<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer></script></head><body><model-viewer camera-controls skybox-image='" +
            skyBoxUrl +
            "'environment-image='" +
            skyBoxUrl +
            "'alt='A 3D astronaut model depicted within a forest'src='" +
            modelURL +
            "'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name === 'Left Cap' || materials[i].name === 'Right Cap' || materials[i].name == 'String Holes (Interior)'){materials[i].pbrMetallicRoughness.setBaseColorFactor([" +
            colors[0] +
            ', ' +
            colors[1] +
            ', ' +
            colors[2] +
            ', ' +
            colors[3] +
            "]);}else if (materials[i].name === 'String Holes'){materials[i].pbrMetallicRoughness.setBaseColorFactor([0.7,0.7,0.7,1]);}else if (materials[i].name === 'Draw Strings' || materials[i].name === 'Body' || materials[i].name == 'Front Canvas'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            modelTextureURL +
            "');}else if (materials[i].name === 'Front Image'){console.log(materials[i]);materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            url +
            "');}else if (materials[i].name === 'Back Image'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            backURL +
            "');}console.log(materials[i].name)}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);</script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'></script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";
          break;
        case 'MUG':
          html =
            "<!doctype html><html lang='en'><head></head><title>&lt;model-viewer&gt; template</title><meta charset='utf-8'><meta name='description' content='&lt;model-viewer&gt; template'><meta name='viewport' content='width=device-width, initial-scale=1'><script src='https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js' defer></script></head><body><model-viewer camera-controls skybox-image='" +
            skyBoxUrl +
            "'environment-image='" +
            skyBoxUrl +
            "'alt='A 3D astronaut model depicted within a forest'src='" +
            modelURL +
            "'></model-viewer><script type='module'>const onProgress = (event) => {if (event.detail.totalProgress === 1) {const modelViewerColor = document.querySelector('model-viewer');modelViewerColor.environmentImage = 'neutral';const materials = modelViewerColor.model.materials;for (let i = 0; i < materials.length; i++) {if (materials[i].name == 'DefaultMaterial.001'){materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('');materials[i].pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            modelTextureURL +
            "');}else if (materials[i].name == 'Design'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            url +
            "');}else if (materials[i].name == 'Design_Back'){let material = modelViewerColor.model.materials[i];material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI('" +
            backURL +
            "');}console.log(materials[i])}}};document.querySelector('model-viewer').addEventListener('progress', onProgress);</script><script type='module' src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'></script><style>:not(:defined) > * {display: none;}body {margin: 0;padding: 0;width: 100vw;height: 100vh;}model-viewer {width: 100%;height: 100%;background-color: #baf7fd;display: flex;justify-content: center;align-items: center;}.progress-bar {display: block;width: 33%;height: 10%;max-height: 2%;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%, -50%, 0);border-radius: 25px;box-shadow: 0px 3px 10px 3px #baf7fd, 0px 0px 5px 1px #baf7fd;border: 1px solid #baf7fd;}.progress-bar.hide {visibility: hidden;transition: visibility 0.3s;}.update-bar {background-color: #baf7fd;width: 0%;height: 100%;border-radius: 25px;float: left;transition: width 0.3s;}#ar-button {background-image: url(ar_icon.png);background-repeat: no-repeat;background-size: 20px 20px;background-position: 12px 50%;background-color: #baf7fd;position: absolute;left: 50%;transform: translateX(-50%);white-space: nowrap;bottom: 132px;padding: 0px 16px 0px 40px;font-family: Roboto Regular, Helvetica Neue, sans-serif;font-size: 14px;color:#baf7fd;height: 36px;line-height: 36px;border-radius: 18px;border: 1px solid #baf7fd;}#ar-button:active {background-color: #baf7fd;}#ar-button:focus {outline: none;}#ar-button:focus-visible {outline: 1px solid #baf7fd;}@keyframes circle {from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }}@keyframes elongate {from { transform: translateX(100px); }to   { transform: translateX(-100px); }}model-viewer > #ar-prompt {position: absolute;left: 50%;bottom: 175px;animation: elongate 2s infinite ease-in-out alternate;display: none;}model-viewer[ar-status='session-started'] > #ar-prompt {display: block;}model-viewer > #ar-prompt > img {animation: circle 4s linear infinite;}</style></body></html>";
          break;
        default:
          html = '';
          return;
      }
      this.myHtmlTemplate = this.sanitizer.bypassSecurityTrustHtml(html);
    }
  }
}
