import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { AngularFireAuth, } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Product } from '../models/product.model';
import { Template } from '../models/template.model';
import { TemplateSide } from '../models/template-side.model';
import { Color } from '../models/color.model';
import { Country } from '../models/shipping-country.model';
import { Globals } from '../globals';
import { isPlatformBrowser } from '@angular/common';
import { Blog } from '../models/blog.model';
import { first, skip, map } from 'rxjs/operators';
import { ProductInCart } from '../models/product-in-cart.model';
import { ShippingInfo } from '../models/shipping-address.model';
import { BillingInfo } from '../models/billing-address.model';
import { Inventory } from '../models/inventory.model';

import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireStorage } from '@angular/fire/storage';

import { v4 as uuid } from 'uuid';
import { StripeService, StripeCardComponent } from 'ngx-stripe';

import { Order } from '../models/order.model';
import { Store } from '../models/store.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { StoreTheme } from '../models/theme.model';
import { ShopComponent } from '../shop/shop.component';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { StoreDomain } from '../models/store-domain.model';
import { PixelService } from 'ngx-pixel';
import { Coupon } from '../models/coupon.model';
import { Banner } from '../models/banner.model';
import { Popup } from '../models/popup.model';



export interface Dict<T> {
  [key: string]: T;
}

@Injectable({
  providedIn: 'root'
})

export class LoadService {

  constructor(@Inject(PLATFORM_ID) 
  private platformID: Object,
  private db: AngularFirestore,
  private auth: AngularFireAuth,
  private functions: AngularFireFunctions,
  private storage: AngularFireStorage,
  private stripeService: StripeService,
  private snackBar: MatSnackBar,
  private pixel: PixelService
  ) { 
  }

  rootComponent?: AppComponent


  public myCallback: {
    (): void;
  } | undefined;

  public orderCallback: {
    (orderNum: string, intent: string): void;
  } | undefined;

  public saleCallback: {
    (): void;
  } | undefined;

  public miscCallback: {
    (): void;
  } | undefined;

  public errCallback: {
    (message: string): void;
  } | undefined;

  isShop = false
  hideCart = false
  shouldShowCurrency = false

  logView(){
    if (!(Globals.didLog) && Globals.storeInfo.uid){
      Globals.didLog = true
      this.functions.httpsCallable("updateView")({storeUID: Globals.storeInfo.uid!})
      .pipe(first())
      .subscribe(async resp => {
        
        if (resp as string){

        }
        else {

        }
      }, err => {
        console.error({ err });
      });
    }
  }


  beginBankAdd(callback: (link: string) => any){


    this.functions.httpsCallable("getExpressCreateLink")({})
      .pipe(first()).subscribe(async resp => {
        
        if (resp as string){
          console.log(resp);

          callback(resp)
        }
      
    }, err => {
        console.error({ err });
    });
  }

  async getBankInfo(callback: (bankInfo: any) => any){
    let uid = (await this.isLoggedIn())?.uid
    let sub = this.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe((doc) => {
      let docData = doc as DocumentData

      if (docData){
        let activeMerchant = docData.activeMerchant as boolean
        let merchantID = docData.merchant_id as string



        if (activeMerchant && merchantID){
          this.functions.httpsCallable('getBankInfo')({}).pipe(first()).subscribe(resp => {  
      
            callback(resp)
          }, err => {
            callback(undefined)
            console.error({ err });
          });
        }
        else{
          callback(undefined)
        }
      }
      else{
        callback(undefined)
      }
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    })
  }

  async getSubInfo(callback: (subInfo: any, canTrial?: boolean) => any){
    let uid = (await this.isLoggedIn())?.uid
    let sub = this.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe((doc) => {
      let docData = doc as DocumentData

      if (docData){
        console.log(docData)
        let plan_id = docData.plan_id as string
        let can_trial = docData.canTrial as boolean ?? true
        if (plan_id && plan_id != ""){
          this.functions.httpsCallable('getSubInfo')({}).pipe(first()).subscribe(resp => {  
            callback(resp)
          }, err => {
            callback(undefined, can_trial)
            console.error({ err });
          });
        }
        else{
          callback(undefined, can_trial)
        }
      }
      else{
        callback(undefined, true)
      }
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    })
  }

  getBanners(callback: (data: any) => any){
    fetch('https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Ficons.txt?alt=media')
      .then(function(response) {
        response.json().then(function(text) {
          var docs = text.icons as Array<Dict<any>>
          var data = new Array<Dict<any>>()
          docs.forEach((t) => {
            let same = data?.find(d => { return d.category == t.categories[0]})
            if (same){
              same.icons.push(
                t.name
              );
            }
            else{
              data.push({
                category: t.categories[0],
                icons: [t.name]
              })
            }
          })
          callback(data)
        }).catch( (error: Error) => {
          callback([])
        })
    });
  }


  async getInventory(callback: (inventory: Array<Inventory>) => any){
    let uid = (await this.isLoggedIn())?.uid
    let sub = this.db.collection("Users/" + uid + "/Inventory").valueChanges({idField: 'inventoryID'}).subscribe((docDatas) => {

      let totalInventory = new Array<Inventory>()

      docDatas.forEach((doc) => {
        let docData = doc as DocumentData
        if (docData){
          let amt = docData.amount as number
          let code = docData.id as string
          let id = docData.inventoryID as string
          let autoReload = docData.auto_reload as boolean ?? false

          let timestamp = (docData.timestamp as firebase.firestore.Timestamp).toDate()

          let name = Globals.templates.filter(obj => {
            return obj.productCode == code
          })[0]?.templateDisplayName

          let inventory = new Inventory(code, name, amt, timestamp, id, autoReload)
          totalInventory.push(inventory)
        }
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
      })     
      callback(totalInventory) 
    })
  }

  async setAutoReload(inventory: Inventory, callback: (completed: boolean) => any){
    let uid = (await this.isLoggedIn())?.uid
    await this.db.collection("Users/" + uid + "/Inventory").doc(inventory.id).update({auto_reload : true})
    callback(true)
  }

  async removeAutoReload(inventory: Inventory, callback: (completed: boolean) => any){
    let uid = (await this.isLoggedIn())?.uid
    await this.db.collection("Users/" + uid + "/Inventory").doc(inventory.id).update({auto_reload : false})
    callback(true)
  }

