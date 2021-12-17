import { Component, OnInit, Inject, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Order } from '../models/order.model';
import { Globals } from '../globals';
import { Country } from '../models/shipping-country.model';
import { Product } from '../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Row } from '../models/row.model';
import { AppComponent } from '../app.component';
import { Dict, LoadService } from '../services/load.service';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { Banner } from '../models/banner.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';

@Component({
  selector: 'app-layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css']
})
export class LayoutBuilderComponent implements OnInit, OnDestroy {

  rootComponent?: AppComponent
  admin?: AdminViewComponent
  loaded = false
  separatorKeysCodes: number[] = [ENTER, COMMA];


  editingBlock?: number

  storeInfo(){
    return Globals.storeInfo
  }

  layoutForm = this.fb.group({
    header: [null],
    rows: [[]],
  });

  rowForm = this.fb.group({
    title: [null],
    imgs: [[]],
    type: [null],
    grid: [null]
  });

  title = 'LAUNCHING LAYOUT BUILDER'

  prods: Array<string> = []


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    if (value) {
      this.prods.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.productCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.prods.indexOf(fruit);

    if (index >= 0) {
      this.prods.splice(index, 1);
    }
  }

  productName(id: any){
    if (id === '1'){
      return 'FEATURED PRODUCTS'
    }
    else if (id === '0'){
      return 'NEWEST PRODUCTS'
    }
    return this.admin?.storeProducts?.find(product => { return product.productID == id})?.name
  }

  allSelected(){


    return ((this.prods.find(j => { return j == '1' || j == '0'})))
  }


  selected(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value == '0' || event.option.value == '1'){
      this.prods = []
    }
    this.prods.push(event.option.value);

    this.productInput!.nativeElement.value = '';

