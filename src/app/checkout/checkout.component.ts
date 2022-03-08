import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Globals } from '../globals';
import { Product } from '../models/product.model';
import { ProductInCart } from '../models/product-in-cart.model';
import { Dict, LoadService } from '../services/load.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Country } from '../models/shipping-country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import { AppComponent } from '../app.component';
import { StripeService, STRIPE_PUBLISHABLE_KEY, WindowRef, StripePaymentRequestButtonComponent } from 'ngx-stripe';
import { Stripe, PaymentRequestPaymentMethodEvent, StripeElementsOptions, StripePaymentRequestButtonElementOptions } from '@stripe/stripe-js';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RoutingService } from '../services/routing.service';
import { Coupon } from '../models/coupon.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}

  
  selectedTemplate(){return Globals.selectedTemplate}

  shippingAddress(){return Globals.shippingInfo}

  billingAddress(){return Globals.billingInfo}

  tax(){return Globals.shippingTax}

  selectedCountry!: string
  selectedCode!: string

  useCard = false

  err = ""

  cartLength(){
    if (this.rootComponent.cart?.length == 0){
      
      return ""
    }
    return this.rootComponent.cart?.length
  }

  cart(){
    return this.rootComponent.cart ?? []
  }

  routeToCart(){
    this.rootComponent.routeToCart()
  }

  productTax(noCoupon = false){
    let tax = this.productTaxNum(noCoupon) ?? 0
    if (tax > 0){
      return this.numberWithCommas(this.formatPrice((tax ?? 0)))
    }
    return "N/A"
  }

  

  productTaxNum(noCoupon = false){



    return (this.d_total(noCoupon) + Math.round(this.shippingNum())) * (this.tax() ?? 0)
  }

  orderTotal(noCoupon = false){
    return this.numberWithCommas(this.formatPrice(this.orderNum(noCoupon)))
  }

  orderNum(noCoupon = false){
    return this.total(noCoupon) + this.shippingNum() + this.productTaxNum(noCoupon)
  }

  getColor(product?: Product){

    let colors = Globals.templates.find(template => template.productCode == product?.productType)?.colors
    return colors?.find(color => color.code == product?.templateColor)?.display ?? "White"
  }

  stillLoadingProducts(){
    return this.rootComponent.cart?.filter(product => product.product?.price == undefined)?.length != 0
  }

  stillLoading(){
    return (this.rootComponent.cart?.filter(product => product.product?.price == undefined)?.length != 0) 
    || 
    Globals.availableCurrencies?.filter(currency => currency.shipping_rate_usd == undefined)?.length != 0
    ||
    Globals.shippingTax == undefined

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

  async updateProductQty(product: ProductInCart, newQty: string){
 
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

    await this.loadService.changeCart(mappedData)
    if (this.rootComponent.cart?.length == 0){
      this.routeToCart()
      return
    }

    this.updatePayBtnOptions()

    this.cdr.detectChanges()
  }

  calculate(){
    this.cdr.detectChanges()
  }

  shipping(){
    let shipping = (Globals.availableCurrencies.find(country => country.name_full?.toLowerCase() == Globals.shippingInfo?.country?.toLowerCase().trim() || country.name?.toLowerCase() == this.selectedCountry?.toLowerCase().trim())?.shipping_rate_usd ?? 0) / 100
    if (shipping > 0){
      return this.numberWithCommas(this.formatPrice(shipping))
    }
    return "FREE"
  }

  shippingNum(){
    return (Globals.availableCurrencies.find(country => country.name_full?.toLowerCase() == Globals.shippingInfo?.country?.toLowerCase().trim())?.shipping_rate_usd ?? 0) / 100
  }
  

  autoCoupon(product: Product){

    var autoCoupon = this.storeInfo()?.coupons?.filter(coupon => { return coupon.products.includes(product.productID) && coupon.auto}).sort(function(a, b){
      if(a.amt < b.amt) { return 1; }
      if(a.amt > b.amt) { return -1; }
      return 0;
    })[0]
    return autoCoupon
  }

  cartDiscount(){

    var autoCoupon = this.storeInfo()?.coupons?.filter(coupon => { return (coupon.type == 'order_qty' && this.totalLength() >= coupon.threshold) ||
      (coupon.type == 'order_val' && (this.total(true) ?? 0) >= coupon.threshold) && coupon.auto}).sort(function(a, b){
        if(a.amt < b.amt) { return 1; }
        if(a.amt > b.amt) { return -1; }
        return 0;
    })[0]

    return autoCoupon
  }

  mainPrice(product: Product, cartDiscounts = false){
    
    let coupon = this.autoCoupon(product)
    if (coupon && (!this.cartDiscount() || (this.cartDiscount()?.style == 1 && coupon.style == 1))){
      if (coupon.style == 0){
        return ((product.price ?? 0) / 100) - (((product.price ?? 0) / 100) * coupon.amt)
      }
      if (coupon.style == 1){
        return ((product.price ?? 0) / 100) - ((coupon.amt ?? 0) * 100)
      }
    }
    
    if (cartDiscounts){
      let cartCoupon = this.cartDiscount()
      if (cartCoupon){
        if (cartCoupon.style == 0){
          return ((product.price ?? 0) / 100) - (((product.price ?? 0) / 100) * cartCoupon.amt)
        }
      }
    }
    return (product.price ?? 0) / 100
  }

  total(noCoupon = false){
    var total = 0
    var f: Coupon | undefined
    this.rootComponent.cart?.forEach(product => {
      if (noCoupon){
        var coupon = this.autoCoupon(product.product!)
        if (coupon?.style == 0){
          total += Math.round((product.product?.price ?? 0) * (product.quantity ?? 1))
        }
        else{
          total += Math.round(((product.product?.price ?? 0) - ((coupon?.amt ?? 0) * 10000)) * (product.quantity ?? 1))
        }
      }
      else{
        total += Math.round((this.mainPrice(product.product!, true) * 100) * (product.quantity ?? 1))
        let l = this.cartDiscount()
        if (l?.style == 1){
          f = l
        }
      }
    })

    if (noCoupon){
      return (total / 100)
    }
    else{
      return (total / 100) - ((f?.amt ?? 0) * 100)
    }
  }
  
  d_total(noCoupon = false){
    var total = 0
    
    this.rootComponent.cart?.forEach(product => {
      if (noCoupon){
        total += Math.round((this.mainPrice(product.product!, false) * 100) * (product.quantity ?? 1))
      }
      else{
        total += Math.round((this.mainPrice(product.product!, true) * 100) * (product.quantity ?? 1))
      }
    })
    
    return total / 100
  }

  format(d: Date) {
    return Globals.months[d.getMonth()].substring(0,3) + " " + d.getDate() + " " + d.getFullYear()
  }

  hasCart(){
    return this.rootComponent.cart?.length != 0 ?? false
  }

  
  

  async callback(){
    if (await this.loadService.authenticated()){
      if (Globals.storeInfo?.username){
        // this.cardOptions.style!.paymentRequestButton.theme = this.theme()

        this.loadingName = this.storeInfo()?.fullName ?? ''
        this.showSpinner()
        this.rootComponent.setFavIcon(Globals.storeInfo?.profileLink?.toString() ?? '')

        this.rootComponent.setOptions()
        this.addTags(Globals.storeInfo?.fullName ?? "Thred", (Globals.storeInfo?.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo?.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo?.username)

        if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getCustomer()
        }
        else if (this.rootComponent.cart?.length == 0 && isPlatformBrowser(this.platformID)){
          this.routeToCart()
          return
        }
        else if (Globals.shippingInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getShippingAddress()
        }
        else if ((Globals.shippingInfo?.email == "" || Globals.shippingInfo?.email == undefined) && isPlatformBrowser(this.platformID)){
          this.routeToCart()
          return
        }
        else if (!this.useOtherPaymentMethod && Globals.billingInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getBillingInfo()
        }
        else if (!this.useOtherPaymentMethod && (Globals.billingInfo?.number == "" || Globals.billingInfo?.number == undefined) && isPlatformBrowser(this.platformID)){
            this.routeToBilling()
            return
        }
        else if (Globals.availableCurrencies.length == 0 && isPlatformBrowser(this.platformID)){
          this.loadService.getCountries()
        }
        else if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
          this.loadService.getTemplates()
        } 
        else if (Globals.billingInfo?.admin_area == undefined || Globals.billingInfo?.admin_area == "" && isPlatformBrowser(this.platformID)){
          this.loadService.getBillingAddress()
        }
        else if (Globals.shippingTax == undefined && Globals.billingInfo?.admin_area && Globals.billingInfo?.admin_area != "" && isPlatformBrowser(this.platformID)){
          this.loadService.getTax(this.billingAddress()!)
        }
        else{
          
          
          this.updatePayBtnOptions()

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

  updatePayBtnOptions(){
    let same = Globals.availableCurrencies?.filter(currency => { return currency.name_full == Globals.billingInfo?.country})
    if (same && same.length != 0){

      const amount = Math.round((((this.total() + this.shippingNum() + this.productTaxNum()) * same[0].rate ?? 1)* 100))
      
      this.paymentRequestOptions = {
        country: same[0].name,
        currency: same[0].currency_name.toLowerCase(),
        total: {
          label: Globals.storeInfo?.fullName ?? "Thred Apps Inc.",
          amount: amount,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      };
    }
    else{
      const amount = Math.round(((this.total() + this.shippingNum() + this.productTaxNum()) * 100))      
      this.paymentRequestOptions = {
        country: 'US',
        currency: 'usd',
        total: {
          label: Globals.storeInfo?.fullName ?? "Thred Apps Inc.",
          amount: amount,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      };
    }
  }

  theme(){
    if (this.storeInfo()?.colorStyle.back_code == 'light'){
      return 'dark'
    }
    return 'light'
  }


  loadingName = ''
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

    routeToProduct(productID: string){
      this.rootComponent.routeToProduct(productID)
    }
  
    routeToShipping(){
      this.rootComponent.routeToShipping()
    }

    routeToBilling(){
      this.rootComponent.routeToBilling()
    }

    routeToShop(){
      this.rootComponent.routeToShop()
    }

  placeOrder(event: any){
    /** spinner starts on init */
    this.loadingName = 'Placing Order...'

    if (isPlatformBrowser(this.platformID)){
        this.spinner.show()
   };

    event.target.disabled = true;

    let storeID = this.storeInfo()?.uid!
    this.loadService.createPayment(storeID, true, (order_id: string, client_secret: string, err?: any) => {
      this.spinner.hide()
      if (err){
        this.err = err
      }
      else{
        this.finishedOrder(order_id, client_secret)
      }
    }, this.cartDiscount())
  }

  finishedOrder(order_id: string, _client_secret: string){
    this.loadingName = ''
    if (isPlatformBrowser(this.platformID)){
          this.spinner.hide()
    };
    this.rootComponent.routeToOrder(order_id)
  }
  
  init() {


    Globals.shippingInfo = undefined
    Globals.billingInfo = undefined
    Globals.shippingTax = undefined

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


  onPaymentMethod(ev: PaymentRequestPaymentMethodEvent) {



    let storeID = this.storeInfo()?.uid!
    this.loadService.createPayment(storeID, false, (order_id: string, client_secret: string, err?: any) => {
      return this.stripeService.confirmCardPayment(
        client_secret,
        { payment_method: ev.paymentMethod.id },
        { handleActions: false }
      ).subscribe((confirmResult) => {
        if (confirmResult.error) {
          // Report to the browser that the payment failed, 
          // prompting it to re-show the payment interface, 
          // or show an error message and close the payment.
          this.err = err
          ev.complete('fail');
          return of({
            error: new Error('Error Confirming the payment'),
          });
        } else {
          // Report to the browser that the confirmation was 
          // successful, prompting it to close the browser 
          // payment method collection interface.

          ev.complete('success');
          // Let Stripe.js handle the rest of the payment flow.
          return this.finishedOrder(order_id, client_secret)
        }
      })
    })
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

  itemCount(){
    var count = 0
    this.rootComponent.cart?.forEach(product => {
      count += (product.quantity ?? 0)
    });
    return count
  }



  getShippingAddressFirst(){
    var name = this.shippingAddress()?.name
    var company = this.shippingAddress()?.company
    if (company) name += " - " + company
    return name
  }

  getBillingAddressFirst(){
    var name = this.titleCase(this.billingAddress()?.brand ?? '') + " ending in " + this.billingAddress()?.number ?? ''

    if (this.useOtherPaymentMethod){
      name = ""
    }
    return name
  }

  totalLength(){
    var total = 0
    
    this.rootComponent.cart?.forEach(product => {
      total += product.quantity ?? 1
    })
    return total
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

  useOtherPaymentMethod = false

  paymentRequestOptions = {
    country: 'US', 
    currency: 'usd', 
    total: {
      label: "Thred Apps Inc.",
      amount: 0,
    },
    requestPayerName: false,
    requestPayerEmail: false,
  }

  // cardOptions: StripePaymentRequestButtonElementOptions = {
  //   style:{
  //     paymentRequestButton:{
  //       theme:'dark',
  //     }
  //   },
  // };

  
  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    @Inject(STRIPE_PUBLISHABLE_KEY) private stripeKey: Object,

    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private _router: Router,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private spinner: NgxSpinnerService,
    private rootComponent: AppComponent,
    private stripeService: StripeService,
    private routingService: RoutingService,

  ) {
    this.useOtherPaymentMethod = Globals.useOtherPaymentMethod ?? false
  }
  ngAfterViewInit(): void {
    
  }

  stripe?: Stripe;
  prButton: any;
  elements: any;



  ngOnInit(): void {
    this.init()

    


    

    
  }

}
