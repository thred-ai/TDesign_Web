import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, OnDestroy, Injector } from '@angular/core';
import { Country } from '../models/shipping-country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { isPlatformBrowser, APP_BASE_HREF, isPlatformServer, PlatformLocation } from '@angular/common';
import { Product } from '../models/product.model';
import { Globals } from '../globals';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from "ngx-spinner";
import { RoutingService } from '../services/routing.service';

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

  selectedProduct(){return Globals.selectedProduct}

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

  private location: PlatformLocation

  ) {
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
        if (isPlatformBrowser(this.platformID)){
            this.spinner.hide()
        };
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
    console.log("callback    ")
    if (Globals.storeInfo.username){
      this.rootComponent.setFavIcon(Globals.storeInfo.profileLink!.toString())
      this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)
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
      console.log("oppa gungnam")
      console.log(Globals.storeInfo)
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

}
