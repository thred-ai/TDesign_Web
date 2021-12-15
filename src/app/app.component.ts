import { ChangeDetectorRef, Component, OnInit, Inject, PLATFORM_ID, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFaviconService } from 'angular-favicon';
import { Country } from './models/shipping-country.model';
import { Template } from './models/template.model';
import { Globals } from './globals';
import { ActivatedRoute, Router, NavigationEnd, Event as NavigationEvent, RoutesRecognized, ActivationStart, NavigationStart, RouterEvent } from '@angular/router';
import { LoadService, Dict } from './services/load.service';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { isPlatformBrowser, isPlatformServer, DOCUMENT } from '@angular/common';
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
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Banner } from './models/banner.model';
import { Popup } from './models/popup.model';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'thred-web';

  mode = "All Products"

  storeInfo(){return Globals.storeInfo}

  userInfo(){return Globals.userInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}

  
  selectedTemplate(){return Globals.selectedTemplate}


  profileSettings: Array<Dict<any>> = []


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


  changeIcon() {
    document.getElementById('appIcon')!.setAttribute('href', 'https://www.google.com/favicon.ico')

  }

  hasPixel = false

  initializePixel(pixelID?: string){
    if (this.getStoreName().isCustom){
      if (!this.hasPixel && pixelID){
        this.hasPixel = true
        this.pixelService.remove()
        this.pixelService.initialize(pixelID)
      }
    }
    else{
      if (!this.hasPixel){
        this.hasPixel = true
        this.pixelService.initialize()
      }
    }
  }

  async setOptions(){

    let user = (await this.loadService.isLoggedIn())
    let uid = user?.uid
    let isAnon = user?.isAnonymous ?? false
  
    this.signedIn = uid != undefined && !isAnon
    
    if (this.signedIn){
      this.signedInUid = uid
    }

    this.profileSettings = []

    var option = {
      "Title": "My Store",
      "Link" : "/" + "STORE_NAME" + "/my-store",
      "Function": this.routeToProfile
    }
    var option2 = {
      "Title": "View Orders",
      "Link" : "/" + "STORE_NAME" + "/orders",
      "Function": this.routeToOrders
    }
    
    var option3 = {
      "Title": "Sign Out",
      "Link" : "/" + "null",
      "Function": undefined
    }

    if (!this.signedIn){

      option3 = {
        "Title": "Sign In",
        "Link" : "/" + "null",
        "Function": undefined
      }
    }
    
    this.profileSettings = [option, option2, option3]
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

  reloadCurrentRoute() {
    const currentUrl = this._router.url;
    
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
    });
  }

  isAdmin(){

    return (this.router.snapshot.firstChild?.routeConfig?.path?.includes("my-store"))
  }

  isLanding(){
    return ((this.router.snapshot.firstChild?.routeConfig?.path?.trim() ?? '') == '')
  }

  isOrder(){
    return (this.router.snapshot.firstChild?.routeConfig?.path?.includes("orders"))
  }


  routeToProfile(selected?: string){
    if (Globals.userInfo?.username){
      this.loadService.myCallback = undefined
      if (Globals.storeInfo.uid != Globals.userInfo?.uid){
        Globals.storeInfo = JSON.parse(JSON.stringify(Globals.userInfo))
        this.routingService.routeToProfile(Globals.userInfo?.username!, this.getStoreName().isCustom, selected, "https://shopmythred.com/" + Globals.userInfo?.username)
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
      this.loadService.myCallback = () => this.routeToProfile()
      this.loadService.getCustomer()
    }
  }

  cart?: Array<ProductInCart> = undefined

  getCart(){
    if (this.cart == undefined && isPlatformBrowser(this.platformID)){
      this.cart = []
      this.loadService.getCart(false, cart => {
        this.cart = cart
      })
    }
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

  routeToHome(){
    this.setOptions()
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
    this.routingService.routeToOrder(orderID, Globals.storeInfo.username, this.getStoreName().isCustom)
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

  async accountPressed(authMode = 1, prefillUser = false){
    if (await this.loadService.authenticated() && !((await this.loadService.isLoggedIn())?.isAnonymous)){
      this.routeToProfile()
    }
    else{

      if (!this.modalService.hasOpenModals()){
        const modalRef = this.modalService.open(LoginComponent, {size : "lg"});
          let sub = modalRef.dismissed.subscribe((result: string) => {
            this.closeBtn(result)
            sub.unsubscribe()
          })
          modalRef.componentInstance.authMode = authMode
          if (prefillUser){
            modalRef.componentInstance.loginForm.controls.username.setValue(Globals.storeInfo.username)
          }
      }    
    }
  }

  settings(popFirst: boolean){
    if (popFirst){
      return this.profileSettings.slice(1, -1) ?? []
    }
    return this.profileSettings ?? []
  }

  signInPressed(){
    if (!this.modalService.hasOpenModals()){
      const modalRef = this.modalService.open(LoginComponent, {size : "lg"});
        let sub = modalRef.dismissed.subscribe((result: string) => {
          sub.unsubscribe()
        })
        modalRef.componentInstance.authMode = 1
    }
  }

  signOutPressed(){
    this.loadService.myCallback = () => this.routeToHome()
    this.loadService.signOut()
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


  showPopUp(homePopup: Popup, duration = 0){
    if (this.isAdmin()){
      return
    }
    setTimeout(() => {
      const modalRef = this.dialog.open(PopupComponent, {
        width: '' + this.myInnerHeight() + "px",
        maxWidth: '100vw',
        maxHeight: '100vh',
        data: {
          popup: homePopup, 
        },
        panelClass: 'app-full-bleed-dialog', 
      });
    }, duration);
  
    // let sub = modalRef.afterClosed().subscribe(resp => {
    //   console.log('The dialog was closed');
    //   sub.unsubscribe()
    //   if (resp){
    //     banner.bg_color = resp.bg_color
    //     banner.color = resp.color
    //     banner.icon = resp.icon
    //     banner.text = resp.text
    //   }
    //   else{
        
    //   }
    // });
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
    @Inject(DOCUMENT) private doc: Document,
    public cdr: ChangeDetectorRef,
    public router: ActivatedRoute,
    private loadService: LoadService,
    private routingService: RoutingService,
    private pixelService: PixelService,
    private modalService: NgbModal,
    private _router: Router,
    private dialog: MatDialog,
    ) {
    }


  ngAfterViewInit(): void {
  }



  setFavIcon(link: string){
    if (isPlatformBrowser(this.platformID)){
      this.createLinkForFavURL(link)
      this.setBodyColor()
    }
  }

  setBodyColor(color?: string){
    if (document.getElementById('body')){
      document.getElementById('body')?.classList.add('bg-' + (color ?? this.storeInfo().colorStyle.back_code))
    }
  }

  activateComponent(event: any){
    if (event.constructor.name == 'LandingComponent'){
      this.setBodyColor('dark')
      this.createLinkForFavURL('https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Ffavicon_thred.png?alt=media')
      if (this.interval){
        clearInterval(this.interval)
      }
      event.addTags("Thred - Get Started", "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flanding_page.png?alt=media", "Start your store in 30 seconds, Free.", "shopmythred.com")
    }
  }

  shake = false

  createLinkForFavURL(url: string) {
    if (document.getElementById('appIcon')){
      document.getElementById('appIcon')!.setAttribute('href', url)
    }
    else{
      let link: HTMLLinkElement = this.doc.createElement('link');
      link.setAttribute('rel', 'icon');
      link.setAttribute('id', 'appIcon');
      link.setAttribute("type", "image/x-icon")
      link.setAttribute('href', url);
      this.doc.head.appendChild(link);
    }
    if (document.getElementById('appleIcon')){
      document.getElementById('appleIcon')!.setAttribute('href', url)
    }
    else{
      let link2: HTMLLinkElement = this.doc.createElement('link');
      link2.setAttribute('rel', 'apple-touch-icon');
      link2.setAttribute('id', 'appleIcon');
      link2.setAttribute("type", "image/x-icon")
      link2.setAttribute('href', url);
      this.doc.head.appendChild(link2);
    }


  }

  getLinkImg(name: string){
    return Globals.socials.filter(obj => { 
      return obj.name == name
    })[0].img
  }

  openSocial(l: string){
    const link = document.createElement('a');
    link.target = '_blank';

    let url: string = '';
    if (!/^http[s]?:\/\//.test(l)) {
      url += 'http://';
    }

    url += l

    link.href = url
    
    link.setAttribute('visibility', 'hidden')
    link.click()
    link.remove()
  }
    
  signedIn = false
  signedInUid?: any

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

  async ngOnInit() {
    
    // this.setFavIcon("https://www.thredapps.com/favicon.ico")
    // OR 

    this.loadService.rootComponent = this
    this.setOptions()


    // this._router.events
    //       .subscribe(
    //         (event: NavigationEvent) => {
    //           if(event instanceof NavigationStart) {
    //             console.log(event.url)
    //       }
    // });
  }


  
}
