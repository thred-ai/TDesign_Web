import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Globals } from '../globals';
import { Product } from '../models/product.model';
import { ProductInCart } from '../models/product-in-cart.model';
import { Dict, LoadService } from '../services/load.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Country } from '../models/shipping-country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BillingInfo } from '../models/billing-address.model';
import { MatRadioChange } from '@angular/material/radio';
import { AppComponent } from '../app.component';
import { StripeCardComponent, StripeService, STRIPE_PUBLISHABLE_KEY, WindowRef } from 'ngx-stripe';
import { NgxSpinnerService } from "ngx-spinner";

import {
  StripeCardElementOptions,
  StripeElementsOptions,
  Stripe
} from '@stripe/stripe-js';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-billing-admin',
  templateUrl: './billing-admin.component.html',
  styleUrls: ['./billing-admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class BillingAdminComponent implements OnInit, AfterViewInit {

  @ViewChild(StripeCardComponent) card1?: StripeCardComponent;

  



  

  cardOptions: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        iconColor: '#06415F',
        color: '#051113',
        fontWeight: 'regular',
        fontFamily: 'Arial',
        fontSize: '16px',
        '::placeholder': {
          color: '#979999'
        }
      }
    }
  };

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

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  stripeTest!: FormGroup;
  
  billingForm = this.fb.group({
    company: null,
    cardholder: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    country: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
    shipping: ['custom', Validators.required]
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
    return Globals.allCountries
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

  selectedCode!: string

  cart(){
    return this.rootComponent
  }


  getColor(product?: Product){

    let colors = Globals.templates.find(template => template.productCode == product?.productType)?.colors
    return colors?.find(color => color.code == product?.templateColor)?.display ?? "White"
  }

  firstName(){
    return Globals.billingInfo?.name.split(' ').slice(0, -1).join(' ')
  }

  lastName(){
    return Globals.billingInfo?.name.split(' ').slice(-1).join(' ')
  }

  format(d: Date) {
    return Globals.months[d.getMonth()].substring(0,3) + " " + d.getDate() + " " + d.getFullYear()
  }

  setForm(){
    this.card1?.element.on('change', ({error}) => {
      this.validCard = !error

      if (error) {
        console.log(error)
      }
    });

    this.billingForm.controls.company.setValue(Globals.billingInfo?.company ?? "")
    this.billingForm.controls.cardholder.setValue(Globals.billingInfo?.name ?? "")
    this.billingForm.controls.address.setValue(Globals.billingInfo?.street ?? "")
    this.billingForm.controls.address2.setValue(Globals.billingInfo?.unit ?? "")
    this.billingForm.controls.country.setValue((Globals.billingInfo?.country ?? "").trim() != "" ? Globals.billingInfo?.country : "United States")
    this.billingForm.controls.city.setValue(Globals.billingInfo?.city ?? "")
    this.billingForm.controls.state.setValue(Globals.billingInfo?.admin_area ?? "")
    this.billingForm.controls.postalCode.setValue(Globals.billingInfo?.postal ?? "")
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

  async callback(){

    if (await this.loadService.authenticated()){
      this.cardOptions.style!.base!.color = this.selectedTheme().color
      this.cardOptions.style!.base!.iconColor = this.selectedTheme().color
      this.cardOptions.style!.base!['::placeholder']!.color = this.selectedTheme().color

      if (Globals.storeInfo.username){
        this.rootComponent.setFavIcon(Globals.storeInfo.profileLink?.toString() ?? '')
        this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com"))?.toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)
        if (Globals.billingInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getBillingAddress()
        }
        else if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getCustomer()
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
      // this.rout()
    }
  }


  validCard = false
  err = ""

  async addCard(){

    if (this.billingForm.valid && !this.validCard){
      if (Globals.billingInfo?.name != '' && Globals.billingInfo?.brand != ''){
        this.routeToReview()
        return
      }
    }
    
    if (this.billingForm.valid && this.validCard){

      let f = this.billingForm.controls

      Globals.billingInfo = new BillingInfo(
        f.cardholder.value, 
        f.company.value, 
        undefined, 
        undefined, 
        f.address.value, 
        f.city.value, 
        f.country.value, 
        f.state.value, 
        f.address2.value, 
        f.postalCode.value, 
        this.getCountryCode(f.country.value), 
      )

      if (f.country.value == "CA" || f.country.value == "Canada"){
        Globals.billingInfo.admin_area = Globals.caProvinces.find(province => { return province.name == f.state.value || province.abbreviation == f.state.value})?.abbreviation ?? "ON"
      }

      if (isPlatformBrowser(this.platformID)){
        this.spinner.show()
      };

      this.loadService.linkCard({card: this.card1, stripe: this.stripeService}, (err?: any) => {
        this.spinner.hide()
        if (err){
          this.err = err
        }
        else{
          this.routeToReview()
        }
      })

    }
  }

  routeToReview(){
    if (isPlatformBrowser(this.platformID)){
          this.spinner.hide()
   }

   this.routingService.routeToProfile(Globals.storeInfo?.username!, this.getStoreName().isCustom, 'billing')
  }
  
  init() {


    this.cardOptions.style!.base!.color = this.selectedTheme().color

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

  getCountryCode(country: string){
    var returnItem = this.countries().find(c => c.name == country)?.code
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
    private _router: Router,
    private fb: FormBuilder,
    private rootComponent: AppComponent,
    private spinner: NgxSpinnerService,
    private stripeService: StripeService,
    private routingService: RoutingService,

  ) {}
  ngAfterViewInit(): void {
    
  }



  buttonBack(){
    if (this.storeInfo()?.colorStyle.back_code == "dark"){
      return 'rgb(255,255,255)'
    }
    return 'rgb(0,0,0)'
  }

  ngOnInit(): void {

    
    this.init()

  }


}
