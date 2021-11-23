import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { AppComponent } from '../app.component';
import { Globals } from '../globals';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';
import { NgxSpinnerService } from "ngx-spinner";
import { Country } from '../models/shipping-country.model';
import { Product } from '../models/product.model';
import { DesignComponent } from '../design/design.component';
import { ProductInCart } from '../models/product-in-cart.model';
import { SocialFormComponent } from '../social-form/social-form.component';
import { Inventory } from '../models/inventory.model';
import { Template } from '../models/template.model';
import { InventoryBuyComponent } from '../inventory-buy/inventory-buy.component';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { StoreSetupComponent } from '../store-setup/store-setup.component';
import { RoutingService } from '../services/routing.service';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { CouponInfoComponent } from '../coupon-info/coupon-info.component';
import { Coupon } from '../models/coupon.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(0)' })),
      state('rotated', style({ transform: 'rotateY(-180deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ])
  ]
})
export class AdminViewComponent implements OnInit, OnDestroy {
  // @ViewChild("chart") chart?: ChartComponent;

  

activeAffiliates = new Array<{
  affiliate: string,
  timestamp: Date
}>()


items: Array<Dict<any>> = []
miscItems: Array<Dict<any>> = []
signedIn = false
bankInfo?: any = ''
subInfo?: any = ''
canTrial?: boolean = true

invTitle = 'SELL MORE'


socials(){
  return Globals.socials
}

toolTip(logo: {
  name: string;
  img: string;
}){

  let same = (this.userForm.controls.socials.value as Array<any>)?.filter(social => { return social.name == logo.name})


  if (same && same.length !== 0){

    return same[0]
  }

  return {
    name: 'No ' + logo.name + ' URL set',
    link: "",
  }
}

couponHeader(coupon: Coupon){
  if (coupon.type == 'product'){
    return 'Applied to ' + coupon.products.length + ' product(s)'
  }
  else if (coupon.type == 'order_val'){
    return 'Order ≥ ' + this.formatPrice(coupon.threshold, true)
  }
  else if (coupon.type == 'order_qty'){
    return 'Order ≥ ' + coupon.threshold + " products"
  }
  return ''
}

matchingType(id: string){
  console.log(id)
  return Globals.types.find(type => { return type.id == id})
}


showLinkModal(){

  const modalRef = this.modalService.open(SocialFormComponent);

  modalRef.componentInstance.linkImg = '/assets/domain.png'
  modalRef.componentInstance.name = 'My Domain'
  modalRef.componentInstance.isDomain = true


  if (Globals.storeInfo.customURL){
    modalRef.componentInstance.socialForm.controls.link.setValue(Globals.storeInfo.customURL?.fullURL)
  }

  let sub = modalRef.dismissed.subscribe((domain: string) => {
    sub.unsubscribe()
    if (domain != '0'){
      if ((domain != Globals.storeInfo.customURL?.fullURL)){
        if (domain == undefined) {return}
        this.loadService.saveDomain(domain, success => {
          if (success){
            if (domain == ''){
              this.userForm.controls.custom_url.setValue(null)
              this.toast("Custom Domain Removed!")
              return
            }
            this.userForm.controls.custom_url.setValue(domain)
            this.toast("Custom Domain Saved!")
          } 
        }, Globals.storeInfo.uid)
      }
    }
  })
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
    return ((product.price ?? 0) / 100) - (((product.price ?? 0) / 100) * coupon.amt)
  }
  return (product.price ?? 0) / 100
}

showCouponModal(coupon?: Coupon){


  const modalRef = this.dialog.open(CouponInfoComponent, {
    width: '800px',
    data: {
      coupons: Globals.storeInfo.coupons, 
      editCoupon: coupon, 
      products: this.storeProducts?.filter(product => { return this.inventory?.filter(inv =>{ return inv.code == product.productType && inv.amount > 0}).length != 0})
    },
  });

  let sub = modalRef.afterClosed().subscribe(coupon => {
    console.log('The dialog was closed');
    sub.unsubscribe()
    if (coupon != '0'){
      if ((!Globals.storeInfo?.coupons?.find(c => { return c == coupon}))){
        if (coupon == undefined) {return}

        this.loadService.addDiscount(coupon, success => {
          if (success){
            this.toast("Coupon Saved!")
          } 
        }, Globals.storeInfo.uid)
      }
    }
  });
}

async deleteCoupon(coupon: Coupon, i: number){
  
  var color = ''
  if ((coupon?.amt ?? 0) <= 0.2){
    color = 'rgb(165, 101, 42)'
  }
  else if ((coupon?.amt ?? 0) > 0.2 && (coupon?.amt ?? 0) <= 0.5){
    color = 'silver'
  }
  else{
    color = 'gold'
  }

  this.openPopup("Are you sure?", "Your coupon '" + coupon.code +  "' will be removed forever.", 'MATICON:' + this.matchingType(coupon.type)?.icon + ':' + color, 'Yes, Remove', 'Never Mind', async () => {
    await this.loadService.removeDiscount(coupon, success => {
      this.toast("Coupon Removed")
    }, Globals.storeInfo.uid)
  })
}

domainNotSetUp(){
  if (Globals.storeInfo.customURL?.status == 1){
    return true
  }
  else if (Globals.storeInfo.customURL?.status == 2){
    return false
  }
  else{
    return undefined
  }
}

