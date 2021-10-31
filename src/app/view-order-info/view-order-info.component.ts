import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { Globals } from '../globals';
import { Product } from '../models/product.model';
import { ProductInCart } from '../models/product-in-cart.model';
import { Dict, LoadService } from '../services/load.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Country } from '../models/shipping-country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ShippingInfo } from '../models/shipping-address.model';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from "ngx-spinner";
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-view-order-info',
  templateUrl: './view-order-info.component.html',
  styleUrls: ['./view-order-info.component.css']
})
export class ViewOrderInfoComponent implements OnInit {

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}


  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}


  selectedProduct(){return Globals.selectedProduct}
  
  selectedTemplate(){return Globals.selectedTemplate}

  shippingAddress(){
    return this.selectedOrder()!.address
  }

  billingAddress(){return Globals.billingInfo}

  selectedCountry!: string
  selectedCode!: string
  loadedCart = false

  cartLength(){
    if (this.rootComponent.cart?.length == 0){
      
      return ""
    }
    return this.rootComponent.cart?.length
  }

  selectedOrder(){
    return Globals.selectedOrder
  }



  getColor(product?: Product){

    let colors = Globals.templates.find(template => template.productCode == product?.productType)?.colors
    return colors?.find(color => color.code == product?.templateColor)?.display ?? "White"
  }

  stillLoadingProducts(){
    return this.rootComponent.cart?.filter(product => product.product?.price == undefined)?.length != 0
  }

  calculateShipping($event: any){
 
    let country = $event.target.options[$event.target.options.selectedIndex].text;

    this.selectedCountry = country
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    this.selectedCode = inputValue
  }

  

  calculateDiscount(){
 

    // this.selectedCountry = country
  }

  calculate(){
    this.cdr.detectChanges()
  }

  shipping(){
    let shipping = (this.selectedOrder()?.shippingCost ?? 0)
    if (shipping > 0){
      return this.formatPrice(shipping)
    }
    return "FREE"
  }

  total(){
    var total = 0
    
    Globals.selectedOrder?.products.forEach(product => {
      total += (product.product?.price ?? 0) * (product.quantity ?? 1)
    })
    return total / 100
  }

  format(d: Date) {
    return Globals.months[d.getMonth()].substring(0,3) + " " + d.getDate() + " " + d.getFullYear()
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

  isSpinning = false

    showSpinner(){
      if (!this.isSpinning){
        this.isSpinning = true
        if (isPlatformBrowser(this.platformID)){
          this.spinner.show()
        };
  
        setTimeout(() => {
            this.spinner.hide()
        }, 1500);
      }
    }
  
    hideSpinner(){
      if (this.isSpinning){
        this.isSpinning = false
        // this.spinner.hide()
      }
    }

  async callback(orderID: string){
    if (Globals.storeInfo.username){
      this.rootComponent.setOptions()
      this.rootComponent.setFavIcon(Globals.storeInfo.profileLink!.toString())

      this.showSpinner()
      this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)
      if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
        this.loadService.getTemplates()
      } 
      else if (Globals.selectedOrder == undefined && isPlatformBrowser(this.platformID)){
        this.loadService.getOrder(orderID)
      }
      else if (Globals.selectedOrder?.merchantUID != Globals.storeInfo.uid){
        this.routingService.routeToStore404(this.getStoreName().link, this.getStoreName().isCustom)
        
        return
      }
      else if (Globals.shippingInfo == undefined && isPlatformBrowser(this.platformID)){
        this.loadService.getShippingAddress(this.selectedOrder()?.uid)
      }
      else{
        this.loadedCart = true
        this.cdr.detectChanges()
        this.rootComponent.cdr.detectChanges()
      }
    }
    else{
      this.routingService.routeTo404(this.getStoreName().isCustom)
    }
  }

  // routeToMain404(){
  //   this._router.navigateByUrl("not-found")
  // }

  // routeTo404(){
  //   const storeName = this.getStoreName()
  //   this._router.navigateByUrl(storeName + "/not-found")
  // }

  orderCurrency(){
    return new Country(Globals.selectedOrder?.currency.toUpperCase().slice(0, (this.selectedOrder()?.currency.length ?? 0) - 1), undefined, undefined, Globals.selectedOrder?.currency, Globals.selectedOrder?.currencySymbol, 1, true, 0)
  }

  getShippingAddressSecond(){
    var address = this.shippingAddress()?.street
    var unit = this.shippingAddress()?.unit
    if (unit) address += ". " + unit
    return address
  }

  getShippingAddressThird(){
    return this.shippingAddress()?.city + ", " + this.shippingAddress()?.admin_area + ". " + this.shippingAddress()?.postal
  }

  getShippingAddressFirst(){
    var name = this.shippingAddress()?.name
    var company = this.shippingAddress()?.company
    if (company) name += " - " + company
    return name
  }


  stillLoading(){
    return (this.selectedOrder()?.products.filter(product => product.product?.price == undefined)?.length != 0) 
    || 
    Globals.availableCurrencies?.filter(currency => currency.shipping_rate_usd == undefined)?.length != 0
    ||
    Globals.shippingTax == undefined

  }

  itemCount(){
    var count = 0
    this.selectedOrder()?.products.forEach(product => {
      count += (product.quantity ?? 0)
    });
    return count
  }

  orderTotal(){
    return this.numberWithCommas(this.formatPrice(this.total() + this.shippingNum() + this.productTaxNum()))
  }

  productTax(){
    let tax = this.tax()
    if (tax > 0){
      return this.numberWithCommas(this.formatPrice((tax ?? 0)))
    }
    return "N/A"
  }

  trackingLink(){
    var link = ""
    if (this.selectedOrder()?.address?.country === "Canada"){
      link = "https://www.purolator.com/purolator/ship-track/tracking-details.page?pin=" + this.selectedOrder()?.trackingNumber
    }
    else{
      link = "https://chitchats.com/tracking/" + this.selectedOrder()?.trackingNumber
    }
    window.open(link, "_blank");
  }

  productTaxNum(){
    return (this.tax() ?? 0)
  }

  tax(){
    return this.selectedOrder()!.tax
  }

  shippingNum(){
    return this.selectedOrder()?.shippingCost ?? 0
  }
  
  
  init() {


    Globals.selectedOrder = undefined
    Globals.shippingInfo = undefined

    const storeInfo = this.getStoreName()
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom)

  }

  downloadAllStoreInfo(storeName: string, isCustom = false){
    let orderID = this.getOrderID()
    this.loadService.myCallback = () => this.callback(orderID)
    this.loadService.getUser(storeName, undefined, isCustom)
  }

  getStoreName(){
    var request = ""
    if (isPlatformServer(this.platformID)){
      request = Globals.URL
      console.log(request)
    }
    else{
      request = globalThis.location.host
    }  
    if (request != 'localhost:4200' && request != 'www.shopmythred.com'){
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

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }

  hasCart(){
    return (Globals.selectedOrder != undefined)
  }

  formatPrice(price: number){
    var priceAsString = new String((price * this.orderCurrency()!.rate).toFixed(2))
    let index = priceAsString.indexOf(".")

    switch (index){
    case priceAsString.length - 1:
        priceAsString += "00"
        break
    case priceAsString.length - 2:
        priceAsString += "0"
        break
    default:

        break
    }
    return this.numberWithCommas(this.getCurrencyForCountry(this.orderCurrency(), this.orderCurrency().name != "US") + priceAsString)
  }

  numberWithCommas(x: string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  getCurrencyForCountry(country: Country, shouldShowName: boolean){

    var returnItem = country.currency_symbol
    if (shouldShowName) returnItem = country.name + " " + returnItem
  
    return returnItem
  }

  addTags(title: string, imgUrl: string, description: string, url: string){
    this.metaService.updateTag({property: 'og:title', content: title  + " - " + "Home"});
    this.metaService.updateTag({property: 'og:image', content: imgUrl});
    this.metaService.updateTag({property: 'og:url', content: url})
    this.metaService.updateTag({property: 'og:description', content: description})
    this.titleService.setTitle(title)
    this.metaService.updateTag({property: 'description', content: description})

  }

  routeToShipping(){

    if (Globals.shippingInfo?.email && Globals.billingInfo?.name){
      this.rootComponent.routeToReview()
    }
    else if (Globals.shippingInfo?.email){
      this.rootComponent.routeToBilling()
    }
    else if (Globals.billingInfo?.name){
      this.rootComponent.routeToShipping()
    }
    else{
      this.rootComponent.routeToShipping()
    }
  }

  next(){
    
    this.routeToShipping()
  }


  getOrderID(){
    const routeParams = this.router.snapshot.paramMap;
    const orderID = routeParams.get('order') as string;

  // Find the product that correspond with the id provided in route.
    return orderID
  }
  
  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private _router: Router,
    private rootComponent: AppComponent,
    private spinner: NgxSpinnerService,
    private routingService: RoutingService,

  ) {}

  ngOnInit(): void {
    this.init()
  }

}