  getCountries(){

    let sub = this.db.collection("Print_Info").doc("Shipping_Info").valueChanges().subscribe((docData) => {

        const data = docData as DocumentData

        const usShipping = Math.round(data.shipping_rate_us * 100)
        const caShipping = Math.round(data.shipping_rate_canada * 100)
        const intlShipping = Math.round(data.shipping_rate_intl * 100)

        const currencies = data.supportedCurrencies as Array<Dict<any>>

        Globals.availableCurrencies = []

        currencies.forEach((currency) => {

          const name = currency.country
          const flag = currency.flag
          const currency_name = currency.name
          const rate = currency.rate
          const is_main_currency = currency.is_main_currency
          const symbol = currency.symbol
          const name_full = currency.country_full

          const country = new Country(
            name,
            flag,
            name_full,
            currency_name,
            symbol,
            rate,
            is_main_currency,
            0
          )


          if (name == "CA"){
            country.shipping_rate_usd = caShipping
          }
          else if (name == "US"){
            country.shipping_rate_usd = usShipping
            Globals.selectedCurrency = country
          }
          else{
            country.shipping_rate_usd = intlShipping
          }

          if (!Globals.availableCurrencies?.includes(country)){
            Globals.availableCurrencies.push(country)
          }

        })


        Globals.availableCurrencies.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })

        if (isPlatformBrowser(this.platformID)){
          let cacheCurrency = localStorage.getItem("LOCAL_CURRENCY")

          if (cacheCurrency && cacheCurrency != null && cacheCurrency != ""){
            Globals.selectedCurrency = Globals.availableCurrencies.find(currency => currency.currency_name == cacheCurrency)
          }
          else{
            Globals.selectedCurrency = Globals.availableCurrencies.find(currency => currency.currency_name == "USD")
          }
        }

        if (this.myCallback)
          this.myCallback()
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
    })
  }

  getUser(username?: string, uid?: string, isCustom = false) {

    var query = this.db.collection("Users", ref => ref.where("Username",'==', username))

    if (uid){
      query = this.db.collection("Users", ref => ref.where(firebase.firestore.FieldPath.documentId(),'==', uid))
    }
    if (isCustom){
      query = this.db.collection("Users", ref => ref.where("Custom_URL.host",'==', username?.replace('www.', '')).where("Custom_URL.status",'==', 2))
    }


    let sub = query.valueChanges({idField: 'UID'}).subscribe((doc) => {
    
        let docData = doc[0] as DocumentData

        if (docData){
          let uid = docData.UID //UID OF COMMENT IMAGE
          let dpUID = docData["ProfilePicID"] as string //UID OF COMMENT IMAGE
          let username = docData["Username"] as string //COMMENTER'S USERNAME
          let fullName = docData["Full_Name"] as string
          let bio = docData["Bio"] as string
          let notifID = docData["Notification ID"] as string
          let userFollowing = (docData["Following_List"] as Array<string>) ?? []
          let usersBlocking = (docData["Users_Blocking"] as Array<string>) ?? []
          let followerCount = (docData["Followers_Count"] as number) ?? 0
          let followingCount = (docData["Following_Count"] as number) ?? 0
          let postCount = (docData["Posts_Count"] as number) ?? 0
          let verified = docData["Verified"] as boolean ?? false
          let postNotifs = docData["Post_Notifications"] as Array<string> ?? []
          let isPublic = docData["Public"] as boolean ?? true
          let slogan = docData["Slogan"] as string
          let loading = docData["indicator"] as Dict<any>
          let style = docData["store_style"] as Dict<any>
          let pixelID = docData["fb_pixel"] as string
          let font = docData["font"] as string

          let socials = docData["Socials"] as Array<{ name: string; link: string; }>
          let custom_url = docData["Custom_URL"] as Dict<any> ?? {}
          let active = docData["Active"] as boolean
          let discounts = docData["Coupons"] as Array<Dict<any>> ?? []
          let bannerFields = docData["banners"] as Array<Dict<any>> ?? []
          let bannerStyle = docData["banner_style"] as number ?? 0
          let popups = docData["Popups"] as Array<Popup> ?? []

          console.log(popups)
          var coupons = new Array<Coupon>()
          discounts.forEach(discount => {
            coupons.push(new Coupon(discount.code ?? 'CODE1', discount.amt ?? 0, discount.products ?? [], discount.auto, discount.type, discount.threshold, discount.style))
          })

          var banners = new Array<Banner>()
          bannerFields.forEach(banner => {
            console.log(banner)
            banners.push(new Banner(banner.text, banner.icon, this.parseColor(banner.bg_color), this.parseColor(banner.color)))
          })

          let host = custom_url.host as string
          let protocol = custom_url.protocol as string
          let status = custom_url.status as number
          let txt = custom_url.txt as string
          
          let finalURL = new StoreDomain(
            host,
            protocol,
            status,
            txt
          )

          Globals.storeInfo = new Store(
            uid, 
            dpUID, 
            username, 
            fullName, 
            bio, 
            notifID, 
            userFollowing, 
            [], 
            followerCount, 
            postCount, 
            followingCount, 
            usersBlocking, 
            this.getProfileURL(uid, dpUID), 
            verified, 
            isPublic, 
            postNotifs, 
            slogan, 
            undefined, 
            this.getDefaultURL(), 
            this.getDefaultURL(), 
            this.getDefaultURL(),
            undefined, 
            undefined, 
            undefined, 
            font, 
            socials, 
            finalURL, 
            pixelID,
            active,
            coupons,
            banners,
            bannerStyle,
            popups,
          )

          if (banners.length > 0){
            this.rootComponent?.setInterval()
          }

          let homePopup = popups.find(popup => { return popup.trigger == 0})
          if (homePopup){
            this.checkPopup(homePopup, uid, () => {
              console.log(sessionStorage.getItem('home_popup'))
              if (!sessionStorage.getItem('home_popup')){
                this.rootComponent?.showPopUp(homePopup!, 5000)
                sessionStorage.setItem('home_popup', '1')
              }
            })
          }
          

          this.rootComponent?.initializePixel(pixelID)

          let list = docData["image_list"] as Array<string> ?? []

          list.forEach(type =>{
            if (type == 'theme'){
              Globals.storeInfo!.themeLink = new URL(this.getThemeURL(uid))
            }
            else if (type == 'home'){
              Globals.storeInfo!.homeLink = new URL(this.getHomeURL(uid))
            }
            else if (type == 'action'){
              Globals.storeInfo!.actionLink = new URL(this.getActionURL(uid))
            }
            else if (type == 'home_top'){
              Globals.storeInfo!.homeLinkTop = new URL(this.getHomeTopURL(uid))
            }
            else if (type == 'shop_top'){
              Globals.storeInfo!.shopLinkTop = new URL(this.getShopTopURL(uid))
            }
          })




          if (loading?.name){
            Globals.storeInfo.loading!.name = loading?.name
          }
          if (loading?.color){
            Globals.storeInfo.loading!.color = this.parseColor(loading.color)
          }
          if (loading?.bg_color){
            Globals.storeInfo.loading!.bg_color = this.parseColor(loading.bg_color)
          }

          if (style){
            Globals.storeInfo.colorStyle = new StoreTheme(style?.name, style?.back_code, style?.text_code, style?.nav_code, style?.class, this.parseColor(style?.bg_color), this.parseColor(style?.btn_color))
          }
        }
        else{
          Globals.storeInfo.uid = ""
        }

        if (this.myCallback)
          this.myCallback()
        if (isPlatformBrowser(this.platformID)){
          this.rootComponent?.getCart()
          sub.unsubscribe();
        }
    });
  }


  async checkPopup(popup: Popup, uid: string, callback: () => any){
    if (isPlatformBrowser(this.platformID)){
      let user = (await this.isLoggedIn())
      if (!user) {
        callback()
         return 
      }

      console.log('mamamamn')

      if (popup.type == 0 || popup.type == 2){
        var query = this.db.collection("Users/" + uid + "/Emails", ref => ref.where("uid",'==', user?.uid ?? ''))
      
        var sub = query.get().subscribe(docDatas => {  
          console.log(docDatas)
          if (docDatas.size == 0){
            callback()
          }
          if (isPlatformBrowser(this.platformID)){
            sub.unsubscribe()
          }
        })
      }
      else if (popup.type == 1 || popup.type == 3){
        var query = this.db.collection("Users/" + uid + "/Numbers", ref => ref.where("uid",'==', user?.uid ?? ''))
      
        var sub = query.get().subscribe(docDatas => {  
          console.log(docDatas)
          if (docDatas.size == 0){
            callback()
          }
          if (isPlatformBrowser(this.platformID)){
            sub.unsubscribe()
          }
        })
      }
    }
  }

  async getNumSubs(uid: string = '', callback: (arr: Array<Dict<any>>) => any){
    var query = this.db.collection("Users/" + uid + "/Numbers", ref => ref.orderBy('timestamp', 'desc'))
    var arr = new Array<Dict<any>>()
    let sub = query.get().subscribe(docDatas => {  
      console.log(docDatas)
      docDatas.docs.forEach(doc => {
        const data = doc.data() as DocumentData
        if (data){
          let phone = data.phone ?? 'N/A'
          let name = data.name
          let timestamp = (data.timestamp as firebase.firestore.Timestamp)?.toDate() ?? new Date()
  
          arr.push({
            phone: phone,
            name: name,
            timestamp: timestamp.toDateString()
          })
        }
      })
      callback(arr)
      if (isPlatformBrowser(this.platformID)){
        sub.unsubscribe()
      }
    })
  }

  async getEmailSubs(uid: string = '', callback: (arr: Array<Dict<any>>) => any){
    var query = this.db.collection("Users/" + uid + "/Emails", ref => ref.orderBy('timestamp', 'desc'))
    var arr = new Array<Dict<any>>()
    let sub = query.get().subscribe(docDatas => {  
      console.log(docDatas)
      docDatas.docs.forEach(doc => {
        const data = doc.data() as DocumentData

        if (data){
          let email = data.email ?? 'N/A'
          let name = data.name
          let timestamp = (data.timestamp as firebase.firestore.Timestamp).toDate()
  
          arr.push({
            email: email,
            name: name,
            timestamp: timestamp.toDateString()
          })
        }
      })
      callback(arr)
      if (isPlatformBrowser(this.platformID)){
        sub.unsubscribe()
      }
    })
  }

  parseColor(color?: string){

    var finalArr = new Array<number>()

    color?.split(",").forEach( color => {
      finalArr.push(Number(color.trim()))
    })
    return finalArr
  }

  async getCustomer() {

    Globals.userInfo = new Store()

    let uid = (await this.isLoggedIn())?.uid



    if (uid){
      let sub = this.db.collection("Users").doc(uid).valueChanges({idField: 'UID'}).subscribe((doc) => {
        let docData = doc as DocumentData

        if (docData){
          let uid = docData.UID //UID OF COMMENT IMAGE
          let dpUID = docData["ProfilePicID"] as string //UID OF COMMENT IMAGE
          let username = docData["Username"] as string //COMMENTER'S USERNAME
          let fullName = docData["Full_Name"] as string
          let bio = docData["Bio"] as string
          let notifID = docData["Notification ID"] as string
          let userFollowing = (docData["Following_List"] as Array<string>) ?? []
          let usersBlocking = (docData["Users_Blocking"] as Array<string>) ?? []
          let followerCount = (docData["Followers_Count"] as number) ?? 0
          let followingCount = (docData["Following_Count"] as number) ?? 0
          let postCount = (docData["Posts_Count"] as number) ?? 0
          let verified = docData["Verified"] as boolean ?? false
          let postNotifs = docData["Post_Notifications"] as Array<string> ?? []
          let isPublic = docData["Public"] as boolean ?? true
          let slogan = docData["Slogan"] as string
          let style = docData["store_style"] as Dict<any>
          let font = docData["font"] as string
          let socials = docData["Socials"] as Array<{ name: string; link: string; }>
          let custom_url = docData["Custom_URL"] as Dict<any> ?? {}
          let pixelID = docData["fb_pixel"] as string
          let active = docData["Active"] as boolean

          let discounts = docData["Coupons"] as Array<Dict<any>> ?? []
          let bannerFields = docData["banners"] as Array<Dict<any>> ?? []
          let bannerStyle = docData["banner_style"] as number ?? 0
          let popups = docData["Popups"] as Array<Popup> ?? []

          var coupons = new Array<Coupon>()
          discounts.forEach(discount => {
            coupons.push(new Coupon(discount.code ?? 'CODE1', discount.amt ?? 0, discount.products ?? [], discount.auto, discount.type, discount.threshold, discount.style))
          })

          var banners = new Array<Banner>()
          bannerFields.forEach(banner => {
            banners.push(new Banner(banner.text, banner.icon, this.parseColor(banner.bg_color), this.parseColor(banner.color)))
          })

          if (banners.length > 0){
            this.rootComponent?.setInterval()
          }

          
          let host = custom_url.host as string
          let protocol = custom_url.protocol as string
          let status = custom_url.status as number
          let txt = custom_url.txt as string

          let finalURL = new StoreDomain(
            host,
            protocol,
            status,
            txt
          )

          // this.rootComponent?.initializePixel(pixelID)

          let loading = docData["indicator"] as Dict<any>

          Globals.userInfo = new Store(
            uid, 
            dpUID, 
            username, 
            fullName, 
            bio, 
            notifID, 
            userFollowing, 
            [], 
            followerCount, 
            postCount, 
            followingCount, 
            usersBlocking, 
            this.getProfileURL(uid, dpUID), 
            verified, 
            isPublic, 
            postNotifs, 
            slogan, 
            undefined, 
            this.getDefaultURL(), 
            this.getDefaultURL(), 
            this.getDefaultURL(), 
            undefined, 
            undefined, 
            undefined, 
            font, 
            socials, 
            finalURL, 
            pixelID, 
            active,
            coupons,
            banners,
            bannerStyle,
            popups
          )

          let list = docData["image_list"] as Array<string> ?? []

          list.forEach(type =>{
            if (type == 'theme'){
              Globals.userInfo!.themeLink = new URL(this.getThemeURL(uid))
            }
            else if (type == 'home'){
              Globals.userInfo!.homeLink = new URL(this.getHomeURL(uid))
            }
            else if (type == 'action'){
              Globals.userInfo!.actionLink = new URL(this.getActionURL(uid))
            }
            else if (type == 'home_top'){
              Globals.userInfo!.homeLinkTop = new URL(this.getHomeTopURL(uid))
            }
            else if (type == 'shop_top'){
              Globals.userInfo!.shopLinkTop = new URL(this.getShopTopURL(uid))
            }
          })




          if (loading?.name){
            Globals.userInfo.loading!.name = loading?.name
          }
          if (loading?.color){
            Globals.userInfo.loading!.color = this.parseColor(loading.color)
          }
          if (loading?.bg_color){
            Globals.userInfo.loading!.bg_color = this.parseColor(loading.bg_color)
          }

          if (style){
            Globals.userInfo.colorStyle = new StoreTheme(style?.name, style?.back_code, style?.text_code, style?.nav_code, style?.class, this.parseColor(style?.bg_color), this.parseColor(style?.btn_color))
          }

          if (this.myCallback)
          this.myCallback()
          if (isPlatformBrowser(this.platformID))
          sub.unsubscribe();
        }
      });
    }
    else{
      if (this.myCallback)
          this.myCallback()
    }
  }

  getThemes(){

    Globals.themes = []



    var query = this.db.collection("Store_Themes", ref => ref.orderBy("index", "asc"))
    
    let sub = query.valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc) => {
  
        let docData = doc as DocumentData
  
        if (docData){
          let name = docData.name as string
          let btn_color = docData.btn_color as string
          let bg_color = docData.bg_color as string
          let back_code = docData.back_code as string
          let text_code = docData.text_code as string
          let nav_code = docData.nav_code as string
          let style = docData.class as string
          let img = docData.img as string

          let theme = new StoreTheme(
            name,
            back_code,
            text_code,
            nav_code,
            style,
            this.parseColor(bg_color),
            this.parseColor(btn_color),
            img
          )

          let same = Globals.themes?.find(t => { return t.name == style})
          if (same){
            same.themes.push(theme);
          }
          else{
            Globals.themes?.push({name: style, themes: [theme]})
          }
        }
      });
      if (this.myCallback)
          this.myCallback()
      if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
    });
  }
  
  
  getPosts(callback: (products: Array<Product>) => any, filterID?:string, uid = Globals.storeInfo.uid){


    const time = firebase.firestore.Timestamp.now()


    var query = this.db.collection("Users/" + uid + "/Products", ref => ref.where("Timestamp",'<=', time).where("Has_Picture",'==', true).where("Available",'==', true).where("Public",'==', true).orderBy("Timestamp", "desc"))

    if (filterID){
      query = this.db.collection("Users/" + uid + "/Products", ref => ref.where("Timestamp",'<=', time).where("Type",'==', filterID).where("Available",'==', true).where("Public",'==', true).orderBy("Timestamp", "desc"))
    }
    
    let sub = query.get().subscribe(docDatas => {
      var products = new Array<Product>()

      docDatas.docs.forEach((doc) => {
        let docData = doc.data() as DocumentData
        
        if (docData){
          let uid = docData.UID as string
          let productID = docData.Product_ID as string
          let timestamp = (docData.Timestamp as firebase.firestore.Timestamp).toDate()
          let description = docData.Description as string
          let name = docData.Name as string
  
          let blurred = docData.Blurred as boolean
          let templateColor = docData.Template_Color as string
  
          let likes = docData.Likes as number
  
          let priceCents = docData.Price_Cents as number
          let comments = docData.Comments as number
          let isPublic = docData.Public as boolean ?? true
          let productType = docData.Type as string ?? "ATC1000"
          let displaySide = docData.Side as string ?? "front"
          let sides = docData["Sides"] as Array<string> ?? ["Front"]
          let images = docData["Images"] as Array<any> ?? [{index:0, img: this.getURL(uid, productID)}]
          let isAvailable = docData.Available as boolean ?? false

  
          let product = new Product(
            uid, 
            productID, 
            description,  
            productID, 
            timestamp, 
            "", 
            blurred, 
            priceCents, 
            name, 
            templateColor, 
            likes, 
            false, 
            comments, 
            isAvailable, 
            isPublic, 
            productType, 
            displaySide, 
            sides,
            this.getURL(uid, productID),
            images
          )

            products.push(product);
          
        }
      });
      if (!filterID){
        Globals.availableTemplates = this.getTemplatesFiltered(products)
      }
      products.sort(function(a, b){
        if(a.timestamp > b.timestamp) { return -1; }
        if(a.timestamp < b.timestamp) { return 1; }
        return 0;
      })
      if (isPlatformBrowser(this.platformID)){
        sub.unsubscribe()
      }
      callback(products)
    })
  }

  shopComponent?: ShopComponent
  adminComponent?: AdminViewComponent
  homeComponent?: HomeComponent

  setFilterProducts(products: Array<Product>){
    if (this.shopComponent)
    this.shopComponent.storeProducts = products
  }


  addProduct(product: Product){
    if (this.shopComponent)
    this.shopComponent.storeProducts?.unshift(product)

    if (this.adminComponent)
    this.adminComponent.storeProducts?.unshift(product)

    if (this.homeComponent)
    this.homeComponent.storeProducts?.unshift(product)
  }

  editProduct(product: Product){

    if (this.shopComponent){
      let p = this.shopComponent.storeProducts?.find(obj => {
        return obj.productID == product.productID
      }) as Product

      if (!p){
        this.addProduct(product)
        return
      }
  
      p.name = product.name
      p.description = product.description
      p.price = product.price
      p.url = product.url
      p.images = product.images
    }

    if (this.adminComponent){
      let p = this.adminComponent.storeProducts?.find(obj => {
        return obj.productID == product.productID
      }) as Product

      if (!p){
        this.addProduct(product)
        return
      }
  
      p.name = product.name
      p.description = product.description
      p.price = product.price
      p.url = product.url
      p.images = product.images
    }

    if (this.homeComponent){
      let p = this.homeComponent.storeProducts?.find(obj => {
        return obj.productID == product.productID
      }) as Product

      if (!p){
        this.addProduct(product)
        return
      }
  
      p.name = product.name
      p.description = product.description
      p.price = product.price
      p.url = product.url
      p.images = product.images
    }
  }


  removeProduct(product: Product){

    if (this.shopComponent){
      let p = this.shopComponent.storeProducts?.filter(obj => {
        return obj.productID == product.productID
      })[0] as Product
  
      let index = this.shopComponent.storeProducts?.indexOf(p)
      if (index){
        this.shopComponent.storeProducts?.splice(index,1)
      }
    }

    if (this.adminComponent){

      let p = this.adminComponent.storeProducts?.filter(obj => {
        return obj.productID == product.productID
      })[0] as Product

      console.log(p)
  
      let index = this.adminComponent.storeProducts?.indexOf(p)
      console.log(index)

      if (index != undefined){
        console.log(index)
        this.adminComponent.storeProducts?.splice(index,1)
      }
    }

    if (this.homeComponent){
      let p = this.homeComponent.storeProducts?.filter(obj => {
        return obj.productID == product.productID
      })[0] as Product
  
      let index = this.homeComponent.storeProducts?.indexOf(p)
      if (index != undefined){
        this.homeComponent.storeProducts?.splice(index,1)
      }
    }
  }

  getBlogs(filterID?:string){

    Globals.blogs = []

    const time = firebase.firestore.Timestamp.now()


    var query = this.db.collection("Users/" + Globals.storeInfo.uid + "/Blogs", ref => ref.where("Timestamp",'<=', time).where("isAvailable",'==', true).orderBy("Timestamp", "desc"))
    
    let sub = query.valueChanges({idField : "Blog_ID"}).subscribe((docDatas) => {
      docDatas.forEach((doc) => {
  
        let docData = doc as DocumentData
  
        if (docData){
          let uid = docData.UID as string
          let title = docData.Title as string
          let timestamp = (docData.Timestamp as firebase.firestore.Timestamp).toDate()
          let isAvailable = docData.isAvailable as boolean
          let blogID = docData.Blog_ID as string
          let blogItems = docData.Blog_Items as Array<Dict<any>>
          let coverURL = docData.Cover_URL as string


          let blog = new Blog(uid, timestamp, "", isAvailable, title, blogItems, blogID, coverURL)

          Globals.blogs.push(blog);
        }
      });
      
      if (this.myCallback)
          this.myCallback()
      if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
    });
  }

  hasEmptyProperties(obj: any, ignoreKeys: Array<string>) {
    for (var key in obj) {
      if (ignoreKeys.includes(key)){
        continue
      }
      if (obj[key] == null || obj[key] == "" || obj[key] == undefined){
        return true;
      }
    }
    return false;
  }

  async linkAddress(callback: (err?: any) => any){

    let uid = (await this.isLoggedIn())?.uid

    
    let shipping = Globals.shippingInfo


    if (uid && shipping && this.hasEmptyProperties(shipping, ["unit", "company", "country_code"])){return}


    let email = shipping!.email

    if (((await this.isLoggedIn())?.isAnonymous)){
      let fData = {
        email: email,
      }
      this.functions.httpsCallable('updateAuth')(fData)
      .pipe(first())
      .subscribe(async resp => {
        
        if (typeof resp == "string"){
          await this.setAddress(uid!)
          this.auth.signInWithEmailAndPassword(email, resp).then(() => {
            // Signed in..
            callback()
          }).catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage)
              callback("An error occured, please try again.")
              // if (this.myCallback) 
              // this.myCallback()
          });
        }
        else {
          //error
          console.log(resp)
          if (resp.errorInfo.code == "auth/email-already-exists"){
              console.log("This email address is being used by another account.")
              //show popup ******
              callback("Your email is being used by another Guest order.")
          }
          else{
            console.log(resp.errorInfo.code)

            callback("An error occured, please try again.")
          }
        }
      }, err => {
        console.error({ err });
      });
    }
    else{
      await this.setAddress(uid!)
      callback()
    }
  }

  async setAddress(uid: string){
    let shipping = Globals.shippingInfo

    let data = {
      Administrative_Area: shipping?.admin_area,
      City: shipping?.city,
      Country: shipping?.country,
      First_Name: shipping?.name.split(' ').slice(0, -1).join(' '),
      Last_Name: shipping?.name.split(' ').slice(-1).join(' '),
      Phone_Num: shipping?.phone_num,
      Email: shipping?.email,
      Postal_Code: shipping?.postal,
      Street: shipping?.street,
      Company: shipping?.company ?? "",
      Unit_Number: shipping?.unit ?? ""
    }


    if (uid){
      await this.db.collection("Users/" + uid + "/Payment_Info").doc("Delivery_Address").set(data)
    }
  }

  async createPayment(storeID: string, isCard: boolean = true, callback: (order_id: string, client_secret: string, err?: any) => any, coupon?: Coupon){

    var data = {
      merchant_uid: storeID, 
      isCard: isCard,
      coupon: undefined
    }

    if (coupon){
      data.coupon = JSON.parse(JSON.stringify(coupon))
    }

    this.functions.httpsCallable('createWebIntent')(data).pipe(first())
      .subscribe(async resp => {        
          callback(resp.order_id, resp.client_secret)
      }, err => {
        callback("", "", err)
      });
  }

  async stopSubscription(callback: (id: any) => any){
    this.functions.httpsCallable('removeSubIntent')({})
      .pipe(first())
      .subscribe(async resp => { 
        console.log(resp)       
        callback(resp)
      }, err => {
        console.error({ err });
      });
  }

  async reactivateSubscription(callback: (id: any, err?: string) => any){
    this.functions.httpsCallable('reactivateSubIntent')({})
      .pipe(first())
      .subscribe(async resp => { 
        console.log(resp)       
        callback(resp)
      }, err => {
        console.error({ err });
        callback(undefined, err)
      });
  }

  async startSubscription(callback: (id: any, err?: string) => any){
    this.functions.httpsCallable('createSubIntent')({})
      .pipe(first())
      .subscribe(async resp => { 
        console.log(resp)       
        callback(resp)
      }, err => {
        callback(undefined, err)
        console.error({ err });
      });
  }

  async createBulkPayment(type: string, callback: (id: string, err?: string) => any){

    this.functions.httpsCallable('createBulkIntent')({type: type})
      .pipe(first())
      .subscribe(async resp => {        
        callback(resp)
      }, err => {
        console.error({ err });
        callback('', err)
      });

  }

  async linkCard(details: Dict<any>, callback: (err?: any) => any){
    
    var billing = Globals.billingInfo

    let uid = (await this.isLoggedIn())?.uid

    console.log("assssss")

    if (details.card && details.stripe){
      if (billing && this.hasEmptyProperties(billing, ["unit", "company", "brand", "number"])){
      
        console.log(billing)
        return
      
      }
  
      console.log("s")
  
      let stripe = details.stripe as StripeService
  
      if (this.isUndefined(billing?.unit)){
        billing!.unit = undefined
      }
  
      let name = billing?.name
      let card = details.card as StripeCardComponent
        
        var b: Dict<string | undefined> = {
          line1: billing?.street,
          city: billing?.city,
          state: billing?.admin_area,
          postal_code: billing?.postal,
          country: billing?.country_code
        }
  
        if (billing?.unit){
          b.line2 = billing.unit
        }
        
        stripe.createPaymentMethod({
          type: 'card',
          card: card!.element,
          billing_details: {
            address: b,
            name: name
          }
        })
        .subscribe((result) => {
          if (result.paymentMethod) {
            // Use the token
  
  
            var fData = {
              token: result.paymentMethod.id,
              name: billing?.name,
              line1: billing?.street,
              line2: billing?.unit ?? null,
              city: billing?.city,
              state: billing?.admin_area,
              zip: billing?.postal,
              country: billing?.country_code,
            }
        
            if (true){
              this.functions.httpsCallable('verifyCard')(fData)
              .pipe(first())
              .subscribe(async resp => {
                let data = {
                  Administrative_Area: billing?.admin_area,
                  City: billing?.city,
                  Country: billing?.country,
                  First_Name: billing?.name.split(' ').slice(0, -1).join(' '),
                  Last_Name: billing?.name.split(' ').slice(-1).join(' '),
                  Postal_Code: billing?.postal,
                  Street: billing?.street,
                  Company: billing?.company ?? "",
                  Unit_Number: billing?.unit ?? ""
                }
                if (uid){
                  await this.db.collection("Users/" + uid + "/Payment_Info").doc("Billing_Address").set(data)
                }
                callback()
              }, err => {
                callback('Card was declined')
                console.error({ err });
              });
            }
          } else if (result.error) {
            // Error creating the token
            callback(result.error.message)
            console.log(result.error.message);
          }
        });
    }
    else{
      let data = {
        Administrative_Area: billing?.admin_area,
        City: billing?.city,
        Country: billing?.country,
        First_Name: billing?.name.split(' ').slice(0, -1).join(' '),
        Last_Name: billing?.name.split(' ').slice(-1).join(' '),
        Postal_Code: billing?.postal,
        Street: billing?.street,
        Company: billing?.company ?? "",
        Unit_Number: billing?.unit ?? ""
      }

      if (uid){
        console.log("adsfg")
        await this.db.collection("Users/" + uid + "/Payment_Info").doc("Billing_Address").set(data)
      }
      if (this.myCallback) 
        this.myCallback()
    }
  }

  getBlog(blogID: string){

    Globals.selectedBlog = new Blog()

    let sub = this.db.collectionGroup("Blogs", ref => ref.where("Blog_ID",'==', blogID)).valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc) => {
        const docData = doc as DocumentData
        if (docData){
          let uid = docData.UID as string
          let title = docData.Title as string
          let timestamp = (docData.Timestamp as firebase.firestore.Timestamp).toDate()
          let isAvailable = docData.isAvailable as boolean
          let blogID = docData.Blog_ID as string
          let blogItems = docData.Blog_Items as Array<Dict<any>>
          let coverURL = docData.Cover_URL as string


          let blog = new Blog(uid, timestamp, "", isAvailable, title, blogItems, blogID, coverURL)

          Globals.selectedBlog = blog;
        }
      })
      if (this.myCallback) 
      this.myCallback()
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  

  async getAllBillingInfo(){
    let uid = (await this.isLoggedIn())?.uid
      let sub = this.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe((doc) => {
        let docData = doc as DocumentData

        if (docData){
          var card_type = (docData.card_type as string)
          if (card_type){
            card_type = card_type[0].toUpperCase() + card_type.slice(1)
          }
          let card_last_4 = docData.card_last_4 as string

          if (Globals.billingInfo){
            Globals.billingInfo!.brand = card_type
            Globals.billingInfo!.number = card_last_4
          }
          else{
            Globals.billingInfo = new BillingInfo(undefined, undefined, card_last_4, card_type)
          }
        }
        else{
          Globals.billingInfo = new BillingInfo()
        }
        this.getBillingAddress()
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
      })
  }


  async getBillingInfo(){
      let uid = (await this.isLoggedIn())?.uid
      let sub = this.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").valueChanges().subscribe((doc) => {
        let docData = doc as DocumentData

        if (docData){
          let card_type = docData.card_type as string
          let card_last_4 = docData.card_last_4 as string

          if (Globals.billingInfo){
            Globals.billingInfo!.brand = card_type
            Globals.billingInfo!.number = card_last_4
          }
          else{
            Globals.billingInfo = new BillingInfo(undefined, undefined, card_last_4, card_type)
          }
        }
        else{
          Globals.billingInfo = new BillingInfo()
        }
  
        if (this.myCallback) 
        this.myCallback()
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
      })
  }
  async getShippingAddress(oUID?: string){

    var uid = oUID
    if (!uid){
      uid = (await this.isLoggedIn())?.uid
    }

    let sub = this.db.collection("Users/" + uid + "/Payment_Info").doc("Delivery_Address").valueChanges().subscribe((doc) => {
      Globals.shippingInfo = undefined

      let docData = doc as DocumentData

      if (docData){
        let area = docData.Administrative_Area as string
        let city = docData.City as string
        let country = docData.Country as string
        let firstName = docData.First_Name as string
        let lastName = docData.Last_Name as string
        let name = firstName + " " + lastName
        let phone = docData.Phone_Num as string
        let postal_code = docData.Postal_Code as string
        let street = docData.Street as string
        var company: string | undefined = (docData.Company as string) ?? ""
        var email: string | undefined = (docData.Email as string) ?? ""
        if (company == "") company = undefined
        if (email == "") email = undefined
        var unit: string | undefined = (docData.Unit_Number as string) ?? ""
        if (unit == "") unit = undefined

        Globals.shippingInfo = new ShippingInfo(name, company, street, city, country, area, unit, postal_code, phone, undefined, email)
      }
      else{
        Globals.shippingInfo = new ShippingInfo()
      }

      if (this.myCallback) 
      this.myCallback()
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  async getBillingAddress(){

    let uid = (await this.isLoggedIn())?.uid


    let sub = this.db.collection("Users/" + uid + "/Payment_Info").doc("Billing_Address").valueChanges().subscribe((doc) => {
      // Globals.selectedBlog = undefined

      let docData = doc as DocumentData

      
      if (docData){
        let area = docData.Administrative_Area as string
        let city = docData.City as string
        let country = docData.Country as string
        let firstName = docData.First_Name as string
        let lastName = docData.Last_Name as string
        let name = firstName + " " + lastName
        let postal_code = docData.Postal_Code as string
        let street = docData.Street as string
        var company: string | undefined = (docData.Company as string) ?? ""
        if (company == "") company = undefined
        var unit: string | undefined = (docData.Unit_Number as string) ?? ""
        if (unit == "") unit = undefined

        if (Globals.billingInfo){
          Globals.billingInfo!.admin_area = area
          Globals.billingInfo!.city = city
          Globals.billingInfo!.country = country
          Globals.billingInfo!.name = name
          Globals.billingInfo!.postal = postal_code
          Globals.billingInfo!.street = street
          Globals.billingInfo!.company = company ?? ""
        }
        else{
          Globals.billingInfo = new BillingInfo(name, company, undefined, undefined, street, city, country, area, unit, postal_code, undefined)
        }

      }
      else{
        Globals.billingInfo = new BillingInfo()
      }
      if (this.myCallback) 
      this.myCallback()
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  isUndefined(element: any){
    return element == undefined || element == null || element == ""
  }

  async getTax(taxData: BillingInfo){

    // let uid = (await this.isLoggedIn())?.uid

    const country = taxData.country
    const admin = taxData.admin_area
    const street = taxData.street
    const postal = taxData.postal


    var salesTax = 0.0


    if (country === "Canada" || country === "CA"){

      console.log(admin)
      let a = Globals.matchingProvince(admin)?.abbreviation ?? "ON"
      let sub = this.db.collection("Canada_Tax_Docs").doc(a).get().subscribe((doc) => {
        // Globals.selectedBlog = undefined
  
        let taxDoc = doc.data() as DocumentData
        console.log(taxDoc)

        if (taxDoc){
          if (!this.isUndefined(taxDoc.HST)){
            salesTax += taxDoc.HST
          }
          else{
            if (!this.isUndefined(taxDoc.GST)){
                salesTax += taxDoc.GST
            }
            if (!this.isUndefined(taxDoc.PST)){
                salesTax += taxDoc.PST
            }
          }
        }
        Globals.shippingTax = salesTax
        if (this.myCallback) 
        this.myCallback()
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
      });
    }
    else if (country === "United States" || country === "US" || country === "USA"){
      Globals.shippingTax = salesTax
      if (this.myCallback) 
      this.myCallback()
    }
    else if (country === "United Kingdom" || country === "UK" || country === "GB"){
      let sub = this.db.collection("Canada_Tax_Docs").doc(admin).valueChanges().subscribe((doc) => {
        // Globals.selectedBlog = undefined
  
        let taxDoc = doc as DocumentData
  
        if (taxDoc){
          if (!this.isUndefined(taxDoc.HST)){
            salesTax += taxDoc.VAT
          }
        }
        Globals.shippingTax = salesTax
        if (this.myCallback) 
        this.myCallback()
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
      });
    }
    else if (country === "Australia" || country === "AU" || country === "AUD"){
      let sub = this.db.collection("Canada_Tax_Docs").doc(admin).valueChanges().subscribe((doc) => {
        // Globals.selectedBlog = undefined
  
        let taxDoc = doc as DocumentData
  
        if (taxDoc){
          if (!this.isUndefined(taxDoc.HST)){
            salesTax += 0.10
          }
        }
        Globals.shippingTax = salesTax
        if (this.myCallback) 
        this.myCallback()
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
      });
    }
  }

  async addToCart(mappedData: Dict<any>){

    
    let uid = (await this.isLoggedIn())?.uid



    const storeUID = Globals.storeInfo.uid

    if (!(storeUID)){
      return
    }

    let data = {
      "Cart_List" : firebase.firestore.FieldValue.arrayUnion(mappedData),
      "UID" : storeUID,
      "Timestamp" : mappedData.Timestamp
    }

    if (uid){
      await this.db.collection("Users/" + uid + "/Cart_Info").doc("Cart_List_" + storeUID).set(data, {merge : true})
    }
    this.rootComponent!.cart = undefined
    this.rootComponent?.getCart()

    let homePopup = Globals.storeInfo.popups?.find(popup => { return popup.trigger == 1})
    if (homePopup){
      console.log(homePopup)
      this.checkPopup(homePopup, uid!, () => {
        console.log(sessionStorage.getItem('product_popup'))
        if (!sessionStorage.getItem('product_popup')){
          this.rootComponent?.showPopUp(homePopup!)
          sessionStorage.setItem('product_popup', '1')
        }
        else{
          console.log("shown")
        }
      })
    }
  }

  async saveUser(mappedData: Dict<any>, callback: (success: boolean) => any){

    
    let uid = (await this.isLoggedIn())?.uid

    console.log(uid)

    if (mappedData.profile_pic){
      let picID = await this.uploadFile(mappedData, uid)
      mappedData.picID = picID
    }
    
    await this.saveUsername(mappedData, uid)

    if (Globals.storeInfo.profileLink){
      this.rootComponent?.setFavIcon(Globals.storeInfo.profileLink?.toString() ?? '')
    }
    callback(true)
  }

  async saveEmail(mappedData: Dict<any>, callback: (success: boolean) => any){

    let user = (await this.isLoggedIn())

    let email = user?.email!
    let password = mappedData.password
    let newEmail = mappedData.newEmail

    const credentials = firebase.auth.EmailAuthProvider.credential(
      email, password);

    user?.reauthenticateWithCredential(credentials).then(async (result) => {
      if (result){
        user?.updateEmail(newEmail).then(async () => {
          callback(true)
        })
      }
      else{
        callback(false)
      }
    })
  }

  async savePassword(mappedData: Dict<any>, callback: (success: boolean) => any){

    
    let user = (await this.isLoggedIn())

    let email = user?.email!
    let password = mappedData.password
    let newPassword = mappedData.newPassword

    const credentials = firebase.auth.EmailAuthProvider.credential(
      email, password);

    user?.reauthenticateWithCredential(credentials).then(async (result) => {
      if (result){
        user?.updatePassword(newPassword).then(async () => {
          callback(true)
        })
      }
      else{
        callback(false)
      }
    })
  }

  
  
  async updateProduct(mappedData: Dict<any>, product?: Product){
    let uid = (await this.isLoggedIn())?.uid ?? ""
    let productID = mappedData.productID


    if (mappedData.images?.length > 0){
      var images = new Array<{
        index: number,
        img: string
      }>()
      
      const promises = await mappedData.images.map(async (image: Dict<string>, index: number) => {
        var url = image.img
        url = await this.uploadProductImages(image.img, image.type, productID, uid) as string
        var split = url.split('&token=')
        url = split[0]
        
        if (image.type.includes('link')){
          images.push({
            img: url,
            index: index
          })
        }
      });

      console.log(images)

      await Promise.all(promises)

      images.sort(function(a, b){
        if(a.index < b.index) { return -1; }
        if(a.index > b.index) { return 1; }
        return 0;
      })

      let data = {
        "Name" : mappedData.name ?? "Post",
        "Search_Name" : mappedData.name.toLowerCase() ?? "post",
        "Description" : mappedData.description ?? "",
        "Price_Cents" : mappedData.price ?? 2000,
        "Available" : mappedData.available ?? true,
        'Public' : true,
        "Images":images
      }
      await this.db.collection("Users/" + uid + "/Products").doc(productID).update(data)
  
      // this.addProduct(product)

      let k = new Product(uid, productID, data.Description, productID, product?.timestamp, undefined, product?.blurred, data.Price_Cents, data.Name, product?.templateColor, product?.likes, product?.liked, product?.comments, data.Available, true, product?.productType, product?.displaySide, product?.supportedSides, images[0].img, images)
  
      this.editProduct(k)
    }
    return console.log("Updated Product")
  }

  async deleteProduct(mappedData: Dict<any>){
    let uid = (await this.isLoggedIn())?.uid ?? ""
    let productID = mappedData.productID
    let data = {
      "Available" : false,
    }
    await this.db.collection("Users/" + uid + "/Products").doc(productID).update(data)

    let product = new Product(undefined, undefined, undefined, productID)
    this.removeProduct(product)
    
  }

  async createProduct(mappedData: Dict<any>){

    return new Promise(async (resolve, reject) => {
      let uid = (await this.isLoggedIn())?.uid ?? ""

      let productID = this.db.collection("Users/" + uid + "/Products").doc().ref.id
  
      console.log(productID)
      let data = await this.saveProductInfo(mappedData, productID, uid) ?? {}
  
      if (mappedData.images?.length > 0){
        var images = new Array<{
          index: number,
          img: string
        }>()
        
        const promises = await mappedData.images.map(async (image: Dict<string>, index: number) => {
          var url = await this.uploadProductImages(image.img, image.type, productID, uid) as string
          var split = url.split('&token=')
          url = split[0]
          https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FProducts%2F' + productID + '%2Flink_' + productID + '.png?alt=media
          if (image.type.includes('link')){
            images.push({
              img: url,
              index: index
            })
          }
        });
        await Promise.all(promises)
  
        console.log(images)
  
        await this.db.collection("Users/" + uid + "/Products").doc(productID).update({Images:images})
  
        let url = mappedData.images.filter((obj: Dict<string>) => {
          return obj.type == "link_"
        })[0].img as string
        let product = new Product(
          uid, 
          productID, 
          data.Description, 
          productID, 
          data.Timestamp, 
          undefined, 
          data.Blurred, 
          data.Price_Cents, 
          data.Name, 
          data.Template_Color, 
          data.Likes, 
          false, 
          data.Comments, 
          data.Available, 
          data.Public, 
          data.Type, 
          data.Side,
          data.sides,
          url,
          images
        )
  
        resolve(product)  
        // Globals.products?.unshift(product)
      }
    })
  }

  async saveStore(mappedData: Dict<any>){

    
    let uid = (await this.isLoggedIn())?.uid

    if (mappedData.images?.length > 0){
      mappedData.image_list = new Array<string>()
      await mappedData.images.forEach(async (image: Dict<string>) => {
        mappedData.image_list.push(image.type)
        let url = await this.uploadStoreImages(image.img, image.type, uid)
      });
    }
    
    await this.saveStoreInfo(mappedData, uid)
  }

  private async uploadProductImages(image: string, type: string, productID: string, uid?: string) {
      const filePath = 'Users/' + uid + '/Products/' + productID + "/" + type + productID + '.png';
      let ref = this.storage.ref(filePath);

      console.log(typeof image)
      const byteArray = Buffer.from(image.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64');
  
      // const task = await this.storage.upload(filePath, byteArray);
      const task = await ref.put(byteArray);
      const url = await task.ref.getDownloadURL();

      // if (type == "theme"){
      //   Globals.userInfo!.themeLink = url
    
      //   if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      //     Globals.storeInfo!.themeLink = url
      //   }
      // }
      // else if (type == "home"){
      //   Globals.userInfo!.homeLink = url
    
      //   if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      //     Globals.storeInfo!.homeLink = url
      //   }
      // }
      // else if (type == "action"){

      //   Globals.userInfo!.actionLink = url
    
      //   if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      //     Globals.storeInfo!.actionLink = url
      //   }
      // }
      return url;
    return undefined
  }

  private async uploadStoreImages(image: string, type?: string, uid?: string) {
    if (type){
      const filePath = 'Users/' + uid + '/Store_Images/' + type + '.png';
      let ref = this.storage.ref(filePath);
      console.log(typeof image)
      const byteArray = Buffer.from(image.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64');
  
  
      // const task = await this.storage.upload(filePath, byteArray);
      const task = await ref.put(byteArray);
      const url = await task.ref.getDownloadURL();

      if (type == "theme"){
        Globals.userInfo!.themeLink = url
    
        if (Globals.storeInfo.uid == Globals.userInfo?.uid){
          Globals.storeInfo!.themeLink = url
        }
      }
      else if (type == "home"){
        Globals.userInfo!.homeLink = url
    
        if (Globals.storeInfo.uid == Globals.userInfo?.uid){
          Globals.storeInfo!.homeLink = url
        }
      }
      else if (type == "home_top"){
        Globals.userInfo!.homeLinkTop = url
    
        if (Globals.storeInfo.uid == Globals.userInfo?.uid){
          Globals.storeInfo!.homeLinkTop = url
        }
      }
      else if (type == "shop_top"){
        Globals.userInfo!.shopLinkTop = url
    
        if (Globals.storeInfo.uid == Globals.userInfo?.uid){
          Globals.storeInfo!.shopLinkTop = url
        }
      }
      else if (type == "action"){

        Globals.userInfo!.actionLink = url
    
        if (Globals.storeInfo.uid == Globals.userInfo?.uid){
          Globals.storeInfo!.actionLink = url
        }
      }
      return url;
    }
    return undefined
  }

  async saveProductInfo(mappedData: Dict<any>, productID: string, uid?: string){


    let data = {
      "Name" : mappedData.name ?? "Post",
      "Search_Name" : mappedData.name.toLowerCase() ?? "post",
      "Description" : mappedData.description ?? "",
      "Price_Cents" : mappedData.price ?? 2000,
      "UID" : uid,
      "Blurred" : false,
      "Timestamp" : new Date(),
      "Template_Color" : mappedData.templateColor ?? "black",
      "Likes" : 0,
      "Comments" : 0,
      "Has_Picture" : false,
      "Product_ID" : productID,
      "Available" : true,
      "Public" : false,
      "Type" : mappedData.productType ?? "ATC1000",
      "Side" : mappedData.displaySide ?? "front",
      "Sides" : mappedData.sides
     } as Dict<any>

    if (uid){
      
      await this.db.collection("Users/" + uid + "/Products").doc(productID).set(data)

      return data
      
      // Globals.userInfo!.slogan = mappedData.slogan
      // let matchingTheme = Globals.themes?.filter(theme => theme.name == mappedData.theme.name)[0]

      // if (matchingTheme){
      //   Globals.userInfo!.colorStyle = matchingTheme
      // }
      // Globals.userInfo!.slogan = mappedData.slogan
      // Globals.userInfo!.fontName = mappedData.font

      // if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      //   if (matchingTheme){
      //     Globals.storeInfo!.colorStyle = matchingTheme
      //     Globals.storeInfo!.fontName = mappedData.font
      //   }
      // }
    }
    return undefined
  }

  async saveStoreInfo(mappedData: Dict<any>, uid?: string){


    console.log(mappedData)


    var data: Dict<any> = {

    }

    if (mappedData.slogan){
      data["Slogan"] = mappedData.slogan ?? ""
    }

    if (mappedData.indicator){
      data["indicator"] = mappedData.indicator
    }

    if (mappedData.theme){
      data["store_style"] = mappedData.theme
    }

    if (mappedData.font){
      data["font"] = mappedData.font
    }

    if (mappedData.image_list){
      data["image_list"] = firebase.firestore.FieldValue.arrayUnion(...mappedData.image_list)
    }

    if (mappedData.banners){
      data["banners"] = mappedData.banners
    }
    if (mappedData.banner_style != undefined){
      console.log(mappedData.banner_style)
      data["banner_style"] = mappedData.banner_style ?? 0
    }

    if (uid){
      await this.db.collection("Users").doc(uid).update(data)

      if (mappedData.slogan){
        Globals.userInfo!.slogan = mappedData.slogan
      }
  
      if (mappedData.theme){
        let matchingTheme = Globals.themes?.find(theme => theme.name == mappedData.theme?.class)?.themes.find(theme => { return theme.name == mappedData.theme?.name})

        console.log(matchingTheme)
        if (matchingTheme){
          Globals.userInfo!.colorStyle = matchingTheme
        }  
        if (Globals.storeInfo.uid == Globals.userInfo?.uid){
          if (matchingTheme){
            Globals.storeInfo!.colorStyle = matchingTheme
            Globals.storeInfo!.fontName = mappedData.font
          }
        }
      }
  
      if (mappedData.font){
        Globals.userInfo!.fontName = mappedData.font
      }
  
      // if (mappedData.image_list){
      //   data["image_list"] = firebase.firestore.FieldValue.arrayUnion(...mappedData.image_list)
      // }
  
      if (mappedData.banners){
        Globals.userInfo!.banners = mappedData.banners
      }

      if (mappedData.banner_style){
        Globals.userInfo!.bannerStyle = mappedData.banner_style ?? 0
      }


      // Globals.userInfo!.themeLink = mappedData.banners
      // Globals.userInfo!.banners = mappedData.banners
      // Globals.userInfo!.banners = mappedData.banners

      Globals.storeInfo = JSON.parse(JSON.stringify(Globals.userInfo))
    }
    if (this.myCallback)
      this.myCallback()
  }

  getRandomInt(max: 100, oldVal: string) {
    let k = Math.floor(Math.random() * max)

    if (k.toString() == oldVal){
      this.getRandomInt(max, oldVal)
    }
    return k.toString();
  }

  private async uploadFile(mappedData: Dict<any>, uid?: string) {

    
    let picID = this.getRandomInt(100, Globals.storeInfo!.dpID ?? "").toString()
    console.log(picID)
    const filePath = 'Users/' + uid + '/profile_pic-' + picID + '.jpeg';
    let ref = this.storage.ref(filePath);
    const byteArray = new Buffer(mappedData.profile_pic.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64');


    // const task = await this.storage.upload(filePath, byteArray);
    const task = await ref.put(byteArray);
    const url = await task.ref.getDownloadURL();
    Globals.userInfo!.dpID = picID
    Globals.userInfo!.profileLink = url

    console.log(url) 


    if (Globals.storeInfo.uid == Globals.userInfo?.uid){
      Globals.storeInfo!.dpID = picID
      Globals.storeInfo!.profileLink = url
    }

    return picID;
  }

  async saveDomain(domain: string, callback: (success: boolean) => any, uid?: string){


    var data: {
      Custom_URL: any
    } = {
      Custom_URL: ''
    }

    if (domain && domain.trim() != ""){
      var splitURL = domain.split("://")

      let domainData = {
        host: splitURL[1],
        protocol: splitURL[0],
        status: 1
      }
      data.Custom_URL = domainData
    }
    else{
      if (Globals.userInfo?.customURL || Globals.userInfo?.customURL?.fullURL?.trim() != ""){
        data.Custom_URL = firebase.firestore.FieldValue.delete()
      }
    }

    if (uid && data){
      if (data.Custom_URL.host){
        Globals.userInfo!.customURL = new StoreDomain(data.Custom_URL.host, data.Custom_URL.protocol, data.Custom_URL.status, '')

        Globals.storeInfo = Globals.userInfo!
      }
      else{
        if (Globals.userInfo!.customURL){
          Globals.userInfo!.customURL = undefined
        }
        Globals.storeInfo = Globals.userInfo!
      }
      await this.db.collection("Users").doc(uid).update(data)
    }
    
    callback(true)
  }

  async addPopup(popup: Popup, callback: (success: boolean) => any, uid?: string){

    var popups = new Array<Popup>()
    Globals.storeInfo.popups?.forEach(p => {
      popups.push(p)
    });
    var same = popups.find(c => { return c.trigger == popup.trigger})
    if (same){
      same.ctaBtnTitle = popup.ctaBtnTitle
      same.description = popup.description
      same.exitBtnTitle = popup.exitBtnTitle
      same.fields = popup.fields
      same.title = popup.title
      same.trigger = popup.trigger
      same.type = popup.type
    }
    else{
      popups.push(popup)
    }

    var data = {
      Popups: JSON.parse(JSON.stringify(popups))
    }

    if (uid && data){
      await this.db.collection("Users").doc(uid).update(data)
      if (data.Popups){
        Globals.userInfo!.popups = data.Popups
        Globals.storeInfo = Globals.userInfo!
      }
    }
    callback(true)
  }

  async saveData(type: number, info: string, callback: (success: boolean) => any, name?: string, uid?: string){

    let data = {
      "uid" : uid,
      "name" : name,
      "info" : info,
      'type' : type
    }
    this.functions.httpsCallable('emailOrPhone')(data)
    .pipe(first())
    .subscribe(async resp => {
      if (resp as boolean && resp == true){
        callback(true)
      }
      else{
        callback(false)
      }
    }, err => {
      var errorCode = err.code;
      var errorMessage = err.message;
      callback(false)
      console.log(errorCode)
    });
  }

  async addDiscount(coupon: Coupon, callback: (success: boolean) => any, uid?: string){

    var coupons = new Array<Coupon>()
    Globals.storeInfo.coupons?.forEach(c => {
      coupons.push(c)
    });
    let same = coupons.find(c => { return c.code == coupon.code})
    if (same){
      same.amt = coupon.amt
      same.code = coupon.code
      same.products = coupon.products
      same.type = coupon.type
      same.threshold = coupon.threshold
      same.auto = coupon.auto
      same.style = coupon.style
    }
    else{
      coupons.push(coupon)
    }
    var data = {
      Coupons: JSON.parse(JSON.stringify(coupons))
    }
    if (uid && data){
      await this.db.collection("Users").doc(uid).update(data)
      if (data.Coupons){
        Globals.userInfo!.coupons = data.Coupons
        Globals.storeInfo = Globals.userInfo!
      }
    }
    callback(true)
  }

  async removeDiscount(coupon: Coupon, callback: (success: boolean) => any, uid?: string){

    var data = {
      Coupons: firebase.firestore.FieldValue.arrayRemove(JSON.parse(JSON.stringify(coupon)))
    }
    if (uid && data){
      if (data.Coupons){
        let p = Globals.storeInfo.coupons?.find(obj => {
          return obj.code == coupon.code
        })
    
        if (p){
          let index = Globals.storeInfo.coupons?.indexOf(p)
          Globals.storeInfo.coupons?.splice(index!, 1)
        }
      }
      await this.db.collection("Users").doc(uid).update(data)
    }
    else{
      console.log("shaymus")
    }
    callback(true)
  }

  async removePopup(popup: Popup, callback: (success: boolean) => any, uid?: string){

    var data = {
      Popups: firebase.firestore.FieldValue.arrayRemove(JSON.parse(JSON.stringify(popup)))
    }
    if (uid && data){
      if (data.Popups){
        let p = Globals.storeInfo.popups?.find(obj => {
          return obj.trigger == popup.trigger
        })
        if (p){
          let index = Globals.storeInfo.popups?.indexOf(p)
          Globals.storeInfo.popups?.splice(index!, 1)
        }
      }
      await this.db.collection("Users").doc(uid).update(data)
    }
    else{
      console.log("shaymus")
    }
    callback(true)
  }

  async saveUsername(mappedData: Dict<any>, uid?: string){


    var data: Dict<any> = {
      "Username" : mappedData.username,
      "Full_Name" : mappedData.full_name,
      "Bio" : mappedData.bio,
    }

    if (mappedData.picID){
      data["ProfilePicID"] = mappedData.picID
    }
    if (mappedData.socials){
      data["Socials"] = mappedData.socials ?? []
    }

    if (uid){
      await this.db.collection("Users").doc(uid).update(data)
      Globals.userInfo!.username = mappedData.username
      Globals.userInfo!.fullName = mappedData.full_name

      
      if (Globals.storeInfo.uid == Globals.userInfo?.uid){
        Globals.storeInfo!.username = mappedData.username
        Globals.storeInfo!.fullName = mappedData.full_name
      }
    }
  }


  openSnackBar(
    message: string,
    timeDuration = 1000,
    horizontal: MatSnackBarHorizontalPosition = 'right',
    vertical: MatSnackBarVerticalPosition = 'top'
  ) {
    this.snackBar.open(message, '', {
      duration: timeDuration,
      horizontalPosition: horizontal,
      verticalPosition: vertical,
    });
  }

  async changeCart(mappedData: Array<Dict<any>>){

    let uid = (await this.isLoggedIn())?.uid


    let data = {
      "Cart_List" : mappedData
    }

    const storeUID = Globals.storeInfo.uid

    if (!(storeUID)){
      return
    }

    if (uid){
      await this.db.collection("Users/" + uid + "/Cart_Info").doc("Cart_List_" + storeUID).set(data)
    }
  }

  async signOut(){

    await this.auth.signOut().then(() =>{
      Globals.userInfo = undefined
      this.rootComponent!.cart = []
      if (this.myCallback)
      this.myCallback()
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (this.errCallback)
      this.errCallback(errorMessage)
    });
    // Sign Out
  }

  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }

  registerAccount(type: string, callback: (root?: AppComponent, error?: string) => any, credentials?: Dict<string>, affiliate?: string, associated?: string){

    if (type == "Guest"){
      this.auth.signInAnonymously().then(() => {
        // Signed in..
        callback(this.rootComponent, undefined)
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          callback(undefined, errorMessage)
        });
    }

    else if(type == "Email_UP"){

      let username = credentials?.username
      let password = credentials?.password!
      let email = credentials?.email!


      console.log(username)
      console.log(email)
      console.log(password)

      this.auth.createUserWithEmailAndPassword(email, password).then(async (result) => {
        await result.user?.sendEmailVerification()
        if (result.user && username){
          Globals.isNewUser = result.additionalUserInfo?.isNewUser ?? false
          await this.setUsername(result.user?.uid, username, true, affiliate, associated)
          callback(this.rootComponent, undefined)
        }
        else{
          await this.auth.signOut()
          callback(undefined, "Unknown Error Occured. Please Try Again Later")
        }
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          callback(undefined, errorMessage)
          console.log(error)
      });  
    }
    else if(type == "Email_IN"){
      let password = credentials?.password!
      let email = credentials?.email!
      this.auth.signInWithEmailAndPassword(email, password).then(async (result) => {
        if (result.user){
          Globals.isNewUser = result.additionalUserInfo?.isNewUser ?? false
          callback(this.rootComponent, undefined)
        }
        else{
          await this.auth.signOut()
          callback(undefined, "Unknown Error Occured. Please Try Again Later")
        }
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/wrong-password") errorMessage = "The password is incorrect."
          callback(undefined, errorMessage)
          console.log(errorCode)
      }); 
    }
    else if(type == "Email_IN_USER"){

      let data = {
        "Field" : credentials?.Field,
        "Term" : credentials?.Term
      }
      this.functions.httpsCallable('auth')(data)
      .pipe(first())
      .subscribe(async resp => {
        
        if (resp as string){
          if (resp.includes("ERROR:")){
            let err = resp.replace("ERROR:", "")
            callback(undefined, err)
            console.log(err)
          }
          else{

            let email = resp as string
            let password = credentials?.password!

            this.auth.signInWithEmailAndPassword(email, password).then(async (result) => {
              // Signed in..
              if (result.user){
                Globals.isNewUser = result.additionalUserInfo?.isNewUser ?? false
                callback(this.rootComponent, undefined)
              }
              else{
                await this.auth.signOut()
                callback(undefined, "Unknown Error Occured. Please Try Again Later")

              }
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == "auth/wrong-password") errorMessage = "The password is incorrect."
                callback(undefined, errorMessage)
                console.log(errorCode)
            }); 
          }
        }
        else {
          callback(undefined, "Unknown Error Occured. Please Try Again Later")
        }
      }, err => {
        var errorCode = err.code;
        var errorMessage = err.message;
        callback(undefined, errorMessage)
        console.log(errorCode)
      });
    }
    // else if (type == "Apple"){
    //   var appleProvider = new firebase.auth.OAuthProvider('apple.com');
    //   appleProvider.addScope('email');
    //   appleProvider.addScope('name');

    //   this.auth.signInWithPopup(appleProvider).then(async (result) => {
    //     // Signed in..
    
    //     if ((result.additionalUserInfo?.isNewUser ?? false) && result.user?.uid){
    //       Globals.isNewUser = result.additionalUserInfo?.isNewUser ?? false
    //       await result.user?.sendEmailVerification()
    //       await this.setUsername(result.user?.uid, result?.additionalUserInfo?.username ?? 'user_' + uuid.toString(), (!(this.isUndefined(result?.additionalUserInfo?.username))), affiliate)
    //     }
    //     if (this.myCallback)
    //       this.myCallback()

    //     }).catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;

    //       if (this.errCallback)
    //       this.errCallback(errorMessage)
    //     });
    // }
    // else if (type == "Google"){
    //   var googleProvider = new firebase.auth.GoogleAuthProvider();
    //   googleProvider.addScope('email');
    //   googleProvider.addScope('profile');

    //   this.auth.signInWithPopup(googleProvider).then(async (result) => {
    //     // Signed in..
    //     if ((result.additionalUserInfo?.isNewUser ?? false) && result.user?.uid){
    //       await result.user?.sendEmailVerification()
    //       Globals.isNewUser = result.additionalUserInfo?.isNewUser ?? false
    //       await this.setUsername(result.user?.uid, result?.additionalUserInfo?.username ?? 'user_' + uuid().replace('-', ''), (!(this.isUndefined(result?.additionalUserInfo?.username))), affiliate)
    //     }
    //     if (this.myCallback)
    //       this.myCallback()

    //     }).catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;

    //       console.log(error)
    //       if (this.errCallback)
    //       this.errCallback(errorMessage)
    //     });
    // }
  }

  roundedFavIconLink(){
    return Globals.storeInfo.profileLink
  }

  async setUsername(uid: string, username: string, hasUsername?: boolean, affiliate?: string, store?: string){
    
    var data = {
      'Full_Name' : "GUEST",
      'Username': username,
      'Bio' : '',
      'ProfilePicID' : null,
      'notification_tokens' : [],
      'Following_List' : [],
      'Following_Count' : 0,
      'Followers_Count' : 0,
      'Posts_Count' : 0,
      'Platform' : "WEB",
      'Associated_Store' : store ?? null,
      'Timestamp' : new Date()
    }

    if (hasUsername ?? false){
      data.Full_Name = username.toUpperCase()
    }

    await this.db.collection("Users").doc(uid).set(data, {merge : true})

    if (affiliate && affiliate != ""){
      await this.db.collection("Users/" + uid + "/Payment_Info").doc("Identifiers").set({affiliate: {id: affiliate, timestamp: new Date()}}, {merge: true})
    }

    return true
  }


  async setPixel(pixel: string = ''){
    
    const uid = (await this.isLoggedIn())?.uid

    var data: Dict<any> = {
      'fb_pixel': undefined
    }


    if (pixel != ''){
      data.fb_pixel = pixel
    }
    else{
      data.fb_pixel = firebase.firestore.FieldValue.delete()
    }

    await this.db.collection("Users").doc(uid).update(data)

    return true
  }


  async checkUsername(username: string, callback: (err?: string) => any, myUID?: string){

    console.log(username)


    let sub = this.db.collection("Users", ref => ref.where("Username",'==', username)).valueChanges({idField: 'UID'}).subscribe((docs) => {
      
      if (docs && docs?.length != 0){
        console.log(docs[0])
        if (myUID == (docs[0] as DocumentData).UID){
          callback()
        }
        else{
          callback("This username already exists")
        }
      }
      else{
        callback()
      }
      sub.unsubscribe()
    });
  }

  async checkURL(url: string = "", callback: (err?: string) => any){

    if (url?.replace(" ", "") == ""){
      callback()
      return
    }

    let sub = this.db.collection("Users", ref => ref.where("Custom_URL",'==', url)).valueChanges().subscribe((doc) => {
      
      if (doc && doc?.length != 0){
        callback("This domain is already linked to a store.")
      }
      else{
        callback()
      }
      sub.unsubscribe()
    });
  }


  async authenticated(){
    const user = await this.isLoggedIn()
    if (user) {
      return true
    } else {
      return false
   }
  }



  async getCart(shouldGetProducts = false, callback: (cart: Array<ProductInCart>) => any){

    const uid = (await this.isLoggedIn())?.uid
    const storeUID = Globals.storeInfo.uid


    console.log("moooooo")
    if (!(storeUID) || !(uid)){
      callback([])
      return
    }

    var cart = new Array<ProductInCart>()

    let sub = this.db.collection("Users/" + uid + "/Cart_Info").doc("Cart_List_" + storeUID).valueChanges().subscribe(async (doc) => {
      const docData = doc as DocumentData

      if (docData){

        let cartList = docData.Cart_List as Array<Dict<any>>

        const promises = cartList.map(async (productInCart, i) => {

          let uid = productInCart.UID as string
          let size = productInCart.Size as string
          let qty = productInCart.Qty as number
          let timestamp = (productInCart.Timestamp as firebase.firestore.Timestamp).toDate()
          let productID = productInCart.Post_ID as string

          let product = new Product(
            uid, 
            productID, 
            undefined, 
            productID, 
            timestamp, 
            undefined, 
            undefined, 
            undefined, 
            undefined, 
            undefined, 
            undefined, 
            false, 
            undefined, 
            true, 
            undefined, 
            undefined, 
            undefined, 
            [],
            this.getURL(uid, productID)
          )

          let productCart = new ProductInCart(product, size, qty, false, timestamp, "", undefined)
          cart.push(productCart)
          if (shouldGetProducts)
          console.log('okmo')

          await this.getPost(productID, () => {
          }, productCart)
        })
        await Promise.all(promises)
      }
      callback(cart)
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  async getOrder(orderID: string){
    
    Globals.selectedOrder = new Order()

    let sub = this.db.collectionGroup("Orders", ref => ref.where("order_id",'==', orderID)).valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc) => {
        const docData = doc as DocumentData
        if (docData){
          let status = docData.status as string ?? "cancelled"
          let intents = docData.order_intents as Array<Dict<string>>
          
          let timestamp = (docData.timestamp as firebase.firestore.Timestamp).toDate()
          let shippingIntent = docData.shipping_intent as string
          let trackingNumber = docData.tracking_id as string
          let shippingCost = (docData.shipping_cost as number ?? 0) / 100
          let taxPercent = docData.tax as number
          let taxNum = docData.sales_tax as number
  
          let currency = docData.currency as string ?? "CAD"

          let currencySymbol = docData.currency_symbol as string
          let orderID = docData.order_id as string
          let merchantID = docData.merchant_uid as string

          var subtotal = 0.0


          let address = docData.delivery_address as Dict<string>
          let street = address.street_address as string
          let city = address.city as string
          let country = address.country as string
          let postalCode = address.postal_code as string
          let area = address.admin_area as string
          let phone = address.phone_number as string
          let name = address.full_name as string
          let company = address.company as string
          let email = address.email as string
          let country_code = address.country_code as string
          const uid = docData.uid as string

                    // let shippingCost = (doc["shipping_cost"] as? Double ?? 0.00) / 100              
                
                    
          let unitNum = address.unit_number as string
                    
          let orderAddress = new ShippingInfo(name, company, street, city, country, area, unitNum, postalCode, phone, country_code, email)
                    
          let tax = taxNum ?? (taxPercent ?? 0) * subtotal
          let totalCost = (tax ?? 0.0) + (subtotal ?? 0.0) + (shippingCost ?? 0.0)


          let order = new Order(orderID, timestamp, [], status, intents, totalCost, tax, subtotal, orderAddress, currency, currencySymbol, trackingNumber, shippingIntent, shippingCost, uid, merchantID)


          Globals.selectedOrder = order


          this.getOrderProducts(order, uid, 0, true)
        }
        else{
          Globals.selectedOrder = new Order()
        }
      })
      if (this.myCallback) 
          this.myCallback()
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  async getOrders(callback: (orders: Array<Order>) => any){
    
    const uid = (await this.isLoggedIn())?.uid
    const storeUID = Globals.storeInfo.uid

    if (!(storeUID) || !(uid)){
      if (this.myCallback)
      this.myCallback()
      return
    }

    var query = this.db.collection("Users/" + uid + "/Orders", ref => ref.where("merchant_uid",'==', storeUID).orderBy("timestamp", "desc"))


    var orders = new Array<Order>()
    
    let sub = query.valueChanges().subscribe((docDatas) => {

      docDatas.forEach((doc, index) => {
        const docData = doc as DocumentData
        if (docData){
          let status = docData.status as string ?? "cancelled"
          let intents = docData.order_intents as Array<Dict<string>>
          
          let timestamp = (docData.timestamp as firebase.firestore.Timestamp).toDate()
          let shippingIntent = docData.shipping_intent as string
          let trackingNumber = docData.tracking_id as string
          let shippingCost = docData.shipping_cost as number
          let taxPercent = docData.tax as number
          let taxNum = docData.sales_tax as number
  
          let currency = docData.currency as string ?? "CAD"

          let currencySymbol = docData.currency_symbol as string
          let orderID = docData.order_id as string
          let merchantID = docData.merchant_uid as string

          var subtotal = 0.0


          let address = docData.delivery_address as Dict<string>
          let street = address.street_address as string
          let city = address.city as string
          let country = address.country as string
          let postalCode = address.postal_code as string
          let area = address.admin_area as string
          let phone = address.phone_number as string
          let name = address.full_name as string
          let company = address.company as string
          let email = address.email as string
          let country_code = address.country_code as string
          const uid = docData.uid as string


                    // let shippingCost = (doc["shipping_cost"] as? Double ?? 0.00) / 100              
                
                    
          let unitNum = address.unit_number as string
                    
          let orderAddress = new ShippingInfo(name, company, street, city, country, area, unitNum, postalCode, phone, country_code, email)
                    

          let tax = taxNum ?? (taxPercent ?? 0) * subtotal
          let totalCost = (tax ?? 0.0) + (subtotal ?? 0.0) + (shippingCost ?? 0.0)

          let order = new Order(orderID, timestamp, [], status, intents, totalCost, tax, subtotal, orderAddress, currency, currencySymbol, trackingNumber, shippingIntent, shippingCost, uid, merchantID)


          orders.push(order)


          this.getOrderProducts(order, uid, index)
    
        }
      })
      callback(orders)
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  getOrderProducts(order: Order, uid: string, orderIndex: number, isSelectedOrder?: boolean){
    let sub = this.db.collection("Users/" + uid + "/Orders/" + order.orderID + "/Purchases").valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc, index) => {
        const docData = doc as DocumentData
        if (docData){

          let productID = docData.productID as string
          let quantity = docData.quantity as number
          let size = docData.size as string
          let status = docData.status as string
          let price = (docData.amount as number) / quantity
          let timestamp = (docData.timestamp as firebase.firestore.Timestamp).toDate()

          let product = new Product(
            uid, 
            productID, 
            undefined, 
            productID, 
            timestamp, 
            undefined, 
            undefined, 
            price, 
            undefined, 
            undefined, 
            undefined, 
            false, 
            undefined, 
            true, 
            undefined, 
            undefined, 
            undefined, 
            [],
            this.getURL(uid, productID)
          )

          
          let orderProduct = new ProductInCart(product, size, quantity, false, timestamp, undefined, undefined)

          order.products.push(orderProduct)

          this.getPost(productID, () => {
          }, undefined, orderProduct)
        }
      })
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  getMiscStats(uid: string){

    Globals.views = []
    Globals.dropCarts = []
    let sub = this.db.collection("Users/" + uid + "/Daily_Info/").valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc, index) => {
        const docData = doc as DocumentData
        if (docData){
          let time = docData.time as Array<Date>
          let timestamp = (docData.timestamp as firebase.firestore.Timestamp).toDate()
          let length = time.length
          Globals.views?.push({views: length, timestamp: timestamp})
        }
      })
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();

      let sub2 = this.db.collectionGroup("Cart_Info", ref => ref.where("UID", "==", uid)).valueChanges().subscribe((docDatas) => {
        
        docDatas.forEach((doc, index) => {
          const docData = doc as DocumentData
          if (docData){
            let timestamp = (docData.Timestamp as firebase.firestore.Timestamp)?.toDate()
            Globals.dropCarts?.push({dropCarts: 1, timestamp: timestamp})
          }
        })
        if (isPlatformBrowser(this.platformID))
        sub2.unsubscribe();
        if (this.miscCallback) 
            this.miscCallback()
      });
    });
  }

  getAffiliateStats(uid: string, callback: (stats: any) => any){

    let stats = new Array<any>()

    let sub = this.db.collectionGroup("Payment_Info", ref => ref.where("affiliate.id", '==', uid)).valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc, index) => {
        const docData = doc as DocumentData
        if (docData){
          let affiliate = docData.affiliate as Dict<any>
          let timestamp = (affiliate.timestamp as firebase.firestore.Timestamp).toDate()
          let id = affiliate.id as string
          stats.push({affiliate: id, timestamp: timestamp})
        }
      })
      callback(stats)
      if (isPlatformBrowser(this.platformID))
      sub.unsubscribe();
    });
  }

  getSoldProducts(uid: string = ""){
    
    Globals.productsSold = []

    let sub = this.db.collectionGroup("Purchases", ref => ref.where("merchant_uid",'==', uid).where("status",'==', 'confirmed')).valueChanges().subscribe((docDatas) => {
      docDatas.forEach((doc, index) => {
        const docData = doc as DocumentData
        if (docData){
          let productID = docData.productID as string
          let quantity = docData.quantity as number
          let size = docData.size as string
          let price = (docData.amount as number) / quantity
          let profit = docData.moneyToMerchant as number / 100
          let timestamp = (docData.timestamp as firebase.firestore.Timestamp)?.toDate()

          let product = new Product(
            uid, 
            productID, 
            undefined, 
            productID, 
            timestamp, 
            undefined, 
            undefined, 
            price / 100, 
            undefined, 
            undefined, 
            undefined, 
            false, 
            undefined, 
            true, 
            undefined, 
            undefined, 
            undefined, 
            [],
            this.getURL(uid, productID)
          )

          
          let orderProduct = new ProductInCart(product, size, quantity, false, timestamp, undefined, undefined, profit ?? 0)

          Globals.productsSold?.push(orderProduct)
          console.log('okro')
          this.getPost(productID, () => {

          }, undefined, undefined, orderProduct)
        }
      })
      if (this.saleCallback) 
              this.saleCallback()
            if (isPlatformBrowser(this.platformID))
              sub.unsubscribe();
    });
  }

  async getPost(productID: string, callback: () => any, cartProduct?: ProductInCart, orderProduct?: ProductInCart, saleProduct?: ProductInCart, selectedProduct?: ProductInCart){
    
    var query = this.db.collectionGroup("Products", ref => ref.where("Product_ID",'==', productID))
    if (!(saleProduct && Globals.productsSold)){
      query = this.db.collectionGroup("Products", ref => ref.where("Product_ID",'==', productID).where("Public",'==', true))
    }
    let sub = query.valueChanges().subscribe((docDatas) => {

      if (docDatas.length == 0){

        if (this.myCallback) 
          this.myCallback()
        if (isPlatformBrowser(this.platformID))
          sub.unsubscribe();
      }

      docDatas.forEach((doc) => {
        const docData = doc as DocumentData
        if (docData){
          let uid = docData.UID as string
          let productID = docData.Product_ID as string
          let timestamp = (docData.Timestamp as firebase.firestore.Timestamp).toDate()
          let description = docData.Description as string
          let name = docData.Name as string
  
          let blurred = docData.Blurred as boolean
          let templateColor = docData.Template_Color as string
  
          let likes = docData.Likes as number
  
          let comments = docData.Comments as number
          let isPublic = docData.Public as boolean ?? true
          let productType = docData.Type as string ?? "ATC1000"
          let displaySide = docData.Side as string ?? "front"
          let sides = docData["Sides"] as Array<string> ?? ["Front"]
          let priceCents = docData.Price_Cents as number
          let isAvailable = docData.Available as boolean ?? false

          let images = docData["Images"] as Array<any> ?? [{index:0, img: this.getURL(uid, productID)}]

          let product = new Product(
            uid, 
            productID, 
            description, 
            productID, 
            timestamp, 
            "", 
            blurred, 
            priceCents,
            name, 
            templateColor, 
            likes, 
            false, 
            comments, 
            isAvailable, 
            isPublic, 
            productType, 
            displaySide, 
            sides,
            this.getURL(uid, productID),
            images
          )


          if (saleProduct && Globals.productsSold != undefined){
            saleProduct.product = product;
          }
          else{
            if (cartProduct){
              cartProduct.product = product
            }
            else{
              if (orderProduct){
                product.price = orderProduct.product?.price ?? 0
                orderProduct.product = product
              }
              else if (selectedProduct){
                console.log(product)
                selectedProduct.product = product;
              }
            if (isPlatformBrowser(this.platformID))
              sub.unsubscribe();
            }
          }
        }
        callback()
      })
    });
  }
  
  getTemplatesFiltered(products: Array<Product>){
    

    Globals.templates = [...new Map(Globals.templates.map(item => [item.productCode, item])).values()]
    console.log(Globals.templates)
    return Globals.templates.filter(
      (template, i) => products.some(product => product.productType === template.productCode));
  }
  
  getURL(uid: string, productID: string){
      return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FProducts%2F' + productID + '%2Flink_' + productID + '.png?alt=media'
  }

  getProfileURL(uid: string, dpID: string){
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2Fprofile_pic-' + dpID + '.jpeg?alt=media'
  }

  getThemeURL(uid: string){
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "theme" + '.png?alt=media'
  }

  getDefaultURL(){

    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media'
  }


  getHomeURL(uid: string){
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "home" + '.png?alt=media'
  }

  getHomeTopURL(uid: string){
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "home_top" + '.png?alt=media'
  }

  getShopTopURL(uid: string){
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "shop_top" + '.png?alt=media'
  }

  getActionURL(uid: string){
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' + uid + '%2FStore_Images%2F' + "action" + '.png?alt=media'
  }
  
  
  getAltURL(){
    return 'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media'
  }

  getTemplate(templateID: string){

    Globals.selectedTemplate = undefined

    let sub = this.db.collection("Templates", ref => ref.where("Code",'==', templateID).orderBy("index", "asc")).valueChanges({idField : "TemplateID"}).subscribe((docDatas) => {

      docDatas.forEach((doc) => {
  
        var docData = doc as DocumentData
  
        if (docData){
          let type = doc.TemplateID
          let testingAccounts = docData["testingAccounts"] as Array<string>
          let isAvailable = docData["isAvailable"] as boolean

          // guard isAvailable ?? false || testingAccounts?.contains(pUserInfo.uid ?? "") ?? false else{
              
          //     continue
          //   }
          
          let display = docData["Display_Name"] as string
          let info = docData["Info"] as string
          let supportedSides = docData["Supported_Sides"] as Array<Dict<any>>
          
          if (!supportedSides || supportedSides.length == 0){
            return
          }

          let vari = docData["Colors"] as Array<Dict<any>>
          
          let minPrice = docData["Min_Price_USD"] as number
          let extra = docData["Extra_Cost_USD"] as number
          let code = docData["Code"] as string
          let sizes = docData["Sizes"] as Array<string>
          let category = docData["category"] as string
          let onlyBulk = docData["Only_Bulk"] as boolean
          let bulkPrice = docData["Bulk_Price_USD"] as number
          let bulkSuggestPrice = docData["Bulk_Suggest_Price_USD"] as number
          let bulkUnit = docData["Bulk_Unit"] as number
          let has3D = docData["has3D"] as boolean
          let moreInfo = (docData["More_info"] as string)
          // let discountInfo = docData["Discount"] as Dict<any>
          // let discountedUsers = discountInfo["Artists"] as Array<string>
          // let discountedPrice = discountInfo.Minimum_Price_USD as number
          // let discountCodes = discountInfo.Discount_Codes as Array<Dict<any>>   
          
          const template = new Template(
            type,
            display,
            info,
            [],
            sizes,
            minPrice,
            code,
            category,
            moreInfo,
            false,
            [],
            extra,
            bulkPrice,
            bulkUnit,
            bulkSuggestPrice,
            onlyBulk,
            has3D
          );

          supportedSides.forEach((side) => {
            let name = side["Name"] as string
            let height = side["HeightCM"] as number
            let width = side["WidthCM"] as number
            let widthMultiplier = side["WidthMultiplier"] as number
            let centerYConst = side["CenterYConst"] as number
            let centerXConst = side["CenterXConst"] as number
            let rotation = side["Rotation"] as number
            let useReverseAspect = side["useReverseAspect"] as boolean ?? false
            
            let supportedSide = new TemplateSide(
              name,
              height,
              width,
              widthMultiplier,
              centerYConst,
              centerXConst,
              useReverseAspect,
              rotation
            )
            template.supportedSides.push(supportedSide)
          })

          vari.forEach((v) => {
            let code = v["Code"] as string
            let display = v["Display"] as string
            let img = (v["IMG"] as firebase.firestore.Blob)?.toBase64()
            let backImg = (v["IMG_BACK"] as firebase.firestore.Blob)?.toBase64()
            let rgb = v["RGB"] as Array<number>
            let color = new Color(
              code,
              display,
              rgb,
              img,
              backImg
            )
            template.colors.push(color)
          })
          Globals.selectedTemplate = template
        }
      });
      if (this.myCallback)
          this.myCallback()
          if (isPlatformBrowser(this.platformID))
          sub.unsubscribe();
      });
  }


  getTemplates(){

    Globals.templates = []



    let sub = this.db.collection("Templates", ref => ref.orderBy("index", "asc")).valueChanges({idField : "TemplateID"}).subscribe((docDatas) => {

      docDatas.forEach((doc) => {
  
        var docData = doc as DocumentData
  
        if (docData){
          let type = doc.TemplateID
          let testingAccounts = docData["testingAccounts"] as Array<string>
          let isAvailable = docData["isAvailable"] as boolean

          // guard isAvailable ?? false || testingAccounts?.contains(pUserInfo.uid ?? "") ?? false else{
              
          //     continue
          //   }
          
          let display = docData["Display_Name"] as string
          let info = docData["Info"] as string
          let supportedSides = docData["Supported_Sides"] as Array<Dict<any>>
          
          if (!supportedSides || supportedSides.length == 0){
            return
          }

          let vari = docData["Colors"] as Array<Dict<any>>
          
          let minPrice = docData["Min_Price_USD"] as number
          let extra = docData["Extra_Cost_USD"] as number
          let code = docData["Code"] as string
          let sizes = docData["Sizes"] as Array<string>
          let category = docData["category"] as string
          let has3D = docData["has3D"] as boolean
          let onlyBulk = docData["Only_Bulk"] as boolean
          let bulkPrice = docData["Bulk_Price_USD"] as number
          let bulkSuggestPrice = docData["Bulk_Suggest_Price_USD"] as number
          let bulkUnit = docData["Bulk_Unit"] as number
          let moreInfo = (docData["More_info"] as string)
          // let discountInfo = docData["Discount"] as Dict<any>
          // let discountedUsers = discountInfo["Artists"] as Array<string>
          // let discountedPrice = discountInfo.Minimum_Price_USD as number
          // let discountCodes = discountInfo.Discount_Codes as Array<Dict<any>>   
          
          const template = new Template(
            type,
            display,
            info,
            [],
            sizes,
            minPrice,
            code,
            category,
            moreInfo,
            false,
            [],
            extra,
            bulkPrice,
            bulkUnit,
            bulkSuggestPrice,
            onlyBulk,
            has3D
          );

          supportedSides.forEach((side) => {
            let name = side["Name"] as string
            let height = side["HeightCM"] as number
            let width = side["WidthCM"] as number
            let widthMultiplier = side["WidthMultiplier"] as number
            let centerYConst = side["CenterYConst"] as number
            let centerXConst = side["CenterXConst"] as number
            let rotation = side["Rotation"] as number
            let useReverseAspect = side["useReverseAspect"] as boolean ?? false
            
            let supportedSide = new TemplateSide(
              name,
              height,
              width,
              widthMultiplier,
              centerYConst,
              centerXConst,
              useReverseAspect,
              rotation
            )
            template.supportedSides.push(supportedSide)
          })

          vari.forEach((v) => {
            let code = v["Code"] as string
            let display = v["Display"] as string
            let img = (v["IMG"] as firebase.firestore.Blob)?.toBase64()
            let backImg = (v["IMG_BACK"] as firebase.firestore.Blob)?.toBase64()

            let rgb = v["RGB"] as Array<number>
            let color = new Color(
              code,
              display,
              rgb,
              img,
              backImg
            )
            template.colors.push(color)
          })
          
          if (!Globals.templates.includes(template)){
            Globals.templates.push(template)
          }
        }
      });
      if (this.myCallback)
        this.myCallback()
        if (isPlatformBrowser(this.platformID))
        sub.unsubscribe();
    });
  }
}
