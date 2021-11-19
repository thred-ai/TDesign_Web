import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Template } from '../models/template.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Color } from '../models/color.model';
import { CropperComponent } from '../cropper/cropper.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from '../globals';
import { Dict, LoadService } from '../services/load.service';
import * as html2canvas from 'htmlscreenshots15'
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../models/product.model';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { Inventory } from '../models/inventory.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  mode = "create"

  product?: Product
  inventory: Array<Inventory> = []


  myInnerHeight(){
    let height = window.innerHeight
    let width = window.innerWidth

    if (width < height){
      return width * 0.98
    }
    else{
      if (this.step == 0){
        return height * 0.70
      }
      return height * 0.70
    }
  }


  

  templates?: Array<Template>
  selectedTemplate?: Template

  frontImg?: any
  linkImg?: any
  backImg?: any

  selectedColor?: Color
  selectedSide?: number = 0
  step?: number = 0

  openCrop = false

  storeInfo(){return Globals.storeInfo}

  

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}



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



  async takeSnap(){

    if (this.frontImg == undefined && this.backImg == undefined){
      return
    }
    this.spinner.show("designSpinner")

    
    this.selectedSide = 0
    this.cdr.detectChanges()


    setTimeout(() => {
      
      
      let element = document.querySelector("#capture") as HTMLElement
  
      html2canvas.default(element).then(async (canvas) => {
        this.linkImg = canvas.toDataURL('image/jpeg', 0.8)
        this.hideCanvas = true
        if (this.selectedColor?.imgBack){
          this.selectedSide = 1
          this.cdr.detectChanges()
          setTimeout(() => {
            html2canvas.default(element).then(async (canvas2) => {
              this.finishedDesigning(canvas2.toDataURL('image/jpeg', 0.8))
            })
          }, 500)
        }
        else{
          this.finishedDesigning(undefined)
        }
      })
    }, 500);


  }

  hideCanvas = false

  async finishedDesigning(back_link_img?: string){
    var amt = this.selectedTemplate!.minPrice / 100
        if (this.inventory.find(inv => { return inv.code == this.selectedTemplate?.productCode && inv.amount > 0})){
          amt = this.selectedTemplate!.bulkSuggestPrice / 100
        }
        if (this.backImg && this.frontImg){
          amt += this.selectedTemplate!.extraCost / 100
        }
        // this.designForm.controls.price.setValue(amt)

      var displaySide = "front"
      var sides = new Array<string>()


      var images: Array<Dict<any>> = [
        {
          img: this.linkImg,
          type: "link_"
        },
      ]

      if (back_link_img){
        images.push({
          img: back_link_img,
          type: "link_2"
        })
      }
  
      if (this.frontImg){
        sides.push("Front")
        images.push({
          img: this.frontImg,
          type: ""
        })
      }
      else{
        displaySide = "back"
      }
  
      if (this.backImg){
        sides.push("Back")
        images.push({
          img: this.backImg,
          type: "BACK_"
        })
      }
  
      if (sides.length == 0){
        sides.push("Front")
        images.push({
          img: this.frontImg,
          type: ""
        })
      }

        let mappedData = {
          name: 'DRAFT',
          price: amt * 100 ?? 2000,
          description: "",
          productType: this.selectedTemplate?.productCode ?? "ATC1000",
          displaySide: displaySide,
          templateColor: this.selectedColor?.code ?? "white",
          sides: sides,
          images: images
        }
    
        let product = await this.loadService.createProduct(mappedData)
        this.hideCanvas = false

        this.spinner.hide("designSpinner")
        
        var data = {
          linkImg: this.linkImg,
          back_linkImg: back_link_img,
          frontImg: this.frontImg,
          backImg: this.backImg,
          selectedTemplate: this.selectedTemplate,
          selectedColor: this.selectedColor,
          suggested_price: amt,
          product: product
        }
        this.activeModal.close(data)
  }

  
  

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

  sanitizer?: DomSanitizer

  @ViewChild('carousel', {read: DragScrollComponent}) ds?: DragScrollComponent;
  @ViewChild('carousel2', {read: DragScrollComponent}) ds2?: DragScrollComponent;

  @ViewChild('productTemplates', {read: DragScrollComponent}) dsp?: DragScrollComponent;

  shouldShowCanvas(){
    if (this.selectedSide == 0){
      if (this.frontImg == undefined){
        return true
      }
      return false
    }
    if (this.backImg == undefined){
      return true
    }
    return false
  }

  minimumPrice(){
    return (this.selectedTemplate?.minPrice ?? 0) / 100
  }

  selectedImage(){
    console.log(this.selectedSide)
    if (this.selectedSide == 0){
      return this.frontImg
    }
    return this.backImg
  }

  moveLeft() {
    if (this.ds?.currIndex != 0){
      this.ds?.moveLeft();
    }
  }

  moveRight() {
    if (this.ds?.currIndex != (this.selectedTemplate?.colors.length ?? 0) - 1){
      this.ds?.moveRight();
    }
  }

  didMove() {
    this.selectedColor = this.selectedTemplate?.colors[this.ds?.currIndex ?? 0]
  }


  getTypeImages(template: Template) {

    var len = template.colors.filter(obj => {
      return obj.code == "black"
    })
    var img: any
    if (len.length == 0){
      img = template.colors.filter(obj => {
        return obj.code == "white"
      })[0].img
    }
    else{
      img = len[0].img
    }
    return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img)
  }

  sideName(){
    var side = this.selectedSide
    if (side == undefined){
      side = 0
    }
    return ("Click To Add " + this.selectedTemplate?.supportedSides[side].name + " design").toUpperCase()
  }

  cancel(){
    if (this.frontImg == undefined && this.backImg == undefined || this.mode == 'edit'){
      this.activeModal.close()
      return
    }
    this.openPopup()
  }

  openPopup() {
    
    if (this.linkImg == undefined){
      let element = document.querySelector("#capture") as HTMLElement
      html2canvas.default(element).then(async (canvas) => {
        const modalRef = this.modalService.open(PopupDialogComponent, {size : "sm", centered: true});

        let img = canvas.toDataURL()
        modalRef.componentInstance.yesBtn = "Yes"
        modalRef.componentInstance.noBtn = "No"
        modalRef.componentInstance.message = "You will lose your product."
        modalRef.componentInstance.title = "ARE YOU SURE?"
        modalRef.componentInstance.img = img

        let sub = modalRef.dismissed.subscribe((resp: any) => {
          sub.unsubscribe()
          if (resp.Success){
        
            this.activeModal.close()
          }
        })
      })
    }
    else{
      const modalRef = this.modalService.open(PopupDialogComponent, {size : "sm", centered: true});
      modalRef.componentInstance.yesBtn = "Yes"
      modalRef.componentInstance.noBtn = "No"
      modalRef.componentInstance.message = "You will lose your product."
      modalRef.componentInstance.title = "ARE YOU SURE?"
      modalRef.componentInstance.img = this.linkImg

      let sub = modalRef.dismissed.subscribe((resp: any) => {
        sub.unsubscribe()
        if (resp.Success){
      
          this.activeModal.close()
        }
      })
    }
  }

  fileChangeEvent(event: any, type = this.selectedSide ?? 0): void {


    this.openCrop = true

    const modalRef = this.modalService.open(CropperComponent, {size : "md"});
    
    modalRef.componentInstance.imageChangedEvent = event



    var width = 1125
    var height = 1742

    if (this.selectedTemplate?.supportedSides[type].useReverseAspect){
      width = 1742
      height = 1125
    }

    modalRef.componentInstance.ratio = this.selectedTemplate?.supportedSides[type].reversedAspectRatio()

    modalRef.componentInstance.width = width
    modalRef.componentInstance.height = height

    let sub = modalRef.dismissed.subscribe((img: string) => {
      sub.unsubscribe()
      this.openCrop = false
      console.log(img)
      if (img != '0'){
        event.srcElement.value = ""
        event.target.value = ""
        if (type == 0){
          this.frontImg = img
        }
        else{
          this.backImg = img
        }
      }
      this.cdr.detectChanges()
    })
  }

  getColorSide(side?: number, color?: Color) {

    if (side == undefined){
      side = this.selectedSide
    }
    if (color == undefined){
      color = this.selectedColor
    }

    var img = color!.img

    if (side == 1){
      img = color!.imgBack
    }
 
    return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img)
  }


  getProductImages(type: string) {

    if (type == "prev"){
      if (this.ds?.currIndex == 0){
        return ''
      }
      return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) - 1].img)
    }
    if (this.ds?.currIndex == (this.selectedTemplate?.colors.length ?? 1) - 1){
      return ''
    }
    return this.sanitizer!.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) + 1].img)
  }

  getProductColor(type: string){
    if (type == "prev"){
      if (this.ds?.currIndex == 0){
        return ''
      }
      return this.getColor(this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) - 1]!)
    }

    if (this.ds?.currIndex == (this.selectedTemplate?.colors.length ?? 1) - 1){
      return ''
    }
    return this.getColor(this.selectedTemplate?.colors[(this.ds?.currIndex ?? 1) + 1]!)
  }

  nextStep(){
    this.takeSnap()
    
  }

  moveColors(index: number) {
    this.ds?.moveTo(index);
  }

  moveTo(index: number) {
    this.dsp?.moveTo(index);
  }

  selectSide(side: number){
    this.selectedSide = side
  }

  selectTemplate(template: Template){

    this.selectedTemplate = template
    this.selectedColor = template.colors[0]
    this.selectedSide = 0

    let index = this.templates?.indexOf(template) ?? 0
    this.moveTo(index)
    this.moveColors(0)

  }

  getColor(color: Color){
    let r = color.rgb[0] * 255
    let g = color.rgb[1] * 255
    let b = color.rgb[2] * 255


    return "rgb(" + r + "," + g + "," + b + ")" 
  }


  templateNum(){
    if (this.selectedTemplate){
      return this.templates?.indexOf(this.selectedTemplate)
    }
    return 0
  }



  constructor(
    sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private loadService: LoadService,
    public activeModal: MatDialogRef<DesignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 

    this.templates = data.templates ?? []
    this.inventory = data.inventory ?? []
    this.sanitizer = sanitizer
  }

  ngOnInit(): void {
    

    this.loadTemplate()


  }

  calculateHeight(){
    return this.calculateWidth() * this.selectedTemplate!.supportedSides[this.selectedSide ?? 0].regularAspectRatio()
  }

  calculateWidth(){
    let frame = document.getElementById("frame")?.getBoundingClientRect()
    let width = (frame?.width ?? 0) + 10
    return width * (this.selectedTemplate!.supportedSides[this.selectedSide ?? 0].widthMultiplier ?? 0)
  }

  calculateCenterY(){
    let frame = document.getElementById("frame")?.getBoundingClientRect()
    let width = (frame?.width ?? 0)
    let back = document.getElementById("back")?.getBoundingClientRect()
    let height = (back?.height ?? 0)

    return ((height / 2) + (this.selectedTemplate!.supportedSides[this.selectedSide ?? 0].centerYConst * (width / 375))) - (this.calculateHeight()) / 2
  }

  calculateColor(color: Color){
    if (color.code == "white"){
      return {
        text_color: "secondary",
        border_color: "#808080"
      }
    }
    return {
      text_color: "light",
      border_color: "#ffffff"
    }
  }

  loadTemplate() {
    
    this.selectedTemplate = this.templates![0]
    this.selectedColor = this.selectedTemplate!.colors[0]
    this.cdr.detectChanges()
    // var unsafeImageUrl = this.sanitizer.

    // this.base64Data = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
  }

}

