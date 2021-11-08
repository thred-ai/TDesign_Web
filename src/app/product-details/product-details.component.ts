import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Validators, FormBuilder } from '@angular/forms';
import { Template } from '../models/template.model';
import { Inventory } from '../models/inventory.model';
import { Dict, LoadService } from '../services/load.service';
import { Color } from '../models/color.model';
import { Product } from '../models/product.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from '../globals';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { CropperComponent } from '../cropper/cropper.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Observer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ModelViewerComponent } from '../model-viewer/model-viewer.component';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  customCurrencyMaskConfig = {
    align: "left",
    allowNegative: false,
    allowZero: true,
    decimal: ".",
    precision: 2,
    prefix: "$ ",
    suffix: "",
    thousands: ",",
    min: 0,
    inputMode: CurrencyMaskInputMode.NATURAL
  };

  @Input() data?: any;
  @Output() finished = new EventEmitter<boolean>();

  selectedTemplate?: Template
  selectedColor?: Color
  product?: Product
  inventory: Array<Inventory> = []
  frontImg?: string
  backImg?: string
  mode = 'create'
  images = new Array<{
    isActive: boolean,
    img: string
  }>()


  designForm = this.fb.group({
    name: [null, Validators.required],
    description: null,
    price: [null, [Validators.required]],
  });
  sanitizer: DomSanitizer;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }
  
  constructor(
    private fb: FormBuilder,
    private loadService: LoadService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    sanitizer: DomSanitizer,
  ) { 
    this.sanitizer = sanitizer
  }

  isMobile(){
    return window.screen.width < window.screen.height
  }

  height(){
    return (document.getElementById('label')?.offsetWidth ?? 0) / 5
  }

  async ngOnInit() {
    this.selectedColor = this.data.selectedColor
    this.selectedTemplate = this.data.selectedTemplate
    this.frontImg = this.data.frontImg
    this.backImg = this.data.backImg
    this.mode = this.data.mode

    this.designForm.controls.price.setValue(this.data.suggested_price)
    this.product = this.data.product

    if (this.mode == 'create'){
      this.images = [
        {
          isActive: true,
          img: this.data.linkImg
        },
        {
          isActive: false,
          img: ''
        },
        {
          isActive: false,
          img: ''
        },
        {
          isActive: false,
          img: ''
        },
        {
          isActive: false,
          img: ''
        }
      ]
      if (this.data.back_linkImg){
        this.images[1] = {
          isActive: true,
          img: this.data.back_linkImg
        }
      }
      console.log(this.images)
    }
    else{
      console.log(this.images)

      if (this.product){
        this.designForm.controls.name.setValue(this.product.name ?? '')
        this.designForm.controls.description.setValue(this.product.description ?? '')
        const promises = this.product.images.map(async image => {
          let img = {
            isActive: true,
            img: image.img.toString()
          }
          this.images.push(
            img
          )
          var i = await this.getBase64ImageFromUrl(image.img.toString()) as any
          img.img = i
        })
        await Promise.all(promises)

        let diff = 5-this.images.length
        if (diff>0){
          for (let i = 0; i < diff; i++) {
            this.images.push(
              {
                isActive: false,
                img: ''
              }
            )
          }
        }
      }
    }
    console.log(this.images)

  }


  removeImg(img: {
    isActive: boolean,
    img: string
  }){
    img.img = ''
    img.isActive = false

    let index = this.images.indexOf(img)

    moveItemInArray(this.images, index, this.images.length-1);

  }

  fileChangeEvent(event: any, image: {
    isActive: boolean,
    img: string
  }): void {
    const modalRef = this.modalService.open(CropperComponent, {size : "lg"});
    modalRef.componentInstance.imageChangedEvent = event



      modalRef.componentInstance.ratio = 1
      modalRef.componentInstance.width = 1000
      modalRef.componentInstance.height = 1000

      let sub = modalRef.dismissed.subscribe((img: string) => {
        sub.unsubscribe()
        if (img != '0'){
          image.img = img
          image.isActive = true
        }
      })
    
  }

  async createDesign(){

    let nameField = this.designForm.controls.name
    let priceField = this.designForm.controls.price
    let descField = this.designForm.controls.description

    var amt = this.selectedTemplate!.minPrice


    if (this.inventory.find(inv => { return inv.code == this.selectedTemplate?.productCode && inv.amount > 0})){
      amt = 0
    }

    if (this.frontImg && this.backImg){
      amt += this.selectedTemplate!.extraCost
    }

    if (nameField.invalid){

      return
    }
    else if (priceField.invalid || (priceField.value * 100) < amt){

      return
    }
    else if (descField.invalid){

      return
    }
    else if (this.images.filter(img => { return img.isActive}).length == 0){
      return
    }

    this.spinner.show('productSpinner')

    let imgs = this.images.filter(img => {
      return img.isActive
    })

    console.log(imgs)
    

    let name = nameField.value as string
    let price = (priceField.value as number) * 100
    let desc = descField.value as string ?? ""



    var images: Array<Dict<any>> = [
      {
        img: imgs[0].img,
        type: "link_"
      }
    ]

    imgs.forEach((image, index) => {
      if (index == 0)return
      images.push({
        img: image.img,
        type: "link" + (index+1) + "_"
      })
    })

    let mappedData = {
      name: name ?? "Post",
      price: price ?? 2000,
      description: desc ?? "",
      available: true,
      productID: this.product?.productID ?? "",
      images: images
    }

    


    await this.loadService.updateProduct(mappedData, this.product)


  // this.modalService.dismissAll()

  
    this.spinner.hide("productSpinner")
    this.finished.emit(true)



  }

  openPopup(title: string, message: string, img: string, yesBtn = 'Yes', noBtn = 'No', callback: () => any) {

    const modalRef = this.modalService.open(PopupDialogComponent, {size : "sm", centered: true});
      modalRef.componentInstance.yesBtn = yesBtn
      modalRef.componentInstance.noBtn = noBtn
      modalRef.componentInstance.message = message
      modalRef.componentInstance.title = title
      modalRef.componentInstance.img = img

      let sub = modalRef.dismissed.subscribe((resp: any) => {
        sub.unsubscribe()
        if (resp.Success){
          callback()
        }
      })
  }

  cancelEdit(){
    this.openPopup('Are you sure?', 'You will lose unsaved changes', this.images.find(img => {return img.isActive})?.img ?? '', "Yes, I'm Done", 'Never Mind', () => {
      this.finished.emit(true)
    })
  }

  open() {
    if (this.has3D()){
      const modalRef = this.modalService.open(ModelViewerComponent, {size : "lg"});
      modalRef.componentInstance.data = {
        "template": this.selectedTemplate,
        "product": this.product,
        'isSc' : true
      };
    }
  }

  has3D(){
    return this.selectedTemplate?.has3D ?? false
  }

  canCancel(){
    return this.images.filter(img => { return img.isActive}).length > 1
  }

  async getBase64ImageFromUrl(imageUrl: string) {

    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', imageUrl, true);
      xhr.responseType = 'arraybuffer';

      xhr.onerror = function(e) { alert('error'); };
      
      xhr.onload = function(e) {
        if (this.status == 200) {
          console.log("2> " + xhr.response);
          //  console.log("2b> "+ xhr.responseText);
      
          var uInt8Array = new Uint8Array(this.response);
          var i = uInt8Array.length;
          var biStr = new Array(i);
          while (i--) {
            biStr[i] = String.fromCharCode(uInt8Array[i]);
          }
          var data = biStr.join('');
          var base64 = window.btoa(data);
      
          console.log("3> " + base64);
          
          xhr.onerror = function(e) { reject(e); };
      
          resolve('data:image/jpeg;base64,' + base64)
        }
      };
      xhr.send();
    })
 }
  

  storeInfo(){return Globals.storeInfo}

  selectedTheme(){
    
    let co = Globals.storeInfo?.colorStyle?.btn_color
    let bco = Globals.storeInfo?.colorStyle?.bg_color
    let name = Globals.storeInfo?.colorStyle?.name

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    var theme: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return theme
  }

  selectedIndicator(){

    

    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name
    
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    let indicator: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }

}