    this.productCtrl.setValue(null);
  }

  private _filter(value: string): Product[] {
    const filterValue = ((value as string) ?? '').toLowerCase();

    return (this.admin!.storeProducts ?? []).filter(product => product.name?.toLowerCase().includes(filterValue));
  }

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LayoutBuilderComponent>,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private loadService: LoadService
  ) { 
    this.admin = data.admin
    this.rootComponent = data.rootComponent


    this.spinner.show('loader')

    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        this.grid.push({
          name: String(i) + 'x' + String(j),
          row: i,
          col: j
        })
      }
    }
    this.filteredProducts = this.productCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : (this.admin?.storeProducts ?? []).slice())),
    );
  }


  
  selectable = true;
  removable = true;
  productCtrl = new FormControl();
  filteredProducts: Observable<Product[]>;
  @ViewChild('productInput') productInput?: ElementRef<HTMLInputElement>;

  types = [
    {
      name: 'Image Block',
      code: 1
    },
    {
      name: 'Product Block',
      code: 0
    }
  ]

  images = new Array<{
    isActive: boolean,
    img: string
  }>()

  grid: Array<{
    name: string,
    row: number,
    col: number
  }> = [

  ]


  matchingType(type: number){
    return this.types.find(t => { return t.code == type})
  }

  ngOnDestroy(): void {
    this.interval = undefined
  }

  ngOnInit(): void {
    this.layoutForm.controls.rows.setValue(this.storeInfo().homeRows ?? [])
    this.layoutForm.controls.header.setValue(this.storeInfo().homeLinkTop ??this.storeInfo().themeLink)

    setTimeout(() => {
      this.loaded = true
      this.spinner.hide('loader') 
    }, 500);
    if (this.storeInfo()?.banners.length > 0){
      this.setInterval()
    }
  }

  removeRows(index: number){
    (this.layoutForm.controls.rows.value ?? [])?.splice(index,1)
  }

  async getBase64ImageFromUrl(imageUrl: string) {

    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', imageUrl, true);
      xhr.responseType = 'arraybuffer';

      xhr.onerror = function(e) { alert('error'); };
      
      xhr.onload = function(e) {
        if (this.status == 200) {
      
          var uInt8Array = new Uint8Array(this.response);
          var i = uInt8Array.length;
          var biStr = new Array(i);
          while (i--) {
            biStr[i] = String.fromCharCode(uInt8Array[i]);
          }
          var data = biStr.join('');
          var base64 = window.btoa(data);
      
          xhr.onerror = function(e) { reject(e); };
      
          resolve('data:image/png;base64,' + base64)
        }
      };
      xhr.send();
    })
 }

  async edit(index: number){
    this.editingBlock = index

    let matchingRow = (this.layoutForm.controls.rows.value as Array<Row> ?? [])[index]

    this.rowForm.controls.title.setValue(matchingRow.text ?? '')

    // this.rowForm.controls.imgs.setValue(matchingRow.text ?? '')

    if ((matchingRow.products ?? []).length > 0){
      this.prods = matchingRow.products ?? []
    }

    if (matchingRow.smart_products != undefined){
      this.prods.push(String(matchingRow.smart_products))
    }

    this.rowForm.controls.type.setValue(matchingRow.type ?? 0)

    const promises = (matchingRow.imgs ?? []).map(async image => {
      let img = {
        isActive: true,
        img: image.toString()
      }
      this.images.push(
        img
      )
      var i = await this.getBase64ImageFromUrl(image.toString()) as any
      img.img = i
    })
    await Promise.all(promises)

    let row = matchingRow.grid_row ?? 1
    let count = Math.ceil((this.images ?? []).length / row)

    if (count == 0){
      count = Math.ceil((this.products(Number((this.prods as Array<string>)[0]), ((this.prods as Array<string>)) ?? []) ?? []).length / row)
    }

    if (count == 0){
      count = 1
    }

    
    let name = String(row) + 'x' + String(count)

    console.log(name)
    this.rowForm.controls.grid.setValue(name)

    if (matchingRow.type == 1){
      let matchGrid = this.grid.find(g => g.name == name)

      let diff = ((matchGrid?.row ?? 1) * (matchGrid?.col ?? 2))-this.images.length
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

  height(){
    let matchGrid = this.grid.find(g => g.name == this.rowForm.controls.grid.value ?? '1x2')

    return (document.getElementById('label')?.offsetHeight ?? 0) / ((matchGrid?.row ?? 1) * (matchGrid?.col ?? 2))
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

      modalRef.componentInstance.width = 2560
      modalRef.componentInstance.height = 2560

      let sub = modalRef.dismissed.subscribe((img: string) => {
        sub.unsubscribe()
        if (img != '0'){
          image.img = img
          image.isActive = true
        }
      })
    
  }

  fileChangeBannerEvent(event: any): void {
    const modalRef = this.modalService.open(CropperComponent, {size : "lg"});
    modalRef.componentInstance.imageChangedEvent = event

      modalRef.componentInstance.width = 2560
      modalRef.componentInstance.height = 1140

      let sub = modalRef.dismissed.subscribe((img: string) => {
        sub.unsubscribe()
        if (img != '0'){
          this.layoutForm.controls.header.setValue(img)
        }
      })
  }

  canCancel(){
    return this.images.filter(img => { return img.isActive}).length > 1
  }

  changed(event: any){

    let type = (this.rowForm.controls.type.value) ?? 1
    

    if (type == 1){
      let matchGrid = this.grid.find(g => g.name == event.value)

      let newSize = (matchGrid?.row ?? 1) * (matchGrid?.col ?? 2)

      console.log(newSize)

      if (newSize > this.images.length){
        for (let i = 0; i < newSize; i++) {
          if (!this.images[i]){
            this.images.push(
              {
                isActive: false,
                img: ''
              }
            )
          }
        }
      }
      else if (newSize < this.images.length){
        this.images = this.images.slice(0, newSize)
      }
    }
  }
  
  finishedEditing(){
    let name = this.rowForm.controls.title.value as string ?? ''
    let type = this.rowForm.controls.type.value as number ?? 0

    let imgs = (this.images ?? []).map(i => i.img).filter(i => i.trim() != '')
    let products = this.prods ?? []

    let grid = this.rowForm.controls.grid.value as string ?? '1x2'

    let matchGrid = this.grid.find(g => g.name == grid)?.row
    
    let row = new Row(name, Object.assign([], products), undefined, type, Object.assign([], imgs), matchGrid)

    if (products.find(i => i == '0') || products.find(i => i == '1')){
      row.products = []
      row.smart_products = parseInt(products[0])
    }

    let rows = this.layoutForm.controls.rows.value as Array<Row> ?? []

    console.log(row)

    if (this.editingBlock){
      rows[this.editingBlock] = row
    }

    console.log(row)

    this.layoutForm.controls.rows.setValue(rows)

    this.rowForm.reset()
    this.prods = []
    this.images = []
    this.editingBlock = undefined
  }

  activeRow(index: number){
    if (!this.editingBlock && index != this.editingBlock) return undefined

    let name = this.rowForm.controls.title.value as string ?? ''
    let type = this.rowForm.controls.type.value as number ?? 0

    let imgs = (this.images ?? []).map(i => i.img).filter(i => i.trim() != '')
    let products = this.prods ?? []

    let grid = this.rowForm.controls.grid.value as string ?? '1x2'

    let matchGrid = this.grid.find(g => g.name == grid)?.row

    let row = new Row(name, Object.assign([], products), undefined, type, Object.assign([], imgs), matchGrid)

    if (products.find(i => i == '0') || products.find(i => i == '1')){
      row.products = []
      row.smart_products = parseInt(products[0])
    }

    return row
  }

  addBlock(){
    let rows = this.layoutForm.controls.rows.value as Array<Row> ?? []
    rows.push(new Row('', [], undefined, 0, [], 2))
    this.layoutForm.controls.rows.setValue(rows)
    this.edit(rows.length - 1)
  }

  selectedIndicator(){
    
    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    var indicator: Dict<string> = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }

  close(){
    let rowInfo = this.layoutForm.controls.rows.value as Array<Row> ?? []
    let header = this.layoutForm.controls.header.value as string ?? ''

    this.spinner.show('loader')
    this.title = 'SAVING LAYOUT'
    this.loadService.addLayout(rowInfo, header, success => {
      this.spinner.hide('loader')
      this.title = 'LAUNCHING LAYOUT BUILDER'

      if (success){
        this.dialogRef.close(rowInfo)
      } 
      else{
        this.dialogRef.close('0')
      }
    }, Globals.storeInfo.uid)
  }


  drop(event: any, isImage = false) {
    if (isImage){
      moveItemInArray(this.images, event.previousIndex, event.currentIndex);
      return
    }
    let arr = this.layoutForm.controls.rows.value
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.layoutForm.controls.rows.setValue(arr)
  }

  formatPrice(price: number, short = false, order?: Order){
    var priceAsString = new String(Number((price * ((Globals.selectedCurrency?.rate ?? 1))).toFixed(2)).toLocaleString('en'))
    if (!short){
      priceAsString = new String(Number((price * ((Globals.selectedCurrency?.rate ?? 1))).toFixed(2)))
    }
    let index = priceAsString.indexOf(".")
    
    switch (index){
      case priceAsString.length - 1:
          priceAsString += "00"
          break
      case -1:
          priceAsString += ".00"
          break
      case priceAsString.length - 2:
          priceAsString += "0"
          break
      default:
          break
    }
    return this.getCurrencyForCountry((Globals.selectedCurrency?.name) != "US", Globals.selectedCurrency) + priceAsString
}

autoCoupon(product: Product){
  var autoCoupon = this.storeInfo().coupons?.filter(coupon => { return coupon.products.includes(product.productID) && coupon.auto}).sort(function(a, b){
    if(a.amt < b.amt) { return 1; }
    if(a.amt > b.amt) { return -1; }
    return 0;
  })[0]
  return autoCoupon
}

mainPrice(product: Product){
  
  let coupon = this.autoCoupon(product)
  if (coupon){
    if (coupon.style == 0){
      return ((product.price ?? 0) / 100) - (((product.price ?? 0) / 100) * coupon.amt)
    }
    else if (coupon.style == 1){
      return ((product.price ?? 0) / 100) - ((coupon.amt ?? 0) * 100)
    }
  }
  return (product.price ?? 0) / 100
}
  
getCurrencyForCountry(shouldShowName: boolean, country?: Country){

  var returnItem = country?.currency_symbol ?? "$"
  if (shouldShowName) returnItem = (country?.name ?? '') + " " + returnItem

  return returnItem
}

fontSize(row: Row){
  if (this.rootComponent?.isMobile() || (row.grid_row ?? 1) >= 2){
    return 'inherit'
  }
  return (0.5 / (row.grid_row ?? 1)) * 100
}

titleFontSize(row: Row){
  if (this.rootComponent?.isMobile() || (row.grid_row ?? 1) >= 2){
    return 'inherit'
  }
  return (0.3 / (row.grid_row ?? 1)) * 100
}

products(smartProducts?: number, products?: Array<string>){
  if (smartProducts !== undefined){

    if (smartProducts == 0){
      return this.newArrivalProducts()
    }
    else if (smartProducts == 1){
      return this.featuredProducts()
    }
  }
  var prod = Array<Product>()
  products?.forEach(p => { 
    let pro = this.admin?.storeProducts?.find(pr => { return pr.productID == p})
    if (pro){
      prod.push(pro)
    }
  })
  return prod
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

@ViewChild('carousel', {read: DragScrollComponent}) ds?: DragScrollComponent;

  moveLeft() {
    this.ds!.moveLeft();
  }

  moveRight() {
    if (this.ds?.currIndex == (this.storeInfo().banners?.length ?? 0) - 1){
      this.ds?.moveTo(0);
    }
    else{
      this.ds?.moveRight();
    }
  }

  didMove() {
    // this.selectedColor = this.selectedTemplate?.colors[this.ds?.currIndex ?? 0]
  }

  interval: any

  setInterval(){
    if (this.interval) { return }
    if (Globals.storeInfo.bannerStyle == 0){
      this.interval = setInterval(()=>{
        this.moveRight()
      }, 3000);
    }
    else{
      this.initScroll()
    }
  }

  initScroll(){
    this.interval = 0
    let outer = document.querySelector("#outer") as HTMLElement;

    if (outer){
      let content = outer.querySelector('#content') as HTMLElement

      this.repeatContent(content, outer.offsetWidth);
  
      let el = outer.querySelector('#loop');
      if (el){
        el.innerHTML = el.innerHTML + el.innerHTML;
      }
    }
  }


repeatContent(el: HTMLElement, till: number) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop
    
    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}

  arrLength(){
    if (this.storeInfo().banners.length == 0){
      return []
    }
  
    return Array(12 / this.storeInfo().banners.length).fill(0)
  }

bannerTheme(banner?: Banner){
    
  if (!banner){
    banner = this.storeInfo().banners[this.ds?.currIndex ?? 0]
  }


  let co = banner.color
  let bco = banner.bg_color
  let text = banner.text


  let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

  let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

  var theme: Dict<string> = {
    "text": text,
    "color": color,
    "bg_color": bg_color
  }
  return theme
}

newArrivalProducts(){
  return this.admin?.storeProducts?.sort(function(a, b){
    if(a.timestamp > b.timestamp) { return -1; }
    if(a.timestamp < b.timestamp) { return 1; }
    return 0;
  }).slice(0, 4);
}

featuredProducts(){

  return this.admin?.storeProducts?.sort(function(a, b){
    if(a.likes > b.likes) { return -1; }
    if(a.likes < b.likes) { return 1; }
    return 0;
  }).slice(0, 4);
}


}
