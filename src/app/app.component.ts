import { ChangeDetectorRef, Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AngularFaviconService } from 'angular-favicon';
import { Country } from './models/shipping-country.model';
import { Template } from './models/template.model';
import { Globals } from './globals';
import { ActivatedRoute, Router, NavigationEnd, RoutesRecognized, ActivationStart } from '@angular/router';
import { LoadService, Dict } from './services/load.service';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
import { LoginComponent } from './login/login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { map, filter, mergeMap, take } from 'rxjs/operators';
import { AdminViewModule } from './admin-view/admin-view.module';
import { Store } from './models/store.model';
import { ProductInCart } from './models/product-in-cart.model';
import { RoutingService } from './services/routing.service';
import { PixelService } from 'ngx-pixel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'thred-web';

  mode = "All Products"

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}


  selectedProduct(){return Globals.selectedProduct}
  
  selectedTemplate(){return Globals.selectedTemplate}


  profileSettings: Array<Dict<any>> = []



  changeIcon() {
    document.getElementById('appIcon')!.setAttribute('href', 'https://www.google.com/favicon.ico')

  }

  hasPixel = false

  initializePixel(pixelID?: string){
    if (!this.hasPixel){
      this.hasPixel = true
      // this.pixelService.remove()
      this.pixelService.initialize()
    }
  }

  async setOptions(){

    this.profileSettings = []

    var option = {
      "Title": "My Account",
      "Link" : "/" + "STORE_NAME" + "/my-store",
      "Function": this.routeToProfile
    }
    var option2 = {
      "Title": "View Orders",
      "Link" : "/" + "STORE_NAME" + "/orders",
      "Function": this.routeToOrders
    }

    // if (!(await this.loadService.isLoggedIn())?.uid){

    //   option = {
    //     "Title": "My Account",
    //     "Link" : "/" + "STORE_NAME" + "/my-store",
    //   }
    // }
    
    this.profileSettings = [option, option2]
  }
  
  async closeBtn(result: string){
    // this.modalService.dismissAll("success")

    if (await this.loadService.authenticated() && !((await this.loadService.isLoggedIn())?.isAnonymous)){

      this.routeToProfile()
    }
    else{
      this.routeToHome()
    }
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

  reloadCurrentRoute() {
    const currentUrl = this._router.url;
    
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
    });
  }

  isAdmin(){
    return (this.router.snapshot.firstChild?.routeConfig?.path?.includes("my-store"))
  }

  isOrder(){
    return (this.router.snapshot.firstChild?.routeConfig?.path?.includes("orders"))
  }


  routeToProfile(selected?: string){
    if (Globals.userInfo?.username){
      this.loadService.myCallback = undefined
      if (Globals.storeInfo.uid != Globals.userInfo?.uid){
        Globals.storeInfo = JSON.parse(JSON.stringify(Globals.userInfo))
        if (Globals.userInfo.customURL && Globals.userInfo.customURL.host != ""){
          this.routingService.routeToProfile(Globals.userInfo?.username!, this.getStoreName().isCustom, selected, Globals.userInfo?.customURL.fullURL)
        }
        else{
          if (this.getStoreName().isCustom){
            this.routingService.routeToProfile(Globals.userInfo?.username!, this.getStoreName().isCustom, selected, "https://shopmythred.com/" + Globals.userInfo?.username)
          }
          else{
            this.routingService.routeToProfile(Globals.userInfo?.username!, this.getStoreName().isCustom, selected)
          }
        }
      }
      else{
        if (Globals.storeInfo?.username){
          if (this.isAdmin()){
            this.reloadCurrentRoute()
          }
          else{
            this.routingService.routeToProfile(Globals.userInfo?.username!, this.getStoreName().isCustom, selected)
          }
        }
      }
    }
    else{
      console.log("not")
      this.loadService.myCallback = () => this.routeToProfile()
      this.loadService.getCustomer()
    }
  }

  cart?: Array<ProductInCart> = undefined

  getCart(){
    if (this.cart == undefined && isPlatformBrowser(this.platformID)){
      console.log("Getting Cart")
      this.loadService.getCart(false, cart => {
        this.cart = cart
        console.log(cart)
      })
    }
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

  routeToHome(){
    if (Globals.storeInfo.username)
    this.routingService.routeToHome(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToOrders(){
    if (Globals.storeInfo.username)
    this.routingService.routeToOrders(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToShop(){
    if (Globals.storeInfo.username)
    this.routingService.routeToShop(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToAbout(){
    if (Globals.storeInfo.username)
    this.routingService.routeToAbout(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToCart(){
    if (Globals.storeInfo.username)
    this.routingService.routeToCart(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToProduct(productID: string){
    if (Globals.storeInfo?.username)
    this.routingService.routeToProduct(productID, Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToOrder(orderID: string){
    if (Globals.storeInfo?.username)
    this.routingService.routeToProduct(orderID, Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToShipping(){
    if (Globals.storeInfo?.username)
    this.routingService.routeToShipping(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToBilling(){
    if (Globals.storeInfo?.username)
    this.routingService.routeToBilling(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToBillingAdmin(){
    if (Globals.storeInfo?.username)
    this.routingService.routeToBillingAdmin(Globals.storeInfo.username, this.getStoreName().isCustom)
  }

  routeToReview(){
    if (Globals.storeInfo?.username)
    this.routingService.routeToReview(Globals.storeInfo.username, this.getStoreName().isCustom)

  }

  async accountPressed(){
    if (await this.loadService.authenticated() && !((await this.loadService.isLoggedIn())?.isAnonymous)){
      this.routeToProfile()
    }
    else{
      
      if (!this.isOrder()){
        if (Globals.availableCurrencies == undefined || Globals.availableCurrencies == [] || Globals.availableTemplates == undefined || Globals.availableTemplates == [] || Globals.orders == [] || Globals.storeInfo.username == undefined || Globals.storeInfo.username == ""  || isPlatformServer(this.platformID)){
          return
        }
      }

      if (!this.modalService.hasOpenModals()){
        const modalRef = this.modalService.open(LoginComponent, {size : "lg"});
          let sub = modalRef.dismissed.subscribe((result: string) => {
            this.closeBtn(result)
            console.log("man")
            sub.unsubscribe()
          })
          modalRef.componentInstance.authMode = 1
      }    
    }
  }

  settings(popFirst: boolean){
    if (popFirst){
      return this.profileSettings.slice(1) ?? []
    }
    return this.profileSettings ?? []
  }

  storeLink(link: string){
    return link.replace("STORE_NAME", this.storeInfo().username ?? "")
  }

  cartLength(){
    if (this.cart?.length == 0){
      return "0"
    }
    var totalCount = 0
    this.cart?.forEach(product => {
      totalCount += product.quantity ?? 0
    })
    return totalCount
  }

  updateCurrency(currency: Country){
    Globals.selectedCurrency = currency
    if (isPlatformBrowser(this.platformID)){
      localStorage.setItem("LOCAL_CURRENCY", currency.currency_name)
    }
    this.cdr.detectChanges()
  }

  viewCart(){
    const modalRef = this.modalService.open(CartComponent, {size : "lg"});
    // modalRef.componentInstance.authMode = 1
  }
  // ?product_type=Dresses

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

  isMobile(){
    if (isPlatformBrowser(this.platformID)){
      let height = window.innerHeight
      let width = window.innerWidth
      return width < height
    }
    return false
  }
  
  getCurrencyForCountry(country: Country, shouldShowName: boolean){

    var returnItem = country.currency_symbol
    if (shouldShowName) returnItem = country.name + " " + returnItem
  
    return returnItem
  }

  

  applyProductFilter(template?: Template){

    let id = template?.productCode
    this.mode = this.titleCase(template?.templateDisplayName ?? "All Products")
    if (Globals.storeInfo.username){
      this.loadService.myCallback = () => this.cdr.detectChanges()
      // this.loadService.getPosts(id)
      this.loadService.getPosts(products => {
        this.loadService.setFilterProducts(products)
      }, id)
    }
  }
  
  isShopComponent(){
    let config = this.router.snapshot.firstChild?.routeConfig?.path?.split('/') ?? []
    return config![config!.length - 1] == "products"
  }

  shouldShowCurrency(){


    // return this.loadService.shouldShowCurrency

    let product = this.router.snapshot.firstChild?.paramMap.get('product') as string


    return (
      this.router.snapshot.firstChild?.params == ShopComponent 
      || 
      product != undefined
      ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes("products")
      ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes("home")
      ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes("cart")
      ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes("shipping-address")
      ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes("billing-info")
      ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes("review-order")
      ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes("my-store")
    )
  }

  hideCart(){
    
    return (
      this.router.snapshot.firstChild?.component == ViewOrderComponent 
      || 
      this.router.snapshot.firstChild?.component == ViewOrderInfoComponent
    )
  }

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }

  titleCase(str: string) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    public cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private loadService: LoadService,
    private routingService: RoutingService,
    private pixelService: PixelService,
    private modalService: NgbModal,
    private _router: Router,
    ) {
    }


  setFavIcon(link: string){
    if (isPlatformBrowser(this.platformID))
    document.getElementById('appIcon')!.setAttribute('href', link)
  }
    

  ngOnInit() {
    
    // this.setFavIcon("https://www.thredapps.com/favicon.ico")
    // OR 

    this.loadService.rootComponent = this
    this.setOptions()
  }


  
}
