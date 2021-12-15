import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { Globals } from '../globals';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Product } from '../models/product.model';
import { Country } from '../models/shipping-country.model';
import { ProductInCart } from '../models/product-in-cart.model';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from "ngx-spinner";
import { Store } from '../models/store.model';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}


  
  selectedTemplate(){return Globals.selectedTemplate}

  selectedCountry!: string
  selectedCode!: string
  loadedCart = false


  cartLength(){
    if (this.rootComponent.cart?.length == 0){
      
      return ""
    }
    return this.rootComponent.cart?.length
  }

  cart(){
    return this.rootComponent.cart
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

  updateProductQty(product: ProductInCart, newQty: string){
 
    product.quantity = Number(newQty)

    let mappedData: Array<Dict<any>> = []
    let dataToRemove: Array<ProductInCart> = []

    this.rootComponent.cart?.forEach((cartProduct, index) => {
      if ((cartProduct.quantity ?? 0) > 0){
        let data = {
          "UID" : cartProduct.product?.uid,
          "Size" : cartProduct.size,
          "Qty" : cartProduct.quantity,
          "Timestamp" : cartProduct.timestamp,
          "Post_ID" : cartProduct.product?.productID
        }
        mappedData.push(data)
      }
      else{
        dataToRemove.push(cartProduct)
      }
    })

    this.rootComponent.cart = this.rootComponent.cart?.filter(cartProduct => !(dataToRemove.includes(cartProduct)))

    this.loadService.changeCart(mappedData)
    this.cdr.detectChanges()
    // this.selectedCountry = country
  }

  calculate(){
    this.cdr.detectChanges()
  }

  shipping(){
    let shipping = (Globals.availableCurrencies.find(country => country.name_full == this.selectedCountry)?.shipping_rate_usd ?? 0) / 100
    if (shipping > 0){
      return this.formatPrice(shipping)
    }
    return "FREE"
  }


  format(d: Date) {
    return Globals.months[d.getMonth()].substring(0,3) + " " + d.getDate() + " " + d.getFullYear()
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

  async callback(){
    if (Globals.storeInfo.username){
      if (isPlatformBrowser(this.platformID)){
          this.showSpinner()
      }
      this.rootComponent.setOptions()
      this.rootComponent.setFavIcon(Globals.storeInfo.profileLink?.toString() ?? '')

      this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)
      if (Globals.availableCurrencies.length == 0 && isPlatformBrowser(this.platformID)){
        this.loadService.getCountries()
      }
      else if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
        this.loadService.getCustomer()
      }
      else if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
        this.loadService.getTemplates()
      } 
      else if (Globals.shippingInfo == undefined && isPlatformBrowser(this.platformID)){
        this.loadedCart = true
        this.loadService.getShippingAddress()
      }
      else if (Globals.billingInfo == undefined && isPlatformBrowser(this.platformID)){
        this.loadService.getBillingAddress()
      }
      else{
        this.loadedCart = true
        if (isPlatformBrowser(this.platformID)){
          this.spinner.hide()
      }
        this.cdr.detectChanges()
      }
    }
    else{
      this.routingService.routeTo404(this.getStoreName().isCustom)
    }
  }

  
  routeToProduct(productID: string){
    this.rootComponent.routeToProduct(productID)
  }

  routeToShop(){
    this.rootComponent.routeToShop()
  }
  
  init() {

    

    Globals.shippingInfo = undefined
    Globals.billingInfo = undefined

    
    const storeInfo = this.getStoreName()
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom)

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

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }

  hasCart(){
    return (this.rootComponent.cart?.length ?? 0) != 0
  }

  autoCoupon(product: Product){
    if (this.cartDiscount()){
      return undefined
    }
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

  totalLength(){
    var total = 0
    
    this.rootComponent.cart?.forEach(product => {
      total += product.quantity ?? 1
    })
    return total
  }

  cartDiscount(){

    var autoCoupon = this.storeInfo().coupons?.filter(coupon => { return (coupon.type == 'order_qty' && this.totalLength() >= coupon.threshold) ||
      (coupon.type == 'order_val' && (this.total(true) ?? 0) >= coupon.threshold) && coupon.auto}).sort(function(a, b){
        if(a.amt < b.amt) { return 1; }
        if(a.amt > b.amt) { return -1; }
        return 0;
    })[0]

    return autoCoupon
  }

  

  total(noCoupon = false){
    var total = 0
    
    this.rootComponent.cart?.forEach(product => {
      if (noCoupon){
        total += (product.product?.price ?? 0) * (product.quantity ?? 1)
      }
      else{
        total += (this.mainPrice(product.product!) * 100) * (product.quantity ?? 1)
      }
    })
    return total / 100
  }

  formatPrice(price: number){
    var priceAsString = new String((price * Globals.selectedCurrency!.rate).toFixed(2))
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
    return this.numberWithCommas(this.getCurrencyForCountry(Globals.selectedCurrency!, Globals.selectedCurrency!.name != "US") + priceAsString)
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
    this.metaService.updateTag({property: 'og:title', content: title  + " - " + "Checkout"});
    this.metaService.updateTag({property: 'og:image:width', content: '200'});
    this.metaService.updateTag({property: 'og:image:height', content: '200'});
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
  
  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private routingService: RoutingService,
    private loadService: LoadService,
    private _router: Router,
    private rootComponent: AppComponent,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.init()
  }

}
