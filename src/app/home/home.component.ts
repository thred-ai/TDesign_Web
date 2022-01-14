import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, OnDestroy, Injector } from '@angular/core';
import { Country } from '../models/shipping-country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { isPlatformBrowser, APP_BASE_HREF, isPlatformServer, PlatformLocation } from '@angular/common';
import { Product } from '../models/product.model';
import { Globals } from '../globals';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from "ngx-spinner";
import { RoutingService } from '../services/routing.service';
import { Row } from '../models/row.model';
import { Page } from '../models/page.model';
import { SEO } from '../models/seo.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}



  getLinkImg(name: string){
    return Globals.socials.filter(obj => { 
      return obj.name == name
    })[0].img
  }

  matchingStyle(style?: number){
    if (style == 0){
      return 'rounded-pill'
    }
    if (style == 1){
      return 'rounded'
    }
    if (style == 2){
      return 'rounded-0'
    }
    return 'rounded-circle'
  }

  autoCoupon(product: Product){
    var autoCoupon = this.storeInfo().coupons?.filter(coupon => { return coupon.products.includes(product.productID) && coupon.auto}).sort(function(a, b){
      if(a.amt < b.amt) { return 1; }
      if(a.amt > b.amt) { return -1; }
      return 0;
    })[0]
    return autoCoupon
  }

  fontSize(row: Row){
    if (this.rootComponent.isMobile() || (row.grid_row ?? 1) >= 2){
      return 'inherit'
    }
    return (0.5 / (row.grid_row ?? 1)) * 100
  }

  titleFontSize(row: Row){
    if (this.rootComponent.isMobile() || (row.grid_row ?? 1) >= 2){
      return 'inherit'
    }
    return (0.3 / (row.grid_row ?? 1)) * 100
  }

  products(smartProducts?: number, products?: Array<String>){
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
      let pro = this.storeProducts?.find(pr => { return pr.productID == p})
      if (pro){
        prod.push(pro)
      }
    })
    return prod
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


  newArrivalProducts(){
    return this.storeProducts?.sort(function(a, b){
      if(a.timestamp > b.timestamp) { return -1; }
      if(a.timestamp < b.timestamp) { return 1; }
      return 0;
    }).slice(0, 4);
  }

  featuredProducts(){

    return this.storeProducts?.sort(function(a, b){
      if(a.likes > b.likes) { return -1; }
      if(a.likes < b.likes) { return 1; }
      return 0;
    }).slice(0, 4);
  }

  imgLinkPressed(link?: string){
    this.rootComponent.routeToImgLink(link)
  }

  homeRows: Array<Row> = []
  page?: Page



  constructor(
  @Inject(PLATFORM_ID) private platformID: Object,
  private cdr: ChangeDetectorRef,
  private router: ActivatedRoute,
  private titleService: Title, 
  private metaService: Meta,
  private loadService: LoadService,
  private rootComponent: AppComponent,
  private _router: Router,
  private spinner: NgxSpinnerService,
  private injector : Injector,
  private routingService: RoutingService,
  private sanitizer: DomSanitizer,
  private location: PlatformLocation,
  private fb: FormBuilder

  ) {
      // const routeParams = this.router.snapshot.paramMap;
      // const storeID = routeParams.get('page') as string;
      // let rows = Globals.storeInfo.pages?.find(p => p.url == storeID)?.rows ?? []
      // this.homeRows = rows
  }
  ngOnDestroy(): void {
    this.loadService.adminComponent = undefined
  }

  ngOnInit(): void {
    this.loadService.homeComponent = this
    this.init()
  }

  routeToProduct(productID: string){
    this.rootComponent.routeToProduct(productID)
  }

  routeToShop(){
    this.rootComponent.routeToShop()
  }

  routeToAbout(){
    this.rootComponent.routeToAbout()
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

  hideSpinner(){
    if (this.isSpinning){
      this.isSpinning = false
      // this.spinner.hide()
    }
  }

  storeProducts?: Array<Product> = undefined

  callback(){ 
    if (Globals.storeInfo.username){

      this.rootComponent.setFavIcon(Globals.storeInfo.profileLink?.toString() ?? '')
      const routeParams = this.router.snapshot.paramMap;
      const storeID = routeParams.get('page') as string;
      let page = Globals.storeInfo.pages?.find(p => p.url == storeID)
      let rows = page?.rows


      if (page && rows && rows != []){
        this.addTags(page)

        this.homeRows = rows
        this.page = page
      }
      else{
        this.routingService.routeToStore404(this.getStoreName().link, this.getStoreName().isCustom)
      }




      if (isPlatformBrowser(this.platformID)){
        this.showSpinner()
        this.loadService.logView()
        this.rootComponent.setOptions()
      }
      if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
        this.loadService.getCustomer()
      }
      else if (Globals.availableCurrencies.length == 0 && isPlatformBrowser(this.platformID)){
        this.loadService.getCountries()
      }
      else if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
        this.loadService.getTemplates()
      }
      else if (this.storeProducts == undefined){
        this.loadService.getPosts(products => {
          this.storeProducts = products
        })
      }
      else{
        this.rootComponent.cdr.detectChanges()
      }
    }
    else{
      this.routingService.routeTo404(this.getStoreName().isCustom)
    }
  }

  
  
  init() {

    const storeInfo = this.getStoreName()




    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom)
    

  }

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }

  downloadAllStoreInfo(storeName: string, isCustom = false){
    this.loadService.myCallback = () => this.callback()
    this.loadService.getUser(storeName, undefined, isCustom)
  }

  rowText(row: Row) {
    let replaced = row.html ?? '';



    return this.sanitizer.bypassSecurityTrustHtml(replaced);
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

  open(e: Event, item: Product){



    
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

  popupForm = this.fb.group({
    email: [null, [Validators.required]],
    name: [null],
    countryCode: [null],
    sms: [null, [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]],
  });

  err?: string

  save(){
    this.err = undefined

    if (
      (!this.popupForm.controls.email.value ||
      this.popupForm.controls.email.value?.replace(" ", '') == '') &&
      (!this.popupForm.controls.sms.value || 
      this.popupForm.controls.sms.value?.replace(" ", '') == '')){
        this.err = "1 or more field(s) are empty"
        return 
    }

    // if (!this.popupForm.controls.name.value){
    //   this.err = "Invalid Name"
    //   return
    // }

    // && (this.popup?.type == 1 || this.popup?.type == 3)

    // this.spinner.show('popupSpinner')

    const data = 0//(this.popup?.type == 0 || this.popup?.type == 2) ? 0 : 1
    var info = this.popupForm.controls.email.value // (this.popup?.type == 0 || this.popup?.type == 2) ? this.popupForm.controls.email.value : ('+' + (this.popupForm.controls.countryCode.value ?? "1") + " ") + this.popupForm.controls.sms.value

    this.loadService.saveData(data, info, success => {
      // this.spinner.hide('popupSpinner')
      if (success){
        // this.dialogRef.close()
        this.rootComponent.routeToLink("home")
      }
      else{
        this.err = "An Error Occured, Try Again Later"
      }
    }, this.popupForm.controls.name.value, Globals.storeInfo.uid)

  }

  numberWithCommas(x: string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  getCurrencyForCountry(country: Country, shouldShowName: boolean){

    var returnItem = country.currency_symbol
    if (shouldShowName) returnItem = country.name + " " + returnItem
  
    return returnItem
  }

  urlText(){
    var bURL = 'shopmythred.com/' + this.storeInfo().username

    var url = bURL

    // if (this.storeInfo().customURL?.status == 2){
    //   url = this.storeInfo().customURL?.fullURL != undefined ? this.storeInfo().customURL?.fullURL! : bURL
    // }

    return url
  }

  addTags(page?: Page){

    let seo = page?.seo

    let title = (seo?.title ?? "").trim() != "" ? (seo?.title ?? "") : (Globals.storeInfo.fullName + '-' + page?.title) ?? "Thred"


    let metaTitle = (seo?.meta?.title ?? "").trim() != "" ? (seo?.meta?.title ?? "") : title


    let description = (seo?.description ?? "").trim() != "" ? (seo?.description ?? "") : Globals.storeInfo.bio ?? "Check out my Thred Store!"

    let metaDescription = (seo?.meta?.description ?? "").trim() != "" ? (seo?.meta?.description ?? "") : description


    let imgUrl = (seo?.meta?.pic ?? "").trim() != "" ? (seo?.meta?.pic ?? "") : ((Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString())

    let url = (seo?.meta?.url ?? "").trim() != "" ? (seo?.meta?.url ?? "") : this.urlText()

    

    this.metaService.updateTag({property: 'og:title', content: metaTitle});
    this.metaService.updateTag({property: 'og:image:width', content: '200'});
    this.metaService.updateTag({property: 'og:image:height', content: '200'});
    this.metaService.updateTag({property: 'og:image', content: imgUrl});

    this.metaService.updateTag({property: 'og:url', content: url})

    if (seo?.keywords && seo.keywords.length > 0){
      var finalStr = ''
      seo.keywords.forEach((key, index) => {
        finalStr += key

        if (index != seo!.keywords.length - 1){
          finalStr += ", "
        }
      })
      this.metaService.updateTag({name: 'keywords', content: finalStr})
    }
    else{
      this.metaService.removeTag("name='keywords'");
    }

    this.metaService.updateTag({property: 'og:description', content: metaDescription})
    this.titleService.setTitle(title)
    this.metaService.updateTag({name: 'description', content: description})

    if (seo && seo.noIndex){
      this.metaService.addTag({name:"robots", content:"noindex,nofollow"})
      this.metaService.addTag({name:"googlebot", content:"noindex"})
    }
    else{
      this.metaService.removeTag("name='robots'");
      this.metaService.removeTag("name='googlebot'");
    }
  }

}
