import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Globals } from '../globals';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { Country } from '../models/shipping-country.model';
import { Product } from '../models/product.model';
import { ProductInCart } from '../models/product-in-cart.model';
import { ShippingInfo } from '../models/shipping-address.model';
import { BillingInfo } from '../models/billing-address.model';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from "ngx-spinner";
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ShippingAddressComponent implements OnInit {

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    country: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required, Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")]],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
    shipping: ['free']
  });

  hasUnitNumber = false;

  states(country?: string){

    country = country?.toLowerCase()
    if (country == "canada"){
      return Globals.caProvinces
    }
    if (country == "united states"){
      return Globals.usStates
    }
    if (country == "united kingdom"){
      return Globals.ukNations
    }
    if (country == "australia"){
      return Globals.auNations
    }
    return Globals.usStates
  }

  countries(){
    return Globals.countries
  }

  getStateFieldName(country?: string){

    country = country?.toLowerCase()
    if (country == "canada"){
      return "Province"
    }
    if (country == "united states"){
      return "State"
    }
    if (country == "united kingdom"){
      return "Region"
    }
    if (country == "australia"){
      return "Province"
    }
    return "State"
  }

  getZipFieldName(country?: string){

    country = country?.toLowerCase()
    if (country == "canada"){
      return "Postal Code"
    }
    if (country == "united states"){
      return "Zip Code"
    }
    if (country == "united kingdom"){
      return "Postal Code"
    }
    if (country == "australia"){
      return "Postal Code"
    }
    return "Zip Code"
  }

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}


  
  selectedTemplate(){return Globals.selectedTemplate}

  selectedCountry!: string
  selectedCode!: string

  cartLength(){
    if (this.rootComponent.cart?.length == 0){
      
      return ""
    }
    return this.rootComponent.cart?.length
  }

  cart(){
    return this.rootComponent
  }

  shippingI(){
    return Globals.shippingInfo
  }

  firstName(){
    return Globals.shippingInfo?.name.split(' ').slice(0, -1).join(' ')
  }

  lastName(){
    return Globals.shippingInfo?.name.split(' ').slice(-1).join(' ')
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

  err = ""

  save(){


    if (this.addressForm.valid){
      let f = this.addressForm.controls

      let name = f.firstName.value + " " + f.lastName.value
      
      Globals.shippingInfo = new ShippingInfo(
        name, 
        f.company.value, 
        f.address.value, 
        f.city.value, 
        f.country.value, 
        f.state.value, 
        f.address2?.value ?? "", 
        f.postalCode.value, 
        f.phone.value, 
        "", 
        f.email.value
      )

      // if (f.country.value == "CA" || f.country.value == "Canada"){
      //   Globals.shippingInfo.admin_area = Globals.caProvinces.find(province => { return province.name == f.state.value || province.abbreviation == f.state.value})?.abbreviation ?? "ON"
      // }

      if (isPlatformBrowser(this.platformID)){
          this.spinner.show()
      };

      this.loadService.linkAddress((err?: any) => {
        this.spinner.hide()

        if (err){
          this.err = err
        }
        else{
          this.err = ""
          Globals.billingInfo = undefined
          this.routeToBilling()
        }
      })
    }
    else{
    }
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

  shipping(){
    let shipping = (Globals.availableCurrencies.find(country => country.name_full == this.selectedCountry)?.shipping_rate_usd ?? 0) / 100
    if (shipping > 0){
      return this.formatPrice(shipping)
    }
    return "FREE"
  }

  autoCoupon(product: Product){
    var autoCoupon = this.storeInfo()?.coupons?.filter(coupon => { return coupon.products.includes(product.productID) && coupon.auto}).sort(function(a, b){
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

  total(){
    var total = 0
    
    this.rootComponent.cart?.forEach(product => {
      total += (this.mainPrice(product.product!) * 100) * (product.quantity ?? 1)
    })
    return total / 100
  }

  format(d: Date) {
    return Globals.months[d.getMonth()].substring(0,3) + " " + d.getDate() + " " + d.getFullYear()
  }

  setForm(){
    this.addressForm.controls.company.setValue(Globals.shippingInfo?.company ?? "")
    this.addressForm.controls.firstName.setValue(this.firstName())
    this.addressForm.controls.lastName.setValue(this.lastName())
    this.addressForm.controls.address.setValue(Globals.shippingInfo?.street ?? "")
    this.addressForm.controls.address2.setValue(Globals.shippingInfo?.unit ?? "")
    this.addressForm.controls.country.setValue(Globals.shippingInfo?.country ?? "")
    this.addressForm.controls.email.setValue(Globals.shippingInfo?.email ?? "ok")
    this.addressForm.controls.phone.setValue(Globals.shippingInfo?.phone_num ?? "")
    this.addressForm.controls.city.setValue(Globals.shippingInfo?.city ?? "")
    this.addressForm.controls.state.setValue(Globals.shippingInfo?.admin_area ?? "")
    this.addressForm.controls.postalCode.setValue(Globals.shippingInfo?.postal ?? "")
  }

  async callback(){
    if (await this.loadService.authenticated()){
      if (Globals.storeInfo?.username){
        this.rootComponent.setOptions()
        this.rootComponent.setFavIcon(Globals.storeInfo?.profileLink?.toString() ?? '')

        this.addTags(Globals.storeInfo?.fullName ?? "Thred", (Globals.storeInfo?.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo?.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo?.username)
        if (Globals.shippingInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getShippingAddress()
        }
        else if (Globals.availableCurrencies.length == 0 && isPlatformBrowser(this.platformID)){
          this.loadService.getCountries()
        }
        else if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
          this.loadService.getTemplates()
        } 
        else{
          this.setForm()
          this.cdr.detectChanges()
        }
      }
      else{
        this.routingService.routeTo404(this.getStoreName().isCustom)
      }
    }
    else{
      this.routeToCart()
    }
  }



  routeToCart(){
    this.rootComponent.routeToCart()
  }

  routeToBilling(){
    this.loadService.myCallback = () => this.routeToBilling()
    if (Globals.billingInfo == undefined){
      this.loadService.getBillingAddress()
    }
    else if (Globals.billingInfo?.name){
      if (isPlatformBrowser(this.platformID)){
          this.spinner.hide()
      };
      this.rootComponent.routeToReview()
    }
    else{
      if (isPlatformBrowser(this.platformID)){
          this.spinner.hide()
      };
      this.rootComponent.routeToBilling()
    }
  }
  
  init() {


    Globals.shippingInfo = undefined

    const storeInfo = this.getStoreName()
    this.downloadAllStoreInfo(storeInfo?.link, storeInfo?.isCustom)

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
    return this.getCurrencyForCountry(Globals.selectedCurrency!, Globals.selectedCurrency!.name != "US") + priceAsString
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
    this.metaService.removeTag("name='robots'");
    this.metaService.removeTag("name='googlebot'");

  }

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private fb: FormBuilder,
    private _router: Router,
    private rootComponent: AppComponent,
    private spinner: NgxSpinnerService,
    private routingService: RoutingService,
  ) {}

  ngOnInit(): void {
    this.init()
  }


  onSubmit() {
    alert('Thanks!');
  }

}