showSocialModal(logo: {
  name: string;
  img: string;
}){

  const modalRef = this.modalService.open(SocialFormComponent);

  let same = (this.userForm.controls.socials.value as Array<any>)?.filter(social => { return social.name == logo.name})
  var prefix = ""
  if (logo.name.toLowerCase() == "tiktok"){
    prefix = "@"
  }
  modalRef.componentInstance.socialForm.controls.link.setValue(logo.name.toLowerCase() + ".com/" + prefix)

  if (same && same.length !== 0){

    modalRef.componentInstance.socialForm.controls.link.setValue(same[0].link)
  }
  modalRef.componentInstance.linkImg = logo.img
  modalRef.componentInstance.name = logo.name

  let sub = modalRef.dismissed.subscribe((url: string) => {
    sub.unsubscribe()
    let array = (this.userForm.controls.socials.value as Array<{
      name: string,
      link: string,
    }>)
    if (url != '0' && url != '' && url != 'undefined'){

      let same = array?.filter(social => { return logo.name == social.name})

      if (!same || (same.length == 0)){
        if (array != undefined || array != null){
          array.push({
            name: logo.name,
            link: url
          })
        }
        else{
          array = [{
            name: logo.name,
            link: url
          }]
        }
        
      }
      else{
        array[array.indexOf(same[0])].link = url
      }
    }
    else if (url != '0'){
      array.forEach((element,index)=>{
        if(element.name == logo.name) array.splice(index,1);
     });
    }
    this.userForm.controls.socials.setValue(array)
  })

}


  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private rootComponent: AppComponent,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private _router: Router,
    private sanitizer: DomSanitizer,
    private clipboard: Clipboard,
    private routingService: RoutingService,
    private dialog: MatDialog,
  ) {
      Globals.userInfo = undefined
      Globals.selectedCurrency = undefined
      Globals.themes = undefined
      Globals.productsSold = undefined
      Globals.views = undefined
      Globals.dropCarts = undefined
      Globals.billingInfo = undefined

      // this.billingInfo().
  }
  ngOnDestroy(): void {
    this.loadService.adminComponent = undefined
  }

  getBillingAddressThird(){
    var address = this.billingInfo()?.street
    var unit = this.billingInfo()?.unit
    if (unit) address += ". " + unit
    return address
  }

  getBillingAddressFourth(){
    return this.billingInfo()?.city + ", " + this.billingInfo()?.admin_area + ". " + this.billingInfo()?.postal
  }


  getBillingAddressSecond(){
    var name = this.billingInfo()?.name
    var company = this.billingInfo()?.company
    if (company) name += " - " + company
    return name
  }

  state: string = 'default';

  organizeByMonth(set: Array<Dict<any>>, type: string){

    var months = new Array<{
      name: string,
      value: number
    }>()

    //SPLIT SALES INTO SEPERATE ARRAYS BY YEAR

    let sets = Array<Array<Dict<any>>>()

      set.forEach((data) => {
        let timestamp = data.timestamp as Date
        let year = timestamp?.getFullYear()
        var result = sets.find(obj => {
          var years = obj.find(obj2 => {
            return (obj2.timestamp as Date)?.getFullYear() == year
          })
          return years != undefined
        })
        if (result){
          sets[sets.indexOf(result)].push(data)
        }
        else{
          sets.push([data])
        }
      })

    Globals.months.forEach((month) => {      

      //IF MONTH AND YEAR ARE UNDEFINED FOR A GIVEN INTERVAL, PUT IN AN EMPTY FILLER VALUE OF 0

      sets.forEach(s => {
        var result = s.find(obj => {
          return Globals.months[obj.timestamp?.getMonth()] == month
        })

        if (!result){

          var time = s.find(obj => {
            return obj.timestamp != undefined
          })
          var d = new Date(time?.timestamp?.getFullYear(), Globals.months.indexOf(month), 1)
          if (type == "Products Sold"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Gross Revenue"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Net Profit"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Onboarded Users (Affiliate)"){
            set.push({affiliate: "", timestamp: d})
          }
          else if (type == "Affiliate Revenue"){
            set.push({affiliate: "", timestamp: d})
          }
          else if (type == "Store Views"){
            set.push({views: 0, timestamp: d})
          }
          else if (type == "Abandoned Carts"){
            set.push({dropCarts: 0, timestamp: d})
          }
        }
      })
    })

    //SORT SALES BY TIMESTAMP

    set.sort(function(a, b){
      if(a.timestamp! < b.timestamp!) { return -1; }
      if(a.timestamp! > b.timestamp!) { return 1; }
      return 0;
    })

    //REMOVE EMPTY MONTHS THAT ARE IN THE FUTURE

    set = set.filter(obj => {
      return new Date() >= obj.timestamp!
    })

    //APPEND TO FINAL SERIES ARRAY

    set.forEach((data) => {
      let month = Globals.months[data.timestamp?.getMonth()].substring(0,3) + " " + data.timestamp!.getFullYear()
      var result = months.find(obj => {
        return obj?.name === month
      })

      let value = 0

      if (type == "Products Sold"){
        value = data.quantity ?? 0
      }
      else if (type == "Gross Revenue"){
        value = data.product?.price ?? 0
      }
      else if (type == "Net Profit"){
        value = data.profit ?? 0
        if (isNaN(value)){
          value = 0
        }
      }
      else if (type == "Onboarded Users (Affiliate)"){
        if (data.affiliate != ""){
          value = 1
        }
      }
      else if (type == "Affiliate Revenue"){
        if (data.affiliate != ""){
          value = 37 / 2
        }
      }
      else if (type == "Store Views"){
        value = data.views
      }
      else if (type == "Abandoned Carts"){
        value = data.dropCarts
      }

      if (result){
        months[months.indexOf(result)].value += value ?? 0
      }
      else{
        months.push({
          name: month,
          value: value ?? 0
        })
      }
    })

    return months
  }

  formatPercent(val: string) {
    

    // var t = this as unknown as XAxisTicksComponent

    // let series = t.ticks as Array<string>


    // var result = series.filter(obj => {
    //   return obj === val
    // })[0]

    // if (series.indexOf(result) == 0 || series.indexOf(result) == series.length - 1){
    //   return val
    // }

    return ""
  } 

  charts(onlyAffiliates = false){
    if (onlyAffiliates){
      return this.items.filter(item => { return item.name == "Onboarded Users (Affiliate)" || item.name == "Affiliate Revenue"}).sort(function(a, b){
        if(a.index < b.index) { return -1; }
        if(a.index > b.index) { return 1; }
        return 0;
      })
    }
    if (Globals.productsSold == undefined || Globals.newCustomers == undefined || Globals.dropCarts == undefined){
      return []
    }
    let newItems = this.items.concat(this.miscItems)
    return newItems.filter(item => { return !((item.name == "Onboarded Users (Affiliate)" || item.name == "Affiliate Revenue") && this.activeAffiliates.length == 0)}).sort(function(a, b){
      if(a.index < b.index) { return -1; }
      if(a.index > b.index) { return 1; }
      return 0;
    })
  }


  addMiscCharts(name: string, data_set: Array<Dict<any>>){


    if (!(this.miscItems.some(e => e?.name === name))){
      let set = this.organizeByMonth(data_set, name)
  
      var index = 0
      if (name == "Store Views"){
        index = 0
      }
      else if (name == "Abandoned Carts"){
        index = 4
      }

      let item = {
        name: name,
        legend: true,
        showLabels: true,
        animations: true,
        xAxis: true,
        yAxis: true,
        index: index,
        showYAxisLabel:  true,
        showXAxisLabel: true,
        xAxisLabel: set[0]?.name + '  ➜  ' + "TODAY",
        yAxisLabel:  'Population',
        timeline: true,
        shouldDisplay: set.length != 0,
        customColors:[
          { 
            name: name,
            value: '#1ac6ff'
          }
        ],
        series: [
          {
            "name": name,
            "series": set
          }
        ]
      }
      this.miscItems.push(item)
    }
  }


  addChart(name: string, data_set: Array<ProductInCart>){


    if (!(this.items.some(e => e?.name === name))){
      let set = this.organizeByMonth(data_set, name)

  
      var index = 0

      if (name == "Products Sold"){
        index = 2
      }
      else if (name == "Gross Revenue"){
        index = 1
      }
      else if (name == "Net Profit"){
        index = 3
      }
      else if (name == "Onboarded Users (Affiliate)" || name == "Affiliate Revenue"){
        index = 4
      }
      else{
        index = 5
      }

      let item = {
        name: name,
        legend: true,
        showLabels: true,
        animations: true,
        xAxis: true,
        yAxis: true,
        index: index,
        showYAxisLabel:  true,
        showXAxisLabel: true,
        xAxisLabel: set[0]?.name + '  ➜  ' + "TODAY",
        yAxisLabel:  'Population',
        timeline: true,
        shouldDisplay: set.length != 0,
        customColors:[
          { 
            name: name,
            value: '#1ac6ff'
          }
        ],
        series: [
          {
            "name": name,
            "series": set
          }
        ]
      }
      this.items.push(item)
    }
  }

  loaders(){

    return Globals.loaders
  }



  storeInfo(){return Globals.storeInfo}

  userInfo(){return Globals.userInfo}


  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.templates}

  availableTemplates(){return Globals.availableTemplates}


  themes(){return Globals.themes}

  fonts(){return Globals.fonts}

  panels = [
    {
      Category: "DASHBOARD",
      Options: [
        {
          "Title": "ANALYTICS",
          "Icon": "trending_up",
          "Active": false
        },
        {
          "Title": "AFFILIATE",
          "Icon": "local_atm",
          "Active": false
        },
      ]
    },  
    {
      Category: "MANAGE",
      Options: [
        {
          "Title": "STORE",
          "Icon": "shopping_bag",
          "Active": false
        },
        {
          "Title": "PRODUCTS",
          "Icon": "brush",
          "Active": false
        },
        {
          "Title": "INVENTORY",
          "Icon": "local_shipping",
          "Active": false
        },
        {
          "Title": "PROFILE",
          "Icon": "person_outline",
          "Active": false
        },
        {
          "Title": "MARKETING",
          "Icon": "share",
          "Active": false
        },
        {
          "Title": "DISCOUNTS",
          "Icon": "local_offer",
          "Active": false
        },
      ]
    },
    {
      Category: "SETTINGS",
      Options: [
        {
          "Title": "BILLING",
          "Icon": "credit_card",
          "Active": false
        },
        {
          "Title": "PLAN",
          "Icon": "work",
          "Active": false
        },
        {
          "Title": "PAYMENTS",
          "Icon": "monetization_on",
          "Active": false
        },
        {
          "Title": "SECURITY",
          "Icon": "admin_panel_settings",
          "Active": false
        },
      ]
    },
    {
      Category: "OTHER",
      Options: [
        {
          "Title": "PRIVACY",
          "Icon": "vpn_lock",
          "Active": false
        },
        {
          "Title": "LEGAL",
          "Icon": "sticky_note_2",
          "Active": false
        },
        {
          "Title": "QUESTIONS",
          "Icon": "contact_support",
          "Active": false
        },
      ]
    },
  ]

  shouldRed(panel: any){
    if (this.shouldHideLiveBtn()){
      return false
    }
    if (panel.Title == "BILLING"){
      if (Globals.billingInfo?.name?.replace(" ", "") == ''){
        return true
      }
    }
    else if (panel.Title == "PAYMENTS"){
      if (this.bankInfo == ''){
        return true
      }
    }
    else if (panel.Title == "PLAN"){
      if (this.subInfo == ''){
        
        return true
      }
    }
    else if (panel.Title == "PRODUCTS"){
      if (this.storeProducts?.length == 0){
        return true
      }
    }
    return false
  }


  getBillingAddressFirst(){
    var name = Globals.billingInfo?.brand + " ending in " + Globals.billingInfo?.number

    return name
  }


  defaultBio = ""
  color = ""
  bg_color = ""
  inventory?: Array<Inventory>

  selectedIndicator(){
    

    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name

    let color = this.storeForm.controls.loadingIndicatorColor.value as string ?? "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"
    let bg_color = this.storeForm.controls.loadingIndicatorBgColor.value as string ?? "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    let indicator: Dict<string> = {
      "name": this.storeForm.controls.loadingIndicator.value ?? name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }

  

  getTypeImages(templateCode: string) {

    let template = Globals.templates.find(obj => {
      return obj.productCode == templateCode
    })



    return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Templates%2F" + template?.templateID + "%2Fdisplay1.jpg?alt=media"
    

  }

  buyMore(inventory: Inventory){
    const modalRef = this.modalService.open(InventoryBuyComponent, {size : "lg"});
    modalRef.componentInstance.inventory = inventory


    let sub = modalRef.dismissed.subscribe((inv?: Inventory) => {
      sub.unsubscribe()
      if (inv){
        let same = this.inventory?.filter(i => { i.id == inv.id})[0]
        if (same){
          same.amount = inv.amount
        } 
      }
    })
  }

  checkBilling(){
    if (Globals.billingInfo?.name && Globals.billingInfo?.name != ""){
      
      return true

    }
    else{
      var sec = 0
      var ind = 0
      this.panels.forEach((panel, section) => {
        panel.Options.forEach((option, index) => {
          if (option.Title == 'BILLING'){
            sec = section
            ind = index
            return
          }
        });
      });
      this.selectSetting(ind, sec)
      return false
    }
  }

  shouldHideLiveBtn(){
    return (this.storeProducts == undefined || Globals.billingInfo == undefined || this.bankInfo == undefined || this.subInfo == undefined)
  }

  storeLive(){
    return (this.storeProducts?.length ?? 0) != 0 && Globals.billingInfo?.name && this.bankInfo != '' && this.subInfo != ''
  }

  buyNewInventory(template: Template){

    if (this.checkBilling()){
      const modalRef = this.modalService.open(InventoryBuyComponent, {size : "lg"});
      modalRef.componentInstance.template = template
  
  
      let sub = modalRef.dismissed.subscribe((inv?: Inventory) => {
        sub.unsubscribe()
        if (inv){
          this.inventory?.unshift(inv)
        }
      })
    }
  }

  missingInfo(){
    var array = Array<string>()

    if (Globals.billingInfo?.name == ''){
      array.push("Add your billing method")
    }
    if (this.subInfo == ''){
      array.push("Start your Thred Merchant plan")
    }
    if (this.bankInfo == ''){
      array.push("Set up your merchant payments account")
    }
    if ((this.storeProducts?.length ?? 0) == 0){
      array.push("Upload your first product")
    }
    return array
  }

  removeAutoReload(inventory: Inventory){
    this.loadService.removeAutoReload((inventory), success => {
      if (success){
        inventory.autoReload = false
        this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " removed")
      }
    })
  }

  setUpAutoReload(inventory: Inventory){
    if (this.checkBilling()){
      this.loadService.setAutoReload((inventory), success => {
        if (success){
          inventory.autoReload = true
          this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " set")
        }
      })
    }
  }


  getInventory(){
    if (this.inventory != undefined) return
    this.inventory = []
    this.loadService.getInventory(inventory => {
      console.log(inventory)
      this.inventory = inventory ?? []
      if (inventory.length == 0){
        this.invTitle = 'INCREASE PROFIT'
      }
      console.log(this.inventory)
      this.cdr.detectChanges()
    })
  }

  hasInventory(template: Template){
    return this.inventory?.find(obj => { return template.productCode == obj.code })
  }

  availableToBuyTemplates(){
    return this.templates()?.filter(template => { return !this.hasInventory(template)})
  }

  matchTemplate(inv: Inventory){
    return this.templates()?.find(obj => { return inv.code == obj.productCode })
  }

  
  invUsed(inv: Inventory){
    let num = (this.matchTemplate(inv)?.bulkUnit ?? 0) - inv.amount

    if (num == 0){
      return 'No sales on this product'
    }
    return num + " sales on this product"
  }

  matchInventory(template: Template){
    return (this.inventory?.filter(obj => { return template.productCode == obj.code }))![0]
  }

  totalElement(series: Array<Dict<any>>){

    var total = 0
    series.forEach(item => {
      total += item.value as number
    })
    return total
  }

  formatGraphElement(element: number, name: string){

    if (name == "Gross Revenue" || name == "Net Profit" || name == "Affiliate Revenue"){
      return this.formatPrice(element)
    }
    return element
  }

  formatPrice(price: number, short = false){
    var priceAsString = new String(Number((price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2)).toLocaleString('en'))
    if (!short){
      priceAsString = new String(Number((price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2)))
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
    return this.getCurrencyForCountry(Globals.selectedCurrency?.name != "US", Globals.selectedCurrency) + priceAsString
}
  
getCurrencyForCountry(shouldShowName: boolean, country?: Country){

  var returnItem = country?.currency_symbol ?? "$"
  if (shouldShowName) returnItem = country?.name + " " + returnItem

  return returnItem
}




isSpinning = false

    showSpinner(duration = 2000){
      if (!this.isSpinning){
        this.isSpinning = true
        if (isPlatformBrowser(this.platformID)){
          this.spinner.show("adminSpinner")
        };
  
        setTimeout(() => {
            this.spinner.hide("adminSpinner")
        }, duration);
      }
    }

    showSampleSpinner(duration = 1500){
      this.isSpinning = true
        if (isPlatformBrowser(this.platformID)){
          this.spinner.show("sampleSpinner")
        };
  
        setTimeout(() => {
            this.spinner.hide("sampleSpinner")
        }, duration);
    }
  
    hideSpinner(){
      if (this.isSpinning){
        this.isSpinning = false
        // this.spinner.hide()
      }
    }

  theme = 'Light'

  userForm = this.fb.group({
    username: [null, Validators.required],
    full_name: [null, Validators.required],
    bio: [null],
    profile_pic: [null],
    custom_url: [null],
    socials: new Array<{
      name: string,
      link: string,
    }>(),
  });

  storeForm = this.fb.group({
    slogan: [null, Validators.required],
    loadingIndicator: [null, Validators.required],
    loadingIndicatorColor: [null, Validators.required],
    loadingIndicatorBgColor: [null, Validators.required],
    themeImg: [null],
    homeImg: [null],
    actionImg: [null],
    storeTheme: [null, Validators.required],
    font: [null, Validators.required]
  });

  changeEmailForm = this.fb.group({
    newEmail: [null, Validators.required],
    password: [null, Validators.required],
  });

  changePassForm = this.fb.group({
    password: [null, Validators.required],
    newPassword: [null, Validators.required],
    confirmNewPassword: [null, Validators.required],
  });

  marketingForm = this.fb.group({
    pixel: [null, Validators.required],
  });
  
  getSelectedPanel(){
    let selected = this.panels.filter(panel => panel.Options?.filter(option => option.Active).length != 0)[0]?.Options.filter(option => option?.Active)[0]
    return selected
  }

  openFBAdsManager(){
    const link = document.createElement('a');
    link.target = '_blank';

    let url: string = 'https://www.facebook.com/business/learn/facebook-ads-pixel';


    link.href = url
    this.spinner.hide("adminSpinner")

    link.setAttribute('visibility', 'hidden')
    link.click()
    link.remove()
  }

  async setFBPixel(){
    let pixel = this.marketingForm.controls.pixel.value as string
    await this.loadService.setPixel(pixel)
    this.toast('Facebook Pixel Updated!')
  }

  setForm(){

    this.userForm.controls.username.setValue(Globals.userInfo?.username ?? "")
    this.userForm.controls.full_name.setValue(Globals.userInfo?.fullName ?? "")
    this.userForm.controls.bio.setValue(Globals.userInfo?.bio ?? "")


    this.storeForm.controls.slogan.setValue(Globals.userInfo?.slogan ?? "")
    this.storeForm.controls.loadingIndicator.setValue(Globals.userInfo?.loading?.name ?? "")

    this.storeForm.controls.themeImg.setValue(Globals.userInfo?.themeLink?.toString())
    this.storeForm.controls.homeImg.setValue(Globals.userInfo?.homeLink?.toString())
    this.storeForm.controls.actionImg.setValue(Globals.userInfo?.actionLink?.toString())

    this.storeForm.controls.font.setValue(Globals.userInfo?.fontName)


    this.userForm.controls.socials.setValue(Globals.userInfo?.socials)

    this.userForm.controls.custom_url.setValue(Globals.userInfo?.customURL?.fullURL)

    this.marketingForm.controls.pixel.setValue(Globals.userInfo?.fb_pixel)

    this.storeForm.controls.storeTheme.setValue(Globals.userInfo?.colorStyle?.name.toString())
    this.theme = Globals.userInfo?.colorStyle?.name.toString() ?? 'Light'


    let co = Globals.userInfo?.loading?.color
    let bco = Globals.userInfo?.loading?.bg_color

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    this.storeForm.controls.loadingIndicatorColor.setValue(color ?? [])
    this.storeForm.controls.loadingIndicatorBgColor.setValue(bg_color ?? [])


  }

  isBase64(str: string) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
  }

  selectColor(value: string, isPrimary: boolean){

      if (isPrimary){
        this.storeForm.controls.loadingIndicatorColor.setValue(value ?? [])
      }
      else{
        this.storeForm.controls.loadingIndicatorBgColor.setValue(value ?? [])
      }

      this.showSampleSpinner(2000)

  }


    fileChangeEvent(event: any, type = "Profile"): void {
        const modalRef = this.modalService.open(CropperComponent, {size : "lg"});
        modalRef.componentInstance.imageChangedEvent = event



        if (type == "Profile"){
          modalRef.componentInstance.ratio = 1
          modalRef.componentInstance.width = 200
          modalRef.componentInstance.height = 200

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.userForm.controls.profile_pic.setValue(img)
            }
          })
        }
        else if (type == "Background"){
          modalRef.componentInstance.ratio = 1.78
          modalRef.componentInstance.width = 2560
          modalRef.componentInstance.height = 1440

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.storeForm.controls.themeImg.setValue(img)
            }
          })
        }
        else if (type == "Promotion"){
          modalRef.componentInstance.ratio = 1.78
          modalRef.componentInstance.width = 2560
          modalRef.componentInstance.height = 1440

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.storeForm.controls.homeImg.setValue(img)
            }
          })
        }
        else if (type == "Action"){
          modalRef.componentInstance.ratio = 1.78
          modalRef.componentInstance.width = 2560
          modalRef.componentInstance.height = 1440

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.storeForm.controls.actionImg.setValue(img)
            }
          })
        }
    }
    

    

  getImgSrc(){
    
    if (this.userForm.controls.profile_pic.value){
      return this.userForm.controls.profile_pic.value
    }
    return this.userInfo()?.profileLink
  }

  getUsername(){
    
    if (this.userForm.controls.full_name.value){
      return this.userForm.controls.full_name.value
    }
    return this.userInfo()?.fullName ?? "Brian's Tees"
  }

  saveProfile(){

    if (this.userForm.valid){
      var data = {
        username: this.userForm.controls.username.value,
        full_name: this.userForm.controls.full_name.value,
        bio: this.userForm.controls.bio.value,
        socials: this.userForm.controls.socials.value,
        custom_url: this.userForm.controls.custom_url.value?.trim(),
        profile_pic: this.userForm.controls.profile_pic.value
      }

      this.loadService.checkUsername(data.username, err => {
        if (err){
          this.toast("A store with this name already exists!")
        }
        else{
          this.loadService.checkURL(data.custom_url, error => {
            if (error){
              this.toast(error)
            }
            else{
              console.log(',')

              this.loadService.saveUser(data, success => {
                if (success){
                  console.log(success)
                  this.toast("Profile Information Updated!")
                }
              })
            }
          })
        }
      }, Globals.userInfo?.uid)
    }
    else{
      this.toast("One or more fields are invalid!")
    }
  }

  savePassword(){

    if (this.changePassForm.valid){
      if (this.changePassForm.controls.password.value != this.changePassForm.controls.confirmNewPassword.value){
        
        return
      }

      let data = {
        password: this.changePassForm.controls.password.value,
        newPassword: this.changePassForm.controls.newPassword.value,
      }
      this.loadService.savePassword(data, success => {
        this.changePassForm.controls.password.setValue(undefined)
        this.changePassForm.controls.newPassword.setValue(undefined)
        if (success){
          this.toast("Password Updated!")
        }
        else{
          this.toast("Error! Something went wrong.")
        }
      })
    }
    else{

    }
  }

  show: boolean = false;


  password() {
    this.show = !this.show;
  }

  saveEmail(){

    if (this.changeEmailForm.valid){

      let data = {
        password: this.changeEmailForm.controls.password.value,
        newEmail: this.changeEmailForm.controls.newEmail.value,
      }
      this.loadService.saveEmail(data, success => {
        this.changeEmailForm.controls.password.setValue(undefined)
        this.changeEmailForm.controls.newEmail.setValue(undefined)
        if (success){
          this.toast("Email Updated!")
        }
        else{
          this.toast("Error! Something went wrong.")
        }
      })
    }
    else{

    }
  }

  joinColor(color: string){

    let c = color?.replace("rgb", "")?.replace("a", "")?.replace("(", "")?.replace(")", "")?.split(",")
    var returnArr = new Array<string>()
    c.forEach(element => {
      returnArr.push(element.trim())
    });

    if (returnArr.length < 4){
      for (let i = 0; i < (4 - returnArr.length); i++) {
          returnArr.push("1")
      }
    }

    return returnArr.join(",")
  }

  numToColor(color: Array<number>){

    var returnArr = new Array<string>()

    color.forEach(color => {
      returnArr.push(color.toString())
    })

    return returnArr.join(",")
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

  selectTheme(){
    this.theme = this.storeForm.controls.storeTheme.value
  }

  async saveStore(){

    if (this.storeForm.valid){

      var color = this.joinColor(this.storeForm.controls.loadingIndicatorColor.value)
      var bg_color = this.joinColor(this.storeForm.controls.loadingIndicatorBgColor.value)


      

  


      var data: Dict<any> = {
        slogan: this.storeForm.controls.slogan.value,
        indicator: {
          name: this.storeForm.controls.loadingIndicator.value,
          color: color,
          bg_color: bg_color
        },
        loadingIndicatorColor: color,
        loadingIndicatorBgColor: bg_color,
        font: this.storeForm.controls.font.value
      }

      var selectedTheme = this.storeForm.controls.storeTheme.value as string


      let matchingTheme = Globals.themes?.find(theme => { return theme.themes.find(theme => { return theme.name == selectedTheme})})?.themes.find(theme => { return theme.name == selectedTheme})

      if (matchingTheme){
        var color = this.numToColor(matchingTheme.btn_color)
        var bg_color = this.numToColor(matchingTheme.bg_color)

        data.theme = {
          back_code: matchingTheme.back_code,
          text_code: matchingTheme.text_code,
          nav_code: matchingTheme.nav_code,
          class: matchingTheme.style,
          bg_color: bg_color,
          btn_color: color,
          name: matchingTheme?.name
        }
      }

    

      var images = new Array<Dict<string>>()
      if (this.storeForm.controls.themeImg.value && this.isBase64(this.storeForm.controls.themeImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))){
          images.push({
            "type" : "theme",
            "img" : this.storeForm.controls.themeImg.value
          })
      }
      if (this.storeForm.controls.homeImg.value && this.isBase64(this.storeForm.controls.homeImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))){
        images.push({
          "type" : "home",
          "img" : this.storeForm.controls.homeImg.value
        })
      }
      if (this.storeForm.controls.actionImg.value && this.isBase64(this.storeForm.controls.actionImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))){
        images.push({
          "type" : "action",
          "img" : this.storeForm.controls.actionImg.value
        })
      }

      data.images = images


      this.loadService.myCallback = () => this.toast("Store Settings Updated!")
      await this.loadService.saveStore(data)
    }
    else{

    }
  }

  titleCase(str: string = '') {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

  toast(message: string){

    this.loadService.openSnackBar(message)

  }

  isMobile(){
    if (isPlatformBrowser(this.platformID)){
      let height = window.innerHeight
      let width = window.innerWidth
      return width < height
    }
    return false
  }

  async selectSetting(index: number, section: number){

    if (section == 3){
      var urlLink = ""
      if (index == 0 || index == 1){
        urlLink = "https://thredapps.com/privacy-policy"
      }
      else if (index == 2){
        urlLink = "https://thredapps.com/customer-support"
      }
      const link = document.createElement('a');
          link.target = '_blank';
  
          let url: string = '';
          if (!/^http[s]?:\/\//.test(urlLink)) {
            url += 'http://';
          }
      
          url += urlLink
      
          link.href = url
          this.spinner.hide("adminSpinner")
  
          link.setAttribute('visibility', 'hidden')
          link.click()
          link.remove()

      return
    }

    if (this.isMobile()){
      this.classApplied = false
    }

    this.panels.forEach(panel => {
      panel.Options.forEach(option => {
        option.Active = false
      });
    });
    let user = await this.loadService.isLoggedIn()
    if (this.panels[section].Options[index].Title == "ANALYTICS" && user?.uid && !user?.isAnonymous){
      this.getMiscStats()
    }
    else if (this.panels[section].Options[index].Title == "AFFILIATE" && user?.uid && !user?.isAnonymous){
      this.getAffiliateStats(true)
    }
    this.panels[section].Options[index].Active = true
    this.cdr.detectChanges()
  }

  copyAffiliateURL(){
    this.toast("Affiliate link copied to clipboard!")
    var host = 'shopmythred.com'

    this.clipboard.copy(host + "/?affiliate=" + this.storeInfo().uid);
  }

  getSoldProducts(){

    if (Globals.productsSold == undefined){
      this.loadService.saleCallback = () => this.getSoldProducts()
      this.loadService.getSoldProducts(this.storeInfo()?.uid)
    }
    else{

      let data = [
        "Products Sold",
        "Gross Revenue",
        "Net Profit"
      ]
      data.forEach(d => {
        this.addChart(d, Globals.productsSold!)
      })
      this.getAffiliateStats()
    }
  }

  async getAffiliateStats(showEmpty = false){

    if (this.activeAffiliates.length == 0){
      this.loadService.miscCallback = () => this.getMiscStats()
      let user = await this.loadService.isLoggedIn()
      this.loadService.getAffiliateStats(user?.uid!, affiliates => {
        this.activeAffiliates = affiliates

        if (affiliates.length != 0 || showEmpty){
          let data = [
            "Onboarded Users (Affiliate)",
            "Affiliate Revenue",
          ]
          data.forEach(d => {
            this.addChart(d, this.activeAffiliates)
          })
        }
      })
    }
  }

  async getMiscStats(){

    if (Globals.views == undefined && Globals.dropCarts == undefined){
      this.loadService.miscCallback = () => this.getMiscStats()
      let user = await this.loadService.isLoggedIn()

      this.loadService.getMiscStats(user?.uid!)
    }
    else{

      let data = [
        {
        name: "Store Views",
        series: Globals.views
        },
        {
        name: "Abandoned Carts",
        series: Globals.dropCarts
        }
      ]

      data.forEach(d => {
        this.addMiscCharts(d?.name, d?.series?? [])
      })
      this.getSoldProducts()
    }
  }

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }

  classApplied = false;

  toggleSidebar() {
    

    this.classApplied = !this.classApplied;

    if (this.classApplied){
      this.state ='rotated'
    }
    else{
      this.state = 'default'
    }
    
  }

  storeBio(){
    let bio = this.storeInfo().bio

    if (bio == "" || bio == undefined){
      return this.defaultBio?.replace(/FULL9NAME/g, this.storeInfo().fullName?.trim() ?? "This brand")
    }
    return bio?.replace(/\n/g, "<br>") ?? "";
  } 

  planEndDate(){
    return new Date(this.subInfo.cancel_at * 1000).toDateString();
  }

    ngOnInit(): void {
      this.loadService.adminComponent = this
      this.init()
    }

    showWelcomeModal(){

      if (Globals.isNewUser && !this.modalService.hasOpenModals()){
        const modalRef = this.modalService.open(StoreSetupComponent, {size : "lg"});
        // modalRef.componentInstance.canTrial = this.canTrial
        let sub = modalRef.dismissed.subscribe((subInfo?: any) => {
          sub.unsubscribe()
          // if (subInfo){
          //   this.subInfo = subInfo
          // }
          if (this.checkBilling()){}
      })
      }
    }


    routeToProduct(productID: string){
      this.rootComponent.routeToProduct(productID)
    }

    startSubscription(){

      if (Globals.billingInfo?.number && Globals.billingInfo?.number != ""){
        var sec = 0
        var ind = 0

        if (this.getSelectedPanel().Title != "PLAN"){
          this.panels.forEach((panel, section) => {
            panel.Options.forEach((option, index) => {
              if (option.Title == 'PLAN'){
                sec = section
                ind = index
              }
            });
          });
          this.selectSetting(ind, sec)
        }
        
        const modalRef = this.modalService.open(EditPlanComponent, {size : "lg"});
        modalRef.componentInstance.canTrial = this.canTrial
  
        let sub = modalRef.dismissed.subscribe((subInfo?: any) => {
          sub.unsubscribe()
          if (subInfo){
            this.subInfo = subInfo ?? ''
          }
        })
      }
      else{
        var sec = 0
        var ind = 0
        this.panels.forEach((panel, section) => {
          panel.Options.forEach((option, index) => {
            if (option.Title == 'BILLING'){
              sec = section
              ind = index
              return
            }
          });
        });
        this.selectSetting(ind, sec)
      }
    }

    editSubscription(subInfo: any){
      const modalRef = this.modalService.open(EditPlanComponent, {size : "lg"});
      modalRef.componentInstance.subInfo = subInfo
  
      let sub = modalRef.dismissed.subscribe((subInfo?: any) => {
        sub.unsubscribe()
        if (subInfo){
          this.subInfo = subInfo ?? ''
        }
      })
    }
    
    storeProducts?: Array<Product> = undefined
  
    async callback(){
      if (Globals.storeInfo.username){
        this.showSpinner()
        this.rootComponent.setOptions()
        this.rootComponent.setFavIcon(Globals.storeInfo.profileLink!.toString())

        this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)

        if (isPlatformBrowser(this.platformID)){

  
          if (this.signedIn){
            
            if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
              this.loadService.getCustomer()
            }
            else if (Globals.selectedCurrency == undefined){
              this.loadService.getCountries()
            }
            else if (Globals.themes == undefined){
              this.loadService.getThemes()
            }
            else if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
              this.loadService.getTemplates()
            }
            else if (this.storeProducts == undefined){
              this.loadService.getPosts(products => {
                this.storeProducts = products
              })
            }
            if (Globals.billingInfo == undefined){
              this.loadService.getAllBillingInfo()
            }
            else{
              Globals.storeInfo = JSON.parse(JSON.stringify(Globals.userInfo))
              this.inventory?.forEach(inv => {
                let name = Globals.templates.filter(obj => {
                  return obj.productCode == inv.code
                })[0]?.templateDisplayName
                inv.name = name
              });
              this.routingService.routeToProfile(this.getStoreName().link, this.getStoreName().isCustom)
              this.hideSpinner()
              this.setForm()
              this.showWelcomeModal()
              this.cdr.detectChanges()
            }
          }
          else{
            this.spinner.hide("adminSpinner")
            this.rootComponent.accountPressed(2, true)
          }
        }
      }
      else{
        this.routingService.routeTo404(this.getStoreName().isCustom)
      }
    }

    planStatus(){
      if (this.subInfo?.plan.id == "price_1JmgQyIdY1nzc70NXgzC1vCN"){
        return "Thred Core Plan"
      }
      return ""
    }

    planRenewalDate(){
      return new Date(this.subInfo.current_period_end * 1000).toDateString();
    }

    billingInfo(){
      return Globals.billingInfo
    }

    beginBankAdd(){
      this.spinner.show("adminSpinner")
      this.loadService.beginBankAdd((urlLink: string) => {
        const link = document.createElement('a');
        link.target = '_blank';

        let url: string = '';
        if (!/^http[s]?:\/\//.test(urlLink)) {
          url += 'http://';
        }
    
        url += urlLink
    
        link.href = url
        this.spinner.hide("adminSpinner")

        link.setAttribute('visibility', 'hidden')
        link.click()
        link.remove()
      })
    }


    routeToBillingAdmin(){
      this.rootComponent.routeToBillingAdmin()
    }
        
    
    async init() {
  
      let user = (await this.loadService.isLoggedIn())
      let uid = user?.uid
      let isAnon = user?.isAnonymous ?? false
  
      this.signedIn = uid != undefined && !isAnon

      if (!this.bankInfo){
        this.loadService.getBankInfo(async (bankInfo: any) => {
          this.bankInfo = bankInfo ?? ''
          this.cdr.detectChanges()
        })
      }
      if (!this.subInfo){
        this.loadService.getSubInfo(async (subInfo: any, canTrial?: boolean) => {
          this.subInfo = subInfo ?? ''
          this.canTrial = canTrial
          this.cdr.detectChanges()
        })
      }
      if (!this.inventory){
        this.getInventory()
      }
      
      this.router.queryParams
      .subscribe(params => {

        let selected = params.selected as string

        let s = selected?.toUpperCase()

        var sec = 0
        var ind = 0

        if (selected == undefined) {
          if (this.panels.filter(panel => { return panel.Options.filter(option => { return option.Active}).length > 0}).length == 0){
            this.selectSetting(ind, sec)
          }
        }
        this.panels.forEach((panel, section) => {
          panel.Options.forEach((option, index) => {
            if (option.Title == s){
              sec = section
              ind = index
              return
            }
          });
        });
        if (selected != undefined){
          this.selectSetting(ind, sec)
        }
      }
    );

    const storeInfo = this.getStoreName()
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom)
      
      if (this.classApplied){
        this.state ='rotated'
  
      }
      else{
        this.state = 'default'
      }

      
  
    }


    downloadAllStoreInfo(storeName: string, isCustom = false){
      this.loadService.myCallback = () => this.callback()
      this.loadService.getUser(storeName, undefined, isCustom)
    }
  
    getStoreName(){
      var request = ""
      if (isPlatformServer(this.platformID)){
        request = Globals.URL
      }
      else{
        request = globalThis.location.host
      }  
      if (request != 'localhost:4200' && request != 'shopmythred.com'){
        return {
          isCustom: true,
          link: request
        }
      }
      const routeParams = this.router.snapshot.paramMap;
      const storeID = routeParams.get('user') as string;
      return {
        isCustom: false,
        link: storeID
      }
    }

    async deleteProduct(product: Product){
      this.openPopup("Are you sure?", 'Your product will be removed forever.', product.url.toString(), 'Yes, Remove', 'Never Mind', async () => {
        await this.loadService.deleteProduct({productID : product.productID})
        this.toast("Product Removed")
      })
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
    

    editProduct(product: Product){
      
      let same = this.templates().find(temp => { return temp.productCode == product.productType})
      let sameC = same?.colors.find(co => { return co.code == product.templateColor})

      var data: Dict<any> = {
        linkImg: product.url,
        back_linkImg: undefined,
        frontImg: product.picID,
        backImg: undefined,
        selectedTemplate: same,
        selectedColor: sameC,
        suggested_price: product.price / 100,
        templates: this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0}),
        inventory: this.inventory ?? [],
        mode: 'edit',
        product: product
      }
      if (product.supportedSides.find(side => { return side == 'Back'})){
        data.backImg = product.picID
      }
      this.productDetailsMode = true
      this.productDetails = data
    }

    productDetailsMode = false
    productDetails: any 

    createNewProduct(){

      const modalRef = this.dialog.open(DesignComponent, {
        width: '' + this.myInnerHeight() + "px",
        maxWidth: '100vw',
        maxHeight: '100vh',
        data: {
          inventory: this.inventory ?? [], 
          templates: this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0})
        },
      });
    
      let sub = modalRef.afterClosed().subscribe(resp => {
        console.log('The dialog was closed');
        sub.unsubscribe()
        if (resp){
          this.productDetailsMode = true
          resp.templates = this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0}),
          resp.inventory = this.inventory ?? []
          resp.mode = 'create'
          this.productDetails = resp
        }
        else{
          this.productDetailsMode = false
          this.productDetails = undefined
        }
      });
    }

    myInnerHeight(){
      let height = window.innerHeight
      let width = window.innerWidth
  
      if (width < height){
        return width * 0.98
      }
      else{
        return height * 0.70
      }
    }

    finish(success: boolean){

      this.productDetailsMode = false
      this.productDetails = undefined
    }

    routeToHome(){
      this.rootComponent.routeToHome()
    }

    signOutPressed(){
      this.loadService.myCallback = () => this.routeToHome()
      this.loadService.signOut()
    }

    addTags(title: string, imgUrl: string, description: string, url: string){
      this.metaService.updateTag({property: 'og:title', content: title  + " - " + "My Account"});
      this.metaService.updateTag({property: 'og:image:width', content: '200'});
      this.metaService.updateTag({property: 'og:image:height', content: '200'});
      this.metaService.updateTag({property: 'og:image', content: imgUrl});
      this.metaService.updateTag({property: 'og:url', content: url})
      this.metaService.updateTag({property: 'og:description', content: description})
      this.titleService.setTitle(title)
      this.metaService.updateTag({property: 'description', content: description})
  
    }


}
