import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { AppComponent } from '../app.component';
import { Globals } from '../globals';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';
import { NgxSpinnerService } from "ngx-spinner";
import { Country } from '../models/shipping-country.model';
import { Product } from '../models/product.model';
import { DesignComponent } from '../design/design.component';
import { ProductInCart } from '../models/product-in-cart.model';
import { SocialFormComponent } from '../social-form/social-form.component';
import { Inventory } from '../models/inventory.model';
import { Template } from '../models/template.model';
import { InventoryBuyComponent } from '../inventory-buy/inventory-buy.component';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { StoreSetupComponent } from '../store-setup/store-setup.component';
import { RoutingService } from '../services/routing.service';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { CouponInfoComponent } from '../coupon-info/coupon-info.component';
import { Coupon } from '../models/coupon.model';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Banner } from '../models/banner.model';
import { EditBannerComponent } from '../edit-banner/edit-banner.component';
import { Popup } from '../models/popup.model';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import {PageEvent} from '@angular/material/paginator'
import { EditInventoryComponent } from '../edit-inventory/edit-inventory.component';
import { MatTable } from '@angular/material/table';
import { Order } from '../models/order.model';
import { ViewOrderAdminComponent } from '../view-order-admin/view-order-admin.component';
import { ViewAllOrderAdminComponent } from '../view-all-order-admin/view-all-order-admin.component';
import { Row } from '../models/row.model';
import { LayoutBuilderComponent } from '../layout-builder/layout-builder.component';
import { Page } from '../models/page.model';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { MapPopupComponent } from '../map-popup/map-popup.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotateY(0)' })),
      state('rotated', style({ transform: 'rotateY(-180deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ])
  ]
})
export class AdminViewComponent implements OnInit, OnDestroy {
  
  public chartOptions?: Partial<ChartOptions>;



activeAffiliates = new Array<{
  affiliate: string,
  timestamp: Date
}>()


items: Array<Dict<any>> = []
miscItems: Array<Dict<any>> = []
signedIn = false
bankInfo?: any = undefined
subInfo?: any = undefined
canTrial?: boolean = true

invTitle = 'FULFILLED BY THRED'


headerName(h: string){
  return this.storeInfo()?.pages?.find(p => p.id == h)?.title ?? ''
}

socials(){
  return Globals.socials
}

toolTip(logo: {
  name: string;
  img: string;
}){

  let same = (this.storeForm.controls.socials.value as Array<any>)?.filter(social => { return social.name == logo.name})


  if (same && same.length !== 0){

    return same[0]
  }

  return {
    name: 'No ' + logo.name + ' URL set',
    link: "",
  }
}

couponHeader(coupon: Coupon){
  if (coupon.type == 'product'){
    return 'Applied to ' + coupon.products.length + ' product(s)'
  }
  else if (coupon.type == 'order_val'){
    return 'Order ≥ ' + this.formatPrice(coupon.threshold, true)
  }
  else if (coupon.type == 'order_qty'){
    return 'Order ≥ ' + coupon.threshold + " products"
  }
  return ''
}

customInv(){
  return this.inventory?.filter(i => { return i.isCustom}) ?? []
}

thredInv(){
  return this.inventory?.filter(i => { return !i.isCustom}) ?? []
}


popupHeader(popup: Popup){
  if (popup.trigger == 0){
    return 'Presents on initial store visit'
  }
  else if (popup.trigger == 1){
    return 'Presents when "Add to Cart" pressed'
  }
  // else if (coupon.type == 'order_qty'){
  //   return 'Order ≥ ' + coupon.threshold + " products"
  // }
  return ''
}

matchingType(id: string){
  return Globals.types.find(type => { return type.id == id})
}


showLinkModal(){

  const modalRef = this.modalService.open(SocialFormComponent);

  modalRef.componentInstance.linkImg = '/assets/domain.png'
  modalRef.componentInstance.name = 'My Domain'
  modalRef.componentInstance.isDomain = true


  if (Globals.storeInfo.customURL){
    modalRef.componentInstance.socialForm.controls.link.setValue(Globals.storeInfo.customURL?.fullURL)
  }

  let sub = modalRef.dismissed.subscribe((domain: string) => {
    sub.unsubscribe()
    if (domain != '0'){
      if ((domain != Globals.storeInfo.customURL?.fullURL)){
        if (domain == undefined) {return}
        this.loadService.saveDomain(domain, success => {
          if (success){
            if (domain == ''){
              this.storeForm.controls.custom_url.setValue(null)
              this.toast("Custom Domain Removed!")
              return
            }
            this.storeForm.controls.custom_url.setValue(domain)
            this.toast("Custom Domain Saved!")
          } 
        }, Globals.storeInfo.uid)
      }
    }
  })
}

autoCoupon(product: Product){
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

intValue?: number = undefined


deletePage(page: Page){

  this.openPopup("Are you sure?", "Your page '" + page.title +  "' will be removed forever. This action cannot be undone.", '', 'Yes, Remove', 'Never Mind', async () => {
    this.loadService.deletePage(page, success => {
      this.toast("Page Removed!")      
    }, Globals.storeInfo.uid)
  })
}


urlText(){
  var url = 'https://shopmythred.com/' + this.storeInfo().username


  if (this.storeInfo().customURL?.status == 2){
    url = this.storeInfo().customURL?.fullURL != undefined ? this.storeInfo().customURL?.fullURL! : url
  }

  return url
}

showLayoutModal(page?: Page){


  const modalRef = this.dialog.open(LayoutBuilderComponent, {
    width: '97.5vw',
    height: '97.5vh',
    maxHeight: '100vh',
    maxWidth: '100vw',
    panelClass: 'app-full-bleed-sm-dialog',
    data: {
      page: page,
      rootComponent: this.rootComponent, 
      admin: this
    },
  });

  let sub = modalRef.afterClosed().subscribe(async (layouts: any) => {
    sub.unsubscribe()
    if (layouts && layouts != '0'){
      this.intValue = 20
      var isFinished = false
      let interval = setInterval(() => {
        if (this.intValue){
          if (!isFinished){
            if (this.intValue < 80){
              this.intValue += 1
            }
            else{
              this.intValue = 80
            }
          }
          else{
            this.intValue = 100
            clearInterval(interval)
          }
        }
      }, 0.1);


      const promises = layouts.page.rows.map(async (r: Row) => {
        if (r.type == 1) {
          let promises2 = (r.imgs ?? []).map(async (i: string, index: number) => {
            if (
              !this.loadService.isBase64(i?.replace(/^[\w\d;:\/]+base64\,/g, ''))
            ) {
              var im = (await this.getBase64ImageFromUrl(i?.toString())) as any;
              (r.imgs ?? [])[index] = im;
            }
          });
          await Promise.all(promises2);
        }
      });
      await Promise.all(promises);
  
      if (layouts.page){
        this.loadService.addLayout(
          layouts.page,
          (success) => {
            this.toast("Page Added!")      
            isFinished = true
            this.intValue = undefined
          }, 
          Globals.storeInfo.uid
        );
      }
    }
    else if (layouts == '0'){
      this.toast("Unable to save Page! Try Again Later.")      
    }
  });
}

async getBase64ImageFromUrl(imageUrl: string) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'arraybuffer';

    xhr.onerror = function (e) {
      alert('error');
    };

    xhr.onload = function (e) {
      if (this.status == 200) {
        var uInt8Array = new Uint8Array(this.response);
        var i = uInt8Array.length;
        var biStr = new Array(i);
        while (i--) {
          biStr[i] = String.fromCharCode(uInt8Array[i]);
        }
        var data = biStr.join('');
        var base64 = window.btoa(data);

        xhr.onerror = function (e) {
          reject(e);
        };

        resolve('data:image/png;base64,' + base64);
      }
    };
    xhr.send();
  });
}

showPopupModal(popup?: Popup){


  const modalRef = this.dialog.open(EditPopupComponent, {
    width: '800px',
    data: {
      editPopup: popup, 
    },
  });

  let sub = modalRef.afterClosed().subscribe(popup => {
    sub.unsubscribe()
    if (popup && popup != '0'){
      this.loadService.addPopup(popup, success => {
        if (success){
          this.toast("Popup Saved!")
        } 
      }, Globals.storeInfo.uid)
    }
  });
}

newInventory(inv?: Inventory){
  const modalRef = this.dialog.open(EditInventoryComponent, {
    width: '800px',
    data: {
      inv: inv, 
    },
  });

  let sub = modalRef.afterClosed().subscribe((inventory: Inventory) => {
    sub.unsubscribe()
    if (inventory){
      let index = this.inventory?.findIndex(i => { return i.id == inventory.id})
      if (index == -1){
        this.inventory?.unshift(inventory)
      }
      else{
        this.inventory![index!] = inventory
      }
      this.toast("Inventory Added!")
    } 
    else if (inventory){
      this.toast("Unable to add Inventory!")
    }
  });
}

deleteInventory(inv?: Inventory){
  this.openPopup("Are you sure?", "Your inventory '" + inv?.name +  "' will be removed forever. All products using this inventory will also be unavailable.", inv?.img ?? '', 'Yes, Remove', 'Never Mind', async () => {
    await this.loadService.removeInv(inv!)
    let index = this.inventory?.findIndex(i => { return i.id == inv?.id})
    if (index != undefined && index != -1){
      this.inventory?.splice(index, 1)
      this.toast("Inventory Removed")
    }
  })
}



emailSubs?: Array<{
  email: string,
  name: string,
  timestamp: string,
}>

phoneSubs?: Array<{
  phone: string,
  name: string,
  timestamp: string,
}>

showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;


pieInfo?: Array<Dict<any>>
addSubs(){
  if (!this.emailSubs || !this.phoneSubs) { return }
  this.pieInfo = [
    {
      name: 'Email Subscribers',
      value: this.emailSubs?.length ?? 0
    },
    {
      name: 'SMS Subscribers',
      value: this.phoneSubs?.length ?? 0
    }
  ]
}


emails(){
  return this.emailSubs?.slice(this.selectedEmailPageIndex*10, this.selectedEmailPageIndex*10+10)
}

numbers(){
  return this.phoneSubs?.slice(this.selectedPhonePageIndex*10, this.selectedPhonePageIndex*10+10)
}



emailLength(){
  return Math.ceil((this.emailSubs?.length ?? 0) / 10)
}

emailLengthTotal(){
  return Math.ceil(this.emailSubs?.length ?? 0)
}

phoneLength(){
  return Math.ceil((this.phoneSubs?.length ?? 0) / 10)
}

phoneLengthTotal(){
  return Math.ceil(this.phoneSubs?.length ?? 0)
}


selectedEmailPageIndex = 0
selectedPhonePageIndex = 0

changePhoneDisplayColumns(page:PageEvent)
  {
    this.selectedPhonePageIndex = page.pageIndex
    this.cdr.detectChanges()
}

changeEmailDisplayColumns(page:PageEvent)
  {

    this.selectedEmailPageIndex = page.pageIndex
    this.cdr.detectChanges()
}

async deletePopup(popup: Popup, i: number){
  


  this.openPopup("Are you sure?", "Your popup '" + popup.title +  "' will be removed forever.", 'MATICON:wysiwyg:', 'Yes, Remove', 'Never Mind', async () => {
    await this.loadService.removePopup(popup, success => {
      this.toast("Popup Removed")
    }, Globals.storeInfo.uid)
  })
}

showCouponModal(coupon?: Coupon){


  const modalRef = this.dialog.open(CouponInfoComponent, {
    width: '800px',
    data: {
      coupons: Globals.storeInfo.coupons, 
      editCoupon: coupon, 
      products: this.storeProducts?.filter(product => { return this.inventory?.filter(inv =>{ return inv.code == product.productType && inv.amount > 0}).length != 0})
    },
  });

  let sub = modalRef.afterClosed().subscribe(coupon => {
    sub.unsubscribe()
    if (coupon != '0'){
      if ((!Globals.storeInfo?.coupons?.find(c => { return c == coupon}))){
        if (coupon == undefined) {return}

        this.loadService.addDiscount(coupon, success => {
          if (success){
            this.toast("Coupon Saved!")
          } 
        }, Globals.storeInfo.uid)
      }
    }
  });
}

async deleteCoupon(coupon: Coupon, i: number){
  
  var color = ''
  if ((coupon?.amt ?? 0) <= 0.2){
    color = 'rgb(165, 101, 42)'
  }
  else if ((coupon?.amt ?? 0) > 0.2 && (coupon?.amt ?? 0) <= 0.5){
    color = 'silver'
  }
  else{
    color = 'gold'
  }

  this.openPopup("Are you sure?", "Your coupon '" + coupon.code +  "' will be removed forever.", 'MATICON:' + this.matchingType(coupon.type)?.icon + ':' + color, 'Yes, Remove', 'Never Mind', async () => {
    await this.loadService.removeDiscount(coupon, success => {
      this.toast("Coupon Removed")
    }, Globals.storeInfo.uid)
  })
}

domainNotSetUp(){
  if (Globals.storeInfo.customURL?.status == 1){
    return true
  }
  else if (Globals.storeInfo.customURL?.status == 2){
    return false
  }
  else{
    return undefined
  }
}

showSocialModal(logo: {
  name: string;
  img: string;
}){

  const modalRef = this.modalService.open(SocialFormComponent);

  let same = (this.storeForm.controls.socials.value as Array<any>)?.filter(social => { return social.name == logo.name})
  var prefix = ""
  if (logo.name.toLowerCase() == "tiktok"){
    prefix = "@"
  }
  modalRef.componentInstance.socialForm.controls.link.setValue(logo.name.toLowerCase() + ".com/" + prefix)

  if (same && same.length !== 0){

    modalRef.componentInstance.socialForm.controls.link.setValue(same[0].link)
  }
  modalRef.componentInstance.linkImg = logo.img
  modalRef.componentInstance.name = logo.name

  let sub = modalRef.dismissed.subscribe((url: string) => {
    sub.unsubscribe()
    let array = (this.storeForm.controls.socials.value as Array<{
      name: string,
      link: string,
    }>)
    if (url != '0' && url != '' && url != 'undefined'){

      let same = array?.filter(social => { return logo.name == social.name})

      if (!same || (same.length == 0)){
        if (array != undefined || array != null){
          array.push({
            name: logo.name,
            link: url
          })
        }
        else{
          array = [{
            name: logo.name,
            link: url
          }]
        }
        
      }
      else{
        array[array.indexOf(same[0])].link = url
      }
    }
    else if (url != '0'){
      array.forEach((element,index)=>{
        if(element.name == logo.name) array.splice(index,1);
     });
    }
    this.storeForm.controls.socials.setValue(array)
  })

}


  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private rootComponent: AppComponent,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private _router: Router,
    private sanitizer: DomSanitizer,
    private clipboard: Clipboard,
    private routingService: RoutingService,
    private dialog: MatDialog,
  ) {

    (<any>window).openCard= this.openCard.bind(this);

      Globals.userInfo = undefined
      Globals.selectedCurrency = undefined
      Globals.themes = undefined
      Globals.productsSold = undefined
      Globals.views = undefined
      Globals.dropCarts = undefined
      Globals.billingInfo = undefined



      // this.billingInfo().
  }

  openCard(coords: Dict<any>){

    console.log(coords.type)
    console.log(coords)


  }


  ngOnDestroy(): void {
    this.loadService.adminComponent = undefined
  }

  getBillingAddressThird(){
    var address = this.billingInfo()?.street
    var unit = this.billingInfo()?.unit
    if (unit) address += ". " + unit
    return address
  }

  getBillingAddressFourth(){
    return this.billingInfo()?.city + ", " + this.billingInfo()?.admin_area + ". " + this.billingInfo()?.postal
  }


  getBillingAddressSecond(){
    var name = this.billingInfo()?.name
    var company = this.billingInfo()?.company
    if (company) name += " - " + company
    return name
  }

  state: string = 'default';

  leapYear(year: number){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  organizeMonth(set: Array<Dict<any>>, type: string){

    var months = new Array<{
      name: string,
      value: number
    }>()

    //SPLIT SALES INTO SEPERATE ARRAYS BY YEAR

    let sets = Array<Array<Dict<any>>>()

      set.forEach((data) => {
        let timestamp = data.timestamp as Date
        let year = timestamp?.getFullYear()
        var result = sets.find(obj => {
          var years = obj.find(obj2 => {
            return (obj2.timestamp as Date)?.getFullYear() == year
          })
          return years != undefined
        })
        if (result){
          sets[sets.indexOf(result)].push(data)
        }
        else{
          sets.push([data])
        }
      })

    Globals.months.forEach((month) => {      

      //IF MONTH AND YEAR ARE UNDEFINED FOR A GIVEN INTERVAL, PUT IN AN EMPTY FILLER VALUE OF 0

      sets.forEach(s => {
        var result = s.find(obj => {
          return Globals.months[obj.timestamp?.getMonth()] == month
        })

        if (!result){

          var time = s.find(obj => {
            return obj.timestamp != undefined
          })
          var d = new Date(time?.timestamp?.getFullYear(), Globals.months.indexOf(month), 1)
          if (type == "Products Sold"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Gross Revenue"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Net Profit"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Onboarded Users (Affiliate)"){
            set.push({affiliate: "", timestamp: d})
          }
          else if (type == "Affiliate Revenue"){
            set.push({affiliate: "", timestamp: d})
          }
          else if (type == "Store Views"){
            set.push({views: 0, timestamp: d})
          }
          else if (type == "Abandoned Carts"){
            set.push({dropCarts: 0, timestamp: d})
          }
        }
      })
    })

    //SORT SALES BY TIMESTAMP

    set.sort(function(a, b){
      if(a.timestamp! < b.timestamp!) { return -1; }
      if(a.timestamp! > b.timestamp!) { return 1; }
      return 0;
    })

    //REMOVE EMPTY MONTHS THAT ARE IN THE FUTURE

    set = set.filter(obj => {
      return new Date() >= obj.timestamp!
    })

    //APPEND TO FINAL SERIES ARRAY

    set.forEach((data) => {
      let month = Globals.months[data.timestamp?.getMonth()].substring(0,3) + " " + data.timestamp!.getFullYear()
      var result = months.find(obj => {
        return obj?.name === month
      })

      let value = 0

      if (type == "Products Sold"){
        value = data.quantity ?? 0
      }
      else if (type == "Gross Revenue"){
        value = data.product?.price ?? 0
      }
      else if (type == "Net Profit"){
        value = data.profit ?? 0
        if (isNaN(value)){
          value = 0
        }
      }
      else if (type == "Onboarded Users (Affiliate)"){
        if (data.affiliate != ""){
          value = 1
        }
      }
      else if (type == "Affiliate Revenue"){
        if (data.affiliate != ""){
          value = 37 / 2
        }
      }
      else if (type == "Store Views"){
        value = data.views
      }
      else if (type == "Abandoned Carts"){
        value = data.dropCarts
      }

      if (result){
        months[months.indexOf(result)].value += value ?? 0
      }
      else{
        months.push({
          name: month,
          value: value ?? 0
        })
      }
    })

    return months
  }


  organizeAllTime(set: Array<Dict<any>>, type: string){

    var months = new Array<{
      name: string,
      data: number
    }>()

    //SPLIT SALES INTO SEPERATE ARRAYS BY YEAR

    let sets = Array<Array<Dict<any>>>()

      set.forEach((data) => {
        let timestamp = data.timestamp as Date
        let year = timestamp?.getFullYear()
        var result = sets.find(obj => {
          var years = obj.find(obj2 => {
            return (obj2.timestamp as Date)?.getFullYear() == year
          })
          return years != undefined
        })
        if (result){
          sets[sets.indexOf(result)].push(data)
        }
        else{
          sets.push([data])
        }
      })

    Globals.months.forEach((month) => {      

      //IF MONTH AND YEAR ARE UNDEFINED FOR A GIVEN INTERVAL, PUT IN AN EMPTY FILLER VALUE OF 0

      sets.forEach(s => {
        var result = s.find(obj => {
          return Globals.months[obj.timestamp?.getMonth()] == month
        })

        if (!result){

          var d = s.find(obj => {
            return obj.timestamp != undefined
          })?.timestamp
          if (type == "Products Sold"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Gross Revenue"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Net Profit"){
            set.push(new ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0))
          }
          else if (type == "Onboarded Users (Affiliate)"){
            set.push({affiliate: "", timestamp: d})
          }
          else if (type == "Affiliate Revenue"){
            set.push({affiliate: "", timestamp: d})
          }
          else if (type == "Store Views"){
            set.push({views: 0, timestamp: d})
          }
          else if (type == "Abandoned Carts"){
            set.push({dropCarts: 0, timestamp: d})
          }
        }
      })
    })

    //SORT SALES BY TIMESTAMP

    set.sort(function(a, b){
      if(a.timestamp! < b.timestamp!) { return -1; }
      if(a.timestamp! > b.timestamp!) { return 1; }
      return 0;
    })

    //REMOVE EMPTY MONTHS THAT ARE IN THE FUTURE

    set = set.filter(obj => {
      return new Date() >= obj.timestamp!
    })

    //APPEND TO FINAL SERIES ARRAY

    set.forEach((data) => {
      let month = (data.timestamp)
      var result = months.find(obj => {
        return obj?.name === month
      })

      let value = 0

      if (type == "Products Sold"){
        value = data.quantity ?? 0
      }
      else if (type == "Gross Revenue"){
        value = data.product?.price ?? 0
      }
      else if (type == "Net Profit"){
        value = data.profit ?? 0
        if (isNaN(value)){
          value = 0
        }
      }
      else if (type == "Onboarded Users (Affiliate)"){
        if (data.affiliate != ""){
          value = 1
        }
      }
      else if (type == "Affiliate Revenue"){
        if (data.affiliate != ""){
          value = 37 / 2
        }
      }
      else if (type == "Store Views"){
        



        value = data.views
      }
      else if (type == "Abandoned Carts"){
        value = data.dropCarts
      }

      if (result){
        months[months.indexOf(result)].data += value ?? 0
      }
      else{
        months.push({
          name: month.toISOString(),
          data: value ?? 0
        })
      }
    })

    return months
  }

  formatPercent(val: string) {
    

    // var t = this as unknown as XAxisTicksComponent

    // let series = t.ticks as Array<string>


    // var result = series.filter(obj => {
    //   return obj === val
    // })[0]

    // if (series.indexOf(result) == 0 || series.indexOf(result) == series.length - 1){
    //   return val
    // }

    return ""
  } 

  charts(onlyAffiliates = false, onlyOverview = false){
    if (onlyAffiliates){
      return this.items.filter(item => { return item.name == "Onboarded Users (Affiliate)" || item.name == "Affiliate Revenue"}).sort(function(a, b){
        if(a.index < b.index) { return -1; }
        if(a.index > b.index) { return 1; }
        return 0;
      })
    }
    if (onlyOverview){
      let charts = this.items.filter(item => { return item.name == "Gross Revenue" || item.name == 'Net Profit'}).sort(function(a, b){
        if(a.index < b.index) { return -1; }
        if(a.index > b.index) { return 1; }
        return 0;
      })
      let views = this.miscItems.find(item => { return item.name == "Store Views"})
      if (views){
        charts.unshift(views)
      }
      return charts
    }
    if (Globals.productsSold == undefined || Globals.newCustomers == undefined || Globals.dropCarts == undefined){
      return []
    }
    let newItems = this.items.concat(this.miscItems)
    return newItems.filter(item => { return !((item.name == "Onboarded Users (Affiliate)" || item.name == "Affiliate Revenue") && this.activeAffiliates.length == 0)}).sort(function(a, b){
      if(a.index < b.index) { return -1; }
      if(a.index > b.index) { return 1; }
      return 0;
    })
  }



  addMiscCharts(name: string, data_set: Array<Dict<any>>){


    var dataToUse = data_set





    if (!(this.miscItems.some(e => e?.name === name))){


      if (name == "Store Views"){


        var views: Array<{
          views: number,
          timestamp: Date,
        }> = []

        data_set.forEach(p => {
          if (views?.find(k => k.timestamp.toLocaleDateString() == p.timestamp.toLocaleDateString())){
            let i = views?.findIndex(k => k.timestamp.toLocaleDateString() == p.timestamp.toLocaleDateString())
            if (i){
              views[i].views += 1
            }
          }
          else{
            views?.push({ views: 10, timestamp: p.timestamp});
          }
        })
        dataToUse = views

      }




      let set = this.organizeAllTime(dataToUse, name)
  
      var index = 0
      if (name == "Store Views"){
        index = 0
      }
      else if (name == "Abandoned Carts"){
        index = 4
      }


      // let item = {
      //   name: name,
      //   legend: true,
      //   showLabels: true,
      //   animations: true,
      //   xAxis: true,
      //   yAxis: true,
      //   index: index,
      //   showYAxisLabel:  true,
      //   showXAxisLabel: true,
      //   xAxisLabel: set[0]?.name + '  ➜  ' + "TODAY",
      //   yAxisLabel:  'Population',
      //   timeline: true,
      //   shouldDisplay: set.length != 0,
      //   customColors:[
      //     { 
      //       name: name,
      //       value: '#1ac6ff'
      //     }
      //   ],
      //   series: [
      //     {
      //       "name": name,
      //       "series": set
      //     }
      //   ]
      // }
      // this.miscItems.push(item)

      
      this.miscItems.push({
        name: name,
        index: index,
        shouldDisplay: set.length != 0,
        series: [
        {
          name: name,
          data: set.map(s => s.data)
        },
      ],
      chart: {
        height: 250,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: set.map(s => s.name)
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    })
    }
  }

  


  addChart(name: string, data_set: Array<ProductInCart>){


    if (!(this.items.some(e => e?.name === name))){
      let set = this.organizeAllTime(data_set, name)

  
      var index = 0

      if (name == "Products Sold"){
        index = 2
      }
      else if (name == "Gross Revenue"){
        index = 1
      }
      else if (name == "Net Profit"){
        index = 3
      }
      else if (name == "Onboarded Users (Affiliate)" || name == "Affiliate Revenue"){
        index = 4
      }
      else{
        index = 5
      }

      let item = {
        name: name,
        index: index,
        shouldDisplay: set.length != 0,
        series: [
        {
          name: name,
          data: set.map(s => s.data)
        },
      ],
      chart: {
        height: 250,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: set.map(s => s.name)
      },
      yaxis: {},
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    }

    if (index != 2){
      item.yaxis = {
        labels: {
          formatter: function (value: number) {
            function formatPrice(price: number, short = false, order?: Order){
              var priceAsString = new String(Number((price * ((Globals.selectedCurrency?.rate ?? 1))).toFixed(2)).toLocaleString('en'))
              if (!short){
                priceAsString = new String(Number((price * ((Globals.selectedCurrency?.rate ?? 1))).toFixed(2)))
              }
              let index = priceAsString.indexOf(".")
              
              switch (index){
                case priceAsString.length - 1:
                    priceAsString += "00"
                    break
                case -1:
                    priceAsString += ".00"
                    break
                case priceAsString.length - 2:
                    priceAsString += "0"
                    break
                default:
                    break
              }
              return getCurrencyForCountry((Globals.selectedCurrency?.name) != "US", Globals.selectedCurrency) + priceAsString
          }
            
          function getCurrencyForCountry(shouldShowName: boolean, country?: Country){
          
            var returnItem = country?.currency_symbol ?? "$"
            if (shouldShowName) returnItem = (country?.name ?? '') + " " + returnItem
          
            return returnItem
          }

            return formatPrice(value)
          }
        },
      }
    }
      
      this.items.push(item)

      // let item = {
      //   name: name,
      //   legend: true,
      //   showLabels: true,
      //   animations: true,
      //   xAxis: true,
      //   yAxis: true,
      //   index: index,
      //   showYAxisLabel:  true,
      //   showXAxisLabel: true,
      //   xAxisLabel: set[0]?.name + '  ➜  ' + "TODAY",
      //   yAxisLabel:  'Population',
      //   timeline: true,
      //   shouldDisplay: set.length != 0,
      //   customColors:[
      //     { 
      //       name: name,
      //       value: '#1ac6ff'
      //     }
      //   ],
      //   series: [
      //     {
      //       "name": name,
      //       "series": set
      //     }
      //   ]
      // }
      // this.items.push(item)
    }
  }

  loaders(){

    return Globals.loaders
  }



  storeInfo(){return Globals.storeInfo}

  userInfo(){return Globals.userInfo}


  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.templates}

  availableTemplates(){return Globals.availableTemplates}

  @ViewChild('orderTable') orderTable?: MatTable<any>;


  themes(){
  return Globals.themes?.sort(function(a, b){
    if(a.themes.length < b.themes.length) { return 1; }
    if(a.themes.length > b.themes.length) { return -1; }
    return 0;
  })
  }

  fonts(){return Globals.fonts}




  panels = [
    {
      Category: "DASHBOARD",
      Options: [
        {
          "Title": "OVERVIEW",
          "Icon": "dashboard",
          "Active": false
        },
        {
          "Title": "AUDIENCE",
          "Icon": "groups",
          "Active": false
        },
        {
          "Title": "LIVE VIEW",
          "Icon": "public",
          "Active": false
        },
      ]
    },  
    {
      Category: "LAYOUT",
      Options: [
        {
          "Title": "PAGES",
          "Icon": "layers",
          "Active": false
        },
      ]
    },
    {
      Category: "MANAGE",
      Options: [
        {
          "Title": "THEMES",
          "Icon": "backup_table",
          "Active": false
        },
        {
          "Title": "PRODUCTS",
          "Icon": "category",
          "Active": false
        },
        {
          "Title": "STORE",
          "Icon": "shopping_bag",
          "Active": false
        },
        {
          "Title": "INVENTORY",
          "Icon": "local_shipping",
          "Active": false
        },
        {
          "Title": "POPUPS",
          "Icon": "wysiwyg",
          "Active": false
        },
        {
          "Title": "BANNERS",
          "Icon": "view_day",
          "Active": false
        },
        {
          "Title": "DISCOUNTS",
          "Icon": "local_offer",
          "Active": false
        },
      ]
    },
    {
      Category: "SETTINGS",
      Options: [
        {
          "Title": "BILLING",
          "Icon": "credit_card",
          "Active": false
        },
        {
          "Title": "PLAN",
          "Icon": "work",
          "Active": false
        },
        {
          "Title": "PAYMENTS",
          "Icon": "monetization_on",
          "Active": false
        },
        {
          "Title": "ADVERTISE",
          "Icon": "share",
          "Active": false
        },
        {
          "Title": "SECURITY",
          "Icon": "admin_panel_settings",
          "Active": false
        },
      ]
    },
    {
      Category: "OTHER",
      Options: [
        {
          "Title": "AFFILIATE",
          "Icon": "local_atm",
          "Active": false
        },
        {
          "Title": "PRIVACY",
          "Icon": "vpn_lock",
          "Active": false
        },
        {
          "Title": "LEGAL",
          "Icon": "sticky_note_2",
          "Active": false
        },
        {
          "Title": "QUESTIONS",
          "Icon": "contact_support",
          "Active": false
        },
      ]
    },
  ]

  inMenu(h?: string){
    let headers = this.headerForm.controls.links.value

    return headers.find((l: string) => l == h) != undefined
  }

  inFooter(h?: string){

    return this.footerCols.find((l: Dict<any>) => l.link.find((k: string) => k == h)) != undefined
  }


  getBillingAddressFirst(){
    var name = Globals.billingInfo?.brand + " ending in " + Globals.billingInfo?.number

    return name
  }

  getLinkImg(name: string){
    return Globals.socials.filter(obj => { 
      return obj.name == name
    })[0].img
  }

  configureFooter(h?: string){

    if (h != undefined){
      let isAdding = this.footerCols.find((l: Dict<any>) => l.link.find((k: string) => k == h)) == undefined

      if (isAdding){
        this.footerCols[0].link.push(h)
        this.toast("Added to footer!")
      }
      else{
        let i = this.footerCols.findIndex((l: Dict<any>) => l.link.find((k: string) => k == h))
        let j = this.footerCols[i].link.findIndex((l: string) => l == h)


        if (i >= 0 && j >= 0){
          this.footerCols[i].link.splice(j, 1)
          this.toast("Removed from footer!")
        }
      }
    }
  }

  

  configureHeader(h?: string){
    let headers = this.headerForm.controls.links.value

    if (h != undefined){
      let isAdding = headers.find((l: string) => l == h) == undefined
      if (isAdding){
        headers.push(h)
        this.toast("Added to header!")
      }
      else{
        let i = headers.findIndex((l: string) => l == h)

        if (i >= 0){
          headers.splice(i, 1)
          this.toast("Removed from header!")
        }
      }
    }
    this.headerForm.controls.links.setValue(headers)
  }

  defaultBio = ""
  color = ""
  bg_color = ""
  inventory?: Array<Inventory>

  selectedIndicator(){
    

    let co = Globals.storeInfo?.loading?.color
    let bco = Globals.storeInfo?.loading?.bg_color
    let name = Globals.storeInfo?.loading?.name

    let color = this.themeForm.controls.loadingIndicatorColor.value as string ?? "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"
    let bg_color = this.themeForm.controls.loadingIndicatorBgColor.value as string ?? "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    let indicator: Dict<string> = {
      "name": this.themeForm.controls.loadingIndicator.value ?? name,
      "color": color,
      "bg_color": bg_color
    }
    return indicator
  }

  
  addPageToList(){

  }

  getTypeImages(templateCode: string, inv?: Inventory) {

    if (inv?.isCustom){
      return inv?.img
    }
    else{
      let template = Globals.templates.find(obj => {
        return obj.productCode == templateCode
      })
      return "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Templates%2F" + template?.templateID + "%2Fdisplay1.jpg?alt=media"
    }    

  }

  buyMore(inventory: Inventory){
    const modalRef = this.modalService.open(InventoryBuyComponent, {size : "lg"});
    modalRef.componentInstance.inventory = inventory

    let sub = modalRef.dismissed.subscribe((inv?: Inventory) => {
      sub.unsubscribe()
      if (inv){
        let same = this.inventory?.filter(i => { i.id == inv.id})[0]
        if (same){
          same.amount = inv.amount
        } 
      }
    })
  }

  checkBilling(){
    if (Globals.billingInfo?.name && Globals.billingInfo?.name != ""){
      
      return true

    }
    else{
      var sec = 0
      var ind = 0
      this.panels.forEach((panel, section) => {
        panel.Options.forEach((option, index) => {
          if (option.Title == 'BILLING'){
            sec = section
            ind = index
            return
          }
        });
      });
      this.selectSetting(ind, sec)
      return false
    }
  }


  shouldHideLiveBtn(){
    return (Globals.billingInfo == undefined || this.bankInfo == undefined || this.subInfo == undefined)
  }


  storeLive(){
    return Globals.billingInfo?.name && this.bankInfo != '' && this.subInfo != ''
  }

  shouldRed(panel: any){
    if (this.shouldHideLiveBtn()){
      return false
    }
    if (panel.Title == "BILLING"){
      if (Globals.billingInfo?.name?.replace(" ", "") == ''){
        return true
      }
    }
    else if (panel.Title == "PAYMENTS"){
      if (this.bankInfo == ''){
        return true
      }
    }
    else if (panel.Title == "PLAN"){
      if (this.subInfo == ''){
        
        return true
      }
    }
    else if (panel.Title == "PRODUCTS"){
      if (this.storeProducts && this.storeProducts?.length == 0){
        return true
      }
    }
    return false
  }

  buyNewInventory(template: Template){

    if (this.checkBilling()){
      const modalRef = this.modalService.open(InventoryBuyComponent, {size : "lg"});
      modalRef.componentInstance.template = template
  
  
      let sub = modalRef.dismissed.subscribe((inv?: Inventory) => {
        sub.unsubscribe()
        if (inv){
          this.inventory?.unshift(inv)
        }
      })
    }
  }

  missingInfo(){
    var array = Array<string>()

    if (Globals.billingInfo?.name == ''){
      array.push("Add your billing method")
    }
    if (this.subInfo == ''){
      array.push("Start your Thred Merchant plan")
    }
    if (this.bankInfo == ''){
      array.push("Set up your merchant payments account")
    }
    if ((this.storeProducts?.length ?? 0) == 0){
      array.push("Upload your first product")
    }
    return array
  }

  removeAutoReload(inventory: Inventory){
    this.loadService.removeAutoReload((inventory), success => {
      if (success){
        inventory.autoReload = false
        this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " removed")
      }
    })
  }

  setUpAutoReload(inventory: Inventory){
    if (this.checkBilling()){
      this.loadService.setAutoReload((inventory), success => {
        if (success){
          inventory.autoReload = true
          this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " set")
        }
      })
    }
  }
  @ViewChild('chartObj') chart?: ChartComponent;

  getInventory(){
    if (this.inventory != undefined) return
    this.inventory = []
    this.loadService.getInventory(inventory => {
      this.inventory = (inventory ?? []).sort(function(a, b){
        if(a.timestamp < b.timestamp) { return 1; }
        if(a.timestamp > b.timestamp) { return -1; }
        return 0;
      })
      
      this.cdr.detectChanges()
    })
  }

  hasInventory(template: Template){
    return this.inventory?.find(obj => { return template.productCode == obj.code })
  }

  availableToBuyTemplates(){
    return this.templates()?.filter(template => { return !this.hasInventory(template)})
  }

  matchTemplate(inv: Inventory){
    return this.templates()?.find(obj => { return inv.code == obj.productCode })
  }

  discountDisplay(coupon: Coupon){
    if (coupon.style == 0){
      return (coupon.amt * 100)+ '% off'
    }
    return this.formatPrice((coupon.amt * 100))+ ' off'
  }

  
  invUsed(inv: Inventory){
    // Globals.productsSold
    let n = Globals.productsSold?.filter(p => { return p.product?.productID == inv.code})?.length ?? 0

    if (n == 0){
      return 'No sales on this product'
    }
    return n + " sales on this product"
  }

  matchInventory(template: Template){
    return (this.inventory?.filter(obj => { return template.productCode == obj.code }))![0]
  }

  totalElement(series: Array<number>){

    var total = 0
    series.forEach(item => {
      total += item
    })
    return total
  }


  totalSales(){
    return this.formatPrice(this.totalElement(this.charts()[1].series[0].data))
  }

  totalViews(){
    return this.totalElement(this.charts()[0].series[0].data)
  }

  orderCurrency(order?: Order){
    if (order == undefined){
      return undefined
    }
    return new Country(order?.currency.toUpperCase().slice(0, (order?.currency.length ?? 0) - 1), undefined, undefined, order?.currency, order?.currencySymbol, 1, true, 0)
  }

  formatGraphElement(element: number, name: string){

    if (name == "Gross Revenue" || name == "Net Profit" || name == "Affiliate Revenue"){
      return this.formatPrice(element)
    }
    return element
  }

  formatPrice(price: number, short = false, order?: Order){
    var priceAsString = new String(Number((price * (this.orderCurrency(order)?.rate ?? (Globals.selectedCurrency?.rate ?? 1))).toFixed(2)).toLocaleString('en'))
    if (!short){
      priceAsString = new String(Number((price * (this.orderCurrency(order)?.rate ?? (Globals.selectedCurrency?.rate ?? 1))).toFixed(2)))
    }
    let index = priceAsString.indexOf(".")
    
    switch (index){
      case priceAsString.length - 1:
          priceAsString += "00"
          break
      case -1:
          priceAsString += ".00"
          break
      case priceAsString.length - 2:
          priceAsString += "0"
          break
      default:
          break
    }
    return this.getCurrencyForCountry((this.orderCurrency(order)?.name ?? Globals.selectedCurrency?.name) != "US", this.orderCurrency(order) ?? Globals.selectedCurrency) + priceAsString
}
  
getCurrencyForCountry(shouldShowName: boolean, country?: Country){

  var returnItem = country?.currency_symbol ?? "$"
  if (shouldShowName) returnItem = (country?.name ?? '') + " " + returnItem

  return returnItem
}




isSpinning = false

    showSpinner(duration = 500){
      if (!this.isSpinning){
        this.isSpinning = true
        if (isPlatformBrowser(this.platformID)){
          this.spinner.show("adminSpinner")
        };
  
        setTimeout(() => {
            this.spinner.hide("adminSpinner")
        }, duration);
      }
    }

    showSampleSpinner(duration = 1500){
      this.isSpinning = true
        if (isPlatformBrowser(this.platformID)){
          this.spinner.show("sampleSpinner")
        };
  
        setTimeout(() => {
            this.spinner.hide("sampleSpinner")
        }, duration);
    }
  
    hideSpinner(){
      if (this.isSpinning){
        // this.spinner.hide()
      }
    }

  theme = 'Light'

  storeForm = this.fb.group({
    username: [null, [Validators.required]],
    full_name: [null, Validators.required],
    bio: [null],
    profile_pic: [null],
    custom_url: [null],
    socials: new Array<{
      name: string,
      link: string,
    }>(),
  });

  themeForm = this.fb.group({
    loadingIndicator: [null, Validators.required],
    loadingIndicatorColor: [null, Validators.required],
    loadingIndicatorBgColor: [null, Validators.required],
    themeImg: [null],
    actionImg: [null],
    storeTheme: [null, Validators.required],
    font: [null, Validators.required],
  });

  bannerForm = this.fb.group({
    banners: [[[]]],
    style: [null, Validators.required]
  });
  

  shopForm = this.fb.group({
    themeImg: [null],
  });




  

  changeEmailForm = this.fb.group({
    newEmail: [null, Validators.required],
    password: [null, Validators.required],
  });

  changePassForm = this.fb.group({
    password: [null, Validators.required],
    newPassword: [null, Validators.required],
    confirmNewPassword: [null, Validators.required],
  });

  marketingForm = this.fb.group({
    pixel: [null, Validators.required],
  });

  headerForm = this.fb.group({
    links: [[], Validators.required],
  });

  footerCols: Array<Dict<any>> = []
  
  getSelectedPanel(){
    let selected = this.panels.filter(panel => panel.Options?.filter(option => option.Active).length != 0)[0]?.Options.filter(option => option?.Active)[0]
    return selected
  }

  openFBAdsManager(){
    const link = document.createElement('a');
    link.target = '_blank';

    let url: string = 'https://www.facebook.com/business/learn/facebook-ads-pixel';


    link.href = url
    this.spinner.hide("adminSpinner")

    link.setAttribute('visibility', 'hidden')
    link.click()
    link.remove()
  }

  async setFBPixel(){
    let pixel = this.marketingForm.controls.pixel.value as string
    await this.loadService.setPixel(pixel)
    this.toast('Facebook Pixel Updated!')
  }

  setForm(){

    this.storeForm.controls.username.setValue(Globals.userInfo?.username ?? "")
    this.storeForm.controls.full_name.setValue(Globals.userInfo?.fullName ?? "")
    this.storeForm.controls.bio.setValue(Globals.userInfo?.bio ?? "")


    this.themeForm.controls.loadingIndicator.setValue(Globals.userInfo?.loading?.name ?? "")

    this.themeForm.controls.themeImg.setValue(Globals.userInfo?.themeLink?.toString())


    // this.homeForm.controls.homeImg.setValue(Globals.userInfo?.homeLink?.toString())
    // this.homeForm.controls.themeImg.setValue(Globals.userInfo?.homeLinkTop?.toString())





    this.shopForm.controls.themeImg.setValue(Globals.userInfo?.shopLinkTop?.toString())

    this.themeForm.controls.actionImg.setValue(Globals.userInfo?.actionLink?.toString())

    this.themeForm.controls.font.setValue(Globals.userInfo?.fontName)


    this.storeForm.controls.socials.setValue(Globals.userInfo?.socials)

    this.storeForm.controls.custom_url.setValue(Globals.userInfo?.customURL?.fullURL)

    this.marketingForm.controls.pixel.setValue(Globals.userInfo?.fb_pixel)

    this.themeForm.controls.storeTheme.setValue(Globals.userInfo?.colorStyle?.name?.toString())

    this.bannerForm.controls.banners.setValue(Globals.userInfo?.banners ?? [])

    this.bannerForm.controls.style.setValue(Globals.userInfo?.bannerStyle ?? 0)

    this.headerForm.controls.links.setValue(Globals.userInfo?.header ?? [])
    this.footerCols = Globals.userInfo?.footer ?? []

    this.theme = Globals.userInfo?.colorStyle?.name?.toString() ?? 'Light'

    let co = Globals.userInfo?.loading?.color
    let bco = Globals.userInfo?.loading?.bg_color

    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")"

    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")"

    this.themeForm.controls.loadingIndicatorColor.setValue(color ?? [])
    this.themeForm.controls.loadingIndicatorBgColor.setValue(bg_color ?? [])


  }

  fontSize(row: Row){
    if (this.rootComponent.isMobile() || this.colCount(row) >= 2){
      return "6"
    }
    return (0.5 / this.colCount(row)) * 100
  }

  titleFontSize(row: Row){
    if (this.rootComponent.isMobile() || this.colCount(row) >= 2){
      return "6"
    }
    return (0.3 / this.colCount(row)) * 100
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

  colCount(row: Row){
    var count = 0
    this.products(row.smart_products, row.products)?.forEach(product => {
      if (count < 4){
        count += 1
      }
    })
    return count
  }

  isBase64(str: string) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
  }

  

  selectColor(value: string, isPrimary: boolean){

      if (isPrimary){
        this.themeForm.controls.loadingIndicatorColor.setValue(value ?? [])
      }
      else{
        this.themeForm.controls.loadingIndicatorBgColor.setValue(value ?? [])
      }

      this.showSampleSpinner(2000)

  }


    fileChangeEvent(event: any, type = "Profile"): void {
        const modalRef = this.modalService.open(CropperComponent, {size : "lg"});
        modalRef.componentInstance.imageChangedEvent = event


        if (type == "Profile"){
          modalRef.componentInstance.ratio = 1
          modalRef.componentInstance.width = 200
          modalRef.componentInstance.height = 200

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.storeForm.controls.profile_pic.setValue(img)
            }
          })
        }
        else if (type == "Background"){
          // modalRef.componentInstance.ratio = 1.78
          modalRef.componentInstance.width = 2560
          modalRef.componentInstance.height = 1440

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.themeForm.controls.themeImg.setValue(img)
            }
          })
        }
        else if (type == "Shop_Background"){
          // modalRef.componentInstance.ratio = 1.78
          modalRef.componentInstance.width = 2560
          modalRef.componentInstance.height = 1440

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.shopForm.controls.themeImg.setValue(img)
            }
          })
        }
        else if (type == "Action"){
          // modalRef.componentInstance.ratio = 1.78
          modalRef.componentInstance.width = 2560
          modalRef.componentInstance.height = 1440

          let sub = modalRef.dismissed.subscribe((img: string) => {
            sub.unsubscribe()
            if (img != '0'){
              this.themeForm.controls.actionImg.setValue(img)
            }
          })
        }
    }
    

    

  getImgSrc(){
    
    if (this.storeForm.controls.profile_pic.value){
      return this.storeForm.controls.profile_pic.value
    }
    return this.userInfo()?.profileLink
  }

  getUsername(){
    
    if (this.storeForm.controls.full_name.value){
      return this.storeForm.controls.full_name.value
    }
    return this.userInfo()?.fullName ?? "Brian's Tees"
  }

  saveProfile(){

    if (this.storeForm.valid){

      var data = {
        username: this.storeForm.controls.username.value,
        full_name: this.storeForm.controls.full_name.value,
        bio: this.storeForm.controls.bio.value,
        socials: this.storeForm.controls.socials.value,
        custom_url: this.storeForm.controls.custom_url.value?.replace(/\s/g, ""),
        profile_pic: this.storeForm.controls.profile_pic.value
      }

      this.loadService.checkURL(data.custom_url, error => {
        if (error){
          this.toast(error)
        }
        else{
          this.loadService.saveUser(data, success => {
            if (success){
              this.toast("Profile Information Updated!")
            }
          })
        }
      })
    }
    else{
      this.toast("One or more fields are invalid!")
    }
  }

  savePassword(){

    if (this.changePassForm.valid){
      if (this.changePassForm.controls.password.value?.replace(/\s/g, "") != this.changePassForm.controls.confirmNewPassword.value?.replace(/\s/g, "")){
        
        return
      }

      let data = {
        password: this.changePassForm.controls.password.value?.replace(/\s/g, "").split(' ').join('').trim().toLowerCase(),
        newPassword: this.changePassForm.controls.newPassword.value?.replace(/\s/g, "").split(' ').join('').trim().toLowerCase(),
      }
      this.loadService.savePassword(data, success => {
        this.changePassForm.controls.password.setValue(undefined)
        this.changePassForm.controls.newPassword.setValue(undefined)
        if (success){
          this.toast("Password Updated!")
        }
        else{
          this.toast("Error! Something went wrong.")
        }
      })
    }
    else{

    }
  }

  show: boolean = false;


  password() {
    this.show = !this.show;
  }

  saveEmail(){

    if (this.changeEmailForm.valid){

      let data = {
        password: this.changeEmailForm.controls.password.value?.replace(/\s/g, "").split(' ').join('').trim().toLowerCase(),
        newEmail: this.changeEmailForm.controls.newEmail.value,
      }
      this.loadService.saveEmail(data, success => {
        this.changeEmailForm.controls.password.setValue(undefined)
        this.changeEmailForm.controls.newEmail.setValue(undefined)
        if (success){
          this.toast("Email Updated!")
        }
        else{
          this.toast("Error! Something went wrong.")
        }
      })
    }
    else{

    }
  }

  joinColor(color: string){

    let c = color?.replace("rgb", "")?.replace("a", "")?.replace("(", "")?.replace(")", "")?.split(",")
    var returnArr = new Array<string>()
    c.forEach(element => {
      returnArr.push(element.trim())
    });

    if (returnArr.length < 4){
      for (let i = 0; i < (4 - returnArr.length); i++) {
          returnArr.push("1")
      }
    }

    return returnArr.join(",")
  }

  numToColor(color: Array<number>){

    var returnArr = new Array<string>()

    color.forEach(color => {
      returnArr.push(color.toString())
    })

    return returnArr.join(",")
  }

  bannerTheme(banner: Banner){
    
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

  editBanner(banner: Banner){
    const modalRef = this.dialog.open(EditBannerComponent, {
      width: '' + this.myInnerHeight() + "px",
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {
        banner: banner, 
      },
    });
  
    let sub = modalRef.afterClosed().subscribe(resp => {
      sub.unsubscribe()
      if (resp){
        banner.bg_color = resp.bg_color
        banner.color = resp.color
        banner.icon = resp.icon
        banner.text = resp.text
      }
      else{
        
      }
    });
  }

  addBanner(){
    let banner = new Banner('', '', [], [])
    const modalRef = this.dialog.open(EditBannerComponent, {
      width: '' + this.myInnerHeight() + "px",
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {
        banner: banner, 
      },
    });
  
    let sub = modalRef.afterClosed().subscribe(resp => {
      sub.unsubscribe()
      if (resp){
        banner.bg_color = resp.bg_color
        banner.color = resp.color
        banner.icon = resp.icon
        banner.text = resp.text
        let curr = this.bannerForm.controls.banners.value ?? []
        curr.push(banner)
        this.bannerForm.controls.banners.setValue(curr)
      }
      else{
        
      }
    });
  }

  styles = [
    {
      name: 'Scroll & Stop',
      code: 0
    },
    {
      name: 'Infinite Scroll',
      code: 1
    }
  ]

  matchingStyle(s?: any){
    return this.styles.find(style => { return style.code == s})
  }

  async deleteBanner(banner: Banner){


    var banners = new Array<Dict<any>>()
      


      let bannerVals = this.bannerForm.controls.banners.value as Array<Dict<any>>

  
      bannerVals.forEach(b => {
        if (b != banner){
          banners.push({
            text: b.text,
            icon: b.icon,
            bg_color: this.numToColor(b.bg_color ?? []),
            color: this.numToColor(b.color ?? [])
          })
        }
      })

      var data: Dict<any> = {
        banners: banners,
      }

      this.loadService.myCallback = () => {
        let index = bannerVals.indexOf(banner)

        bannerVals.splice(index, 1)

        this.bannerForm.controls.banners.setValue(bannerVals)

        this.toast("Banner Removed!")
      }
      await this.loadService.saveStore(data)
  }
  

  drop(event: CdkDragDrop<string[]>) {
    let arr = this.bannerForm.controls.banners.value
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.bannerForm.controls.banners.setValue(arr)
  }

  dropHeaderLink(event: CdkDragDrop<string[]>) {
    let arr = this.headerForm.controls.links.value
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.headerForm.controls.links.setValue(arr)
  }


  dropFooterRow(event: CdkDragDrop<any>) {


    if(event.previousContainer == event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
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
  


  selectTheme(theme: string){
    this.themeForm.controls.storeTheme.setValue(theme)
    this.theme = this.themeForm.controls.storeTheme.value

    this.saveStore()
  }

  saveHeader(){
    let header = this.headerForm.controls.links.value ?? []

    this.loadService.saveHeader(header, this.footerCols, success => {
      if (success){
        this.toast('Store Header Updated!')
      }
    }, Globals.storeInfo.uid)
  }

  async saveStore(){

    var data: Dict<any> = {}

    if (this.getSelectedPanel().Title == 'STORE'){
      this.saveProfile()
      return
    }
    else if (this.getSelectedPanel().Title == 'PAGES'){
      this.saveHeader()
      return
    }
    else{

      if (this.getSelectedPanel().Title == 'SHOP'){
        data = {}
        var images = new Array<Dict<string>>()
        if (this.shopForm.controls.themeImg.value && this.isBase64(this.shopForm.controls.themeImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))){
            images.push({
              "type" : "shop_top",
              "img" : this.shopForm.controls.themeImg.value
            })
        }
        data.images = images
      }
      
      else if (this.getSelectedPanel().Title == 'THEMES'){
        var color = this.joinColor(this.themeForm.controls.loadingIndicatorColor.value)
        var bg_color = this.joinColor(this.themeForm.controls.loadingIndicatorBgColor.value)
        data = {
          indicator: {
            name: this.themeForm.controls.loadingIndicator.value,
            color: color,
            bg_color: bg_color
          },
          loadingIndicatorColor: color,
          loadingIndicatorBgColor: bg_color,
          font: this.themeForm.controls.font.value
        }
        var selectedTheme = this.themeForm.controls.storeTheme.value as string
  
        let matchingTheme = Globals.themes?.find(theme => { return theme.themes.find(theme => { return theme.name == selectedTheme})})?.themes.find(theme => { return theme.name == selectedTheme})
  
        if (matchingTheme){
          var color = this.numToColor(matchingTheme.btn_color)
          var bg_color = this.numToColor(matchingTheme.bg_color)
  
          data.theme = {
            back_code: matchingTheme.back_code,
            text_code: matchingTheme.text_code,
            nav_code: matchingTheme.nav_code,
            class: matchingTheme.style,
            bg_color: bg_color,
            btn_color: color,
            name: matchingTheme?.name
          }
        }
        var images = new Array<Dict<string>>()
        if (this.themeForm.controls.themeImg.value && this.isBase64(this.themeForm.controls.themeImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))){
            images.push({
              "type" : "theme",
              "img" : this.themeForm.controls.themeImg.value
            })
        }
        if (this.themeForm.controls.actionImg.value && this.isBase64(this.themeForm.controls.actionImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))){
          images.push({
            "type" : "action",
            "img" : this.themeForm.controls.actionImg.value
          })
        }
        data.images = images
      }
  
  
      else if (this.getSelectedPanel().Title == 'BANNERS'){
  
        var banners = new Array<Dict<any>>()
        let bannerVals = this.bannerForm.controls.banners.value as Array<Dict<any>>
    
        bannerVals.forEach(b => {
          banners.push({
            text: b.text,
            icon: b.icon,
            bg_color: this.numToColor(b.bg_color ?? []),
            color: this.numToColor(b.color ?? [])
          })
        })
        data = {
          banners: banners,
          banner_style: this.bannerForm.controls.style.value ?? 0,
        }
      }
  
  
  
      // if (this.storeForm.valid){
  
  
        // console.log(data.banner_style)
  
        this.loadService.myCallback = () => this.toast("Store Updated!")
        await this.loadService.saveStore(data)
        // }
      // else{
  
      // }
    }
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

  toast(message: string){

    this.loadService.openSnackBar(message)

  }

  isMobile(){
    if (isPlatformBrowser(this.platformID)){
      let height = window.innerHeight
      let width = window.innerWidth
      return width < height
    }
    return false
  }

  shouldShowSaveBtn(){
    let title = this.getSelectedPanel()?.Title
    let list = [
      'STORE',
      'HOME',
      'SHOP',
      'THEMES',
      'BANNERS',
      'PAGES'
    ]
    return list.find(l => { return l == title})
  }

  async selectSetting(index: number, section: number){

    if (section == 4 && index != 0){
      var urlLink = ""
      if (index == 1 || index == 2){
        urlLink = "https://thredapps.com/privacy-policy"
      }
      else if (index == 3){
        urlLink = "https://thredapps.com/customer-support"
      }
      const link = document.createElement('a');
          link.target = '_blank';
  
          let url: string = '';
          if (!/^http[s]?:\/\//.test(urlLink)) {
            url += 'http://';
          }
      
          url += urlLink
      
          link.href = url
          this.spinner.hide("adminSpinner")
  
          link.setAttribute('visibility', 'hidden')
          link.click()
          link.remove()

      return 
    }


    if (this.isMobile()){
      this.classApplied = false
    }

    this.panels.forEach(panel => {
      panel.Options.forEach(option => {
        option.Active = false
      });
    });
    let user = await this.loadService.isLoggedIn()
    if (this.panels[section].Options[index].Title == "OVERVIEW" && user?.uid && !user?.isAnonymous){
      this.getMiscStats()
    }
    else if (this.panels[section].Options[index].Title == "AFFILIATE" && user?.uid && !user?.isAnonymous){
      this.getAffiliateStats(true)
    }
    this.panels[section].Options[index].Active = true
    this.cdr.detectChanges()
  }

  copyAffiliateURL(){
    this.toast("Affiliate link copied to clipboard!")
    var host = 'shopmythred.com'

    this.clipboard.copy(host + "/?affiliate=" + this.storeInfo().uid);
  }

  getSoldProducts(){

    if (Globals.productsSold == undefined){
      this.loadService.saleCallback = () => this.getSoldProducts()
      this.loadService.getSoldProducts(this.storeInfo()?.uid)
    }
    else{

      let data = [
        "Products Sold",
        "Gross Revenue",
        "Net Profit"
      ]
      data.forEach(d => {
        this.addChart(d, Globals.productsSold!)
      })
      this.getAffiliateStats()
    }
  }

  async getAffiliateStats(showEmpty = false){

    if (this.activeAffiliates.length == 0){
      this.loadService.miscCallback = () => this.getMiscStats()
      let user = await this.loadService.isLoggedIn()
      this.loadService.getAffiliateStats(user?.uid!, affiliates => {
        this.activeAffiliates = affiliates

        if (affiliates.length != 0 || showEmpty){
          let data = [
            "Onboarded Users (Affiliate)",
            "Affiliate Revenue",
          ]
          data.forEach(d => {
            this.addChart(d, this.activeAffiliates)
          })
        }
      })
    }
  }

  async getMiscStats(){

    if (Globals.views == undefined && Globals.dropCarts == undefined){
      this.loadService.miscCallback = () => this.getMiscStats()
      let user = await this.loadService.isLoggedIn()

      this.loadService.getMiscStats(user?.uid!)
    }
    else{

      let data = [
        {
        name: "Store Views",
        series: Globals.views
        },
        {
        name: "Abandoned Carts",
        series: Globals.dropCarts
        }
      ]

      data.forEach(d => {
        this.addMiscCharts(d?.name, d?.series?? [])
      })
      this.getSoldProducts()
    }
  }

  isBrowser(){
    return isPlatformBrowser(this.platformID)
  }


  views(){
    return Globals.views ?? []
  }

  classApplied = false;




  toggleSidebar() {
    

    this.classApplied = !this.classApplied;

    if (this.classApplied){
      this.state ='rotated'
    }
    else{
      this.state = 'default'
    }
    
  }

  storeBio(){
    let bio = this.storeInfo().bio

    if (bio == "" || bio == undefined){
      return this.defaultBio?.replace(/FULL9NAME/g, this.storeInfo().fullName?.trim() ?? "This brand")
    }
    return bio?.replace(/\n/g, "<br>") ?? "";
  } 

  planEndDate(){
    return new Date(this.subInfo.cancel_at * 1000).toDateString();
  }

    ngOnInit(): void {
      this.loadService.adminComponent = this
      this.init()

      
      
    }

    
    

    showWelcomeModal(){

      if (Globals.isNewUser && !this.modalService.hasOpenModals()){
        Globals.isNewUser = false
        const modalRef = this.modalService.open(StoreSetupComponent, {size : "lg"});
        // modalRef.componentInstance.canTrial = this.canTrial
        let sub = modalRef.dismissed.subscribe((subInfo?: any) => {
          sub.unsubscribe()
          this.showSpinner()
          this.loadService.startSubscription((id: any, err?: string) => {
            if (err && err != ''){
              return
            }
            else{
              this.subInfo = id
            }
          })
        })
      }
    }

    str = "<!DOCTYPE html><html lang='en'><head><title>Miniature Earth | Hologram Demo</title><meta charset='utf-8'><meta name='viewport' content='width=device-width'><link rel='stylesheet' href='hologram/style.css'><script src='../miniature.earth.js'></script><style>.arrow-tip {background-color: #33cc33;color: white;padding: 0.5em 0.75em 0.5em 1.75em;font-size: 1.5em;clip-path: polygon(1.25em 0, 100% 0, 100% 50%, 100% 100%, 1.25em 100%, 0 50%);transition: clip-path 0.3s ease, padding 0.3s ease, transform 0.3s ease;transform: translate(0, -50%);}.earth-overlay-left > .arrow-tip {padding: 0.5em 1.75em 0.5em 0.75em;clip-path: polygon(0% 0%, calc(100% - 1.25em) 0%, 100% 50%, calc(100% - 1.25em) 100%, 0% 100%, 0% 50%);transform: translate(-100%, -50%);}</style><script>if ( location.protocol == 'file:' ) {alert( 'This demo does not work with the file protocol due to browser security restrictions.' );}var myearth;var sprites = [];window.addEventListener( 'load', function() {myearth = new Earth( 'myearth', {location : { lat: 20, lng : 20 },light: 'none',mapImage: 'hologram/hologram-map.svg',zoomable: true,transparent: true,autoRotate : true,autoRotateSpeed: 1.2,autoRotateDelay: 100,autoRotateStart: 2000,}, {passive: true} );myearth.addEventListener( 'ready', function() {this.startAutoRotate();var line = {color : '#009CFF',opacity: 0.35,hairline: true,offset: -0.5};for ( var i in connections ) {line.locations = [ { lat: connections[i][0], lng: connections[i][1] }, { lat: connections[i][2], lng: connections[i][3] } ];this.addLine( line );}var c = '#e60000';yyyy;for ( var i=0; i < 8; i++ ) {sprites[i] = this.addSprite( {image: 'hologram/hologram-shine.svg',scale: 0.01,offset: -0.5,opacity: 0.5} );xxxxxx; pulse( i );}},{passive: true});});function getRandomInt(min, max){min = Math.ceil(min);max = Math.floor(max);return Math.floor(Math.random() * (max - min)) + min;}function pulse( index ) {var random_location = connections[ getRandomInt(0, connections.length-1) ];sprites[index].location = { lat: random_location[0] , lng: random_location[1] };sprites[index].animate( 'scale', 0.5, { duration: 320, complete : function(){this.animate( 'scale', 0.01, { duration: 320, complete : function(){setTimeout( function(){ pulse( index ); }, getRandomInt(100, 400) );}});}});}var connections = [[59.651901245117,17.918600082397,41.8002778,12.2388889],[59.651901245117,17.918600082397,51.4706,-0.461941],[13.681099891662598,100.74700164794922,	-6.1255698204,106.65599823],[13.681099891662598,100.74700164794922,	28.566499710083008,77.10310363769531],[30.12190055847168,31.40559959411621, -1.31923997402,36.9277992249],[30.12190055847168,31.40559959411621, 25.2527999878,55.3643989563],[30.12190055847168,31.40559959411621, 41.8002778,12.2388889],[28.566499710083008,77.10310363769531,	7.180759906768799,79.88410186767578],[28.566499710083008,77.10310363769531,	40.080101013183594,116.58499908447266],[28.566499710083008,77.10310363769531,	25.2527999878,55.3643989563],[-33.9648017883,18.6016998291, -1.31923997402,36.9277992249],[-1.31923997402,36.9277992249, 25.2527999878,55.3643989563],[41.8002778,12.2388889, 51.4706,-0.461941],[41.8002778,12.2388889, 40.471926,-3.56264],[19.4363,-99.072098,25.79319953918457,-80.29060363769531],[19.4363,-99.072098,33.94250107,-118.4079971],[19.4363,-99.072098,-12.0219,-77.114304],[-12.0219,-77.114304,	-33.393001556396484,-70.78579711914062],[-12.0219,-77.114304, -34.8222,-58.5358],[-12.0219,-77.114304, -22.910499572799996,-43.1631011963],[-34.8222,-58.5358, -33.393001556396484,-70.78579711914062],[-34.8222,-58.5358, -22.910499572799996,-43.1631011963],[22.3089008331,113.915000916, 13.681099891662598,100.74700164794922],[22.3089008331,113.915000916, 40.080101013183594,116.58499908447266],[22.3089008331,113.915000916, 31.143400192260742,121.80500030517578],[35.552299,139.779999, 40.080101013183594,116.58499908447266],[35.552299,139.779999, 31.143400192260742,121.80500030517578],[33.94250107,-118.4079971,	40.63980103,-73.77890015],[33.94250107,-118.4079971,	25.79319953918457,-80.29060363769531],[33.94250107,-118.4079971,	49.193901062,-123.183998108],[40.63980103,-73.77890015, 25.79319953918457,-80.29060363769531],[40.63980103,-73.77890015, 51.4706,-0.461941],[51.4706,-0.461941, 40.471926,-3.56264],[40.080101013183594,116.58499908447266,	31.143400192260742,121.80500030517578],[-33.94609832763672,151.177001953125,	-41.3272018433,174.804992676],[-33.94609832763672,151.177001953125,	-6.1255698204,106.65599823],[55.5914993286,37.2615013123, 59.651901245117,17.918600082397],[55.5914993286,37.2615013123, 41.8002778,12.2388889],[55.5914993286,37.2615013123, 40.080101013183594,116.58499908447266],[55.5914993286,37.2615013123, 25.2527999878,55.3643989563],];</script></head><body><div id='myearth'><div id='glow'></div></div></body></html>"
    
    

    

    routeToProduct(productID: string){
      this.rootComponent.routeToProduct(productID)
    }

    startSubscription(){

      // if (Globals.billingInfo?.number && Globals.billingInfo?.number != ""){
        var sec = 0
        var ind = 0

        if (this.getSelectedPanel().Title != "PLAN"){
          this.panels.forEach((panel, section) => {
            panel.Options.forEach((option, index) => {
              if (option.Title == 'PLAN'){
                sec = section
                ind = index
              }
            });
          });
          this.selectSetting(ind, sec)
        }
        
        const modalRef = this.modalService.open(EditPlanComponent, {size : "lg"});
        modalRef.componentInstance.canTrial = this.canTrial
  
        let sub = modalRef.dismissed.subscribe((subInfo?: any) => {
          sub.unsubscribe()
          if (subInfo){
            this.subInfo = subInfo ?? ''
          }
        })
      // }
      // else{
      //   var sec = 0
      //   var ind = 0
      //   this.panels.forEach((panel, section) => {
      //     panel.Options.forEach((option, index) => {
      //       if (option.Title == 'BILLING'){
      //         sec = section
      //         ind = index
      //         return
      //       }
      //     });
      //   });
      //   this.selectSetting(ind, sec)
      // }
    }

    editSubscription(subInfo: any){
      const modalRef = this.modalService.open(EditPlanComponent, {size : "lg"});
      modalRef.componentInstance.subInfo = subInfo
  
      let sub = modalRef.dismissed.subscribe((subInfo?: any) => {
        sub.unsubscribe()
        if (subInfo){
          this.subInfo = subInfo ?? ''
        }
      })
    }
    
    storeProducts?: Array<Product> = undefined
  
    async callback(){
      if (Globals.storeInfo.username){
        this.showSpinner()
        this.rootComponent.setOptions()
        this.rootComponent.setFavIcon(Globals.storeInfo.profileLink?.toString() ?? '')

        this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)

        if (isPlatformBrowser(this.platformID)){

  
          if (this.signedIn){
            
            if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
              this.loadService.getCustomer()
            }
            else if (Globals.selectedCurrency == undefined){
              this.loadService.getCountries()
            }
            else if (Globals.themes == undefined){
              this.loadService.getThemes()
            }
            else if (Globals.templates.length == 0 && isPlatformBrowser(this.platformID)){
              this.loadService.getTemplates()
            }
            else if (this.storeProducts == undefined){
              this.loadService.getPosts(products => {
                this.storeProducts = products
              })
            }
            if (Globals.billingInfo == undefined){
              this.loadService.getAllBillingInfo()
            }
            else{
              Globals.storeInfo = JSON.parse(JSON.stringify(Globals.userInfo))
              this.inventory?.forEach(inv => {
                if (!inv.isCustom){
                  let name = Globals.templates.filter(obj => {
                    return obj.productCode == inv.code
                  })[0]?.templateDisplayName
                  inv.name = name
                }
              });
              // this.routingService.routeToProfile(this.getStoreName().link, this.getStoreName().isCustom)
              this.hideSpinner()
              this.setForm()
              this.showWelcomeModal()
              this.cdr.detectChanges()
            }
          }
          else{
            this.spinner.hide("adminSpinner")
            this.rootComponent.accountPressed(2, true)
          }
        }
      }
      else{
        this.routingService.routeTo404(this.getStoreName().isCustom)
      }
    }

    planStatus(){
      if (this.subInfo?.plan.id == "price_1JmgQyIdY1nzc70NXgzC1vCN"){
        return "Thred Core Plan"
      }
      return ""
    }

    planRenewalDate(){
      return new Date(this.subInfo.current_period_end * 1000).toDateString();
    }

    billingInfo(){
      return Globals.billingInfo
    }

    orderTotal(order: Order){
      return this.numberWithCommas(this.formatPrice(this.total(order), false, order))
    }

    orderLoaded(){
      return !this.orders?.find(o => o.products?.length == 0)
    }

    orderSlice(){
      return this.orders?.slice(0,4) ?? []
    }

    orderCount(){
      return this.orders?.filter(o => { return ( (o.status == 'confirmed') || (o.status == 'completed') ) }).length ?? 0
    }
  
    total(order: Order){
      var total = 0
      
      order.products.forEach(product => {
        total += (product.product?.price ?? 0) * (product.quantity ?? 1)
      })
      return total / 100
    }

    numberWithCommas(x: string) {
      return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    beginBankAdd(){
      this.spinner.show("adminSpinner")
      this.loadService.beginBankAdd((urlLink: string) => {
        const link = document.createElement('a');
        link.target = '_blank';

        let url: string = '';
        if (!/^http[s]?:\/\//.test(urlLink)) {
          url += 'http://';
        }
    
        url += urlLink
    
        link.href = url
        window.open(urlLink,"_self")

      })
    }


    routeToBillingAdmin(){
      this.rootComponent.routeToBillingAdmin()
    }

    viewAllOrders(){
      const modalRef = this.dialog.open(ViewAllOrderAdminComponent, {
        width: '800px',
        data: {
          orders: this.orders ?? []
        },
        panelClass: 'app-full-bleed-dialog', 
      });
    
      let sub = modalRef.afterClosed().subscribe(order => {
        sub.unsubscribe()
        if (order as Order){
          this.viewOrder(order)
        }
      });
    }

    viewOrder(order: Order){
      const modalRef = this.dialog.open(ViewOrderAdminComponent, {
        width: '100vw',
        data: {
          order: order
        },
        panelClass: 'app-full-bleed-dialog', 
      });
    
      let sub = modalRef.afterClosed().subscribe(popup => {
        // console.log('The dialog was closed');
        // sub.unsubscribe()
        // if (popup && popup != '0'){
        //   this.loadService.addPopup(popup, success => {
        //     if (success){
        //       this.toast("Popup Saved!")
        //     } 
        //   }, Globals.storeInfo.uid)
        // }
      });
    }
        
    orders?: Array<Order>
    displayedColumns: string[] = ['name', 'value', 'status', 'action'];

    matchingElem(order: Order){
      if (order.status == 'confirmed' || order.status == 'completed'){
        return {
          color: 'info',
          icon: 'credit_card',
          text: 'CONFIRMED'
        }
      }
      else if (order.status == 'cancelled'){
        return {
          color: 'secondary',
          icon: 'cancel',
          text: 'CANCELLED'
        }
      }
      return {
        color: 'success',
        icon: 'local_shipping',
        text: 'SHIPPED'
      }
    }
    
    async init() {
  


      await this.loadService.getCoords()

      if (isPlatformBrowser(this.platformID)){
        let user = (await this.loadService.isLoggedIn())
        let uid = user?.uid
        let isAnon = user?.isAnonymous ?? false
    
        this.signedIn = uid != undefined && !isAnon
  
        if (!this.bankInfo){
          this.loadService.getBankInfo(async (bankInfo: any) => {
            this.bankInfo = (bankInfo && bankInfo?.payouts_enabled == true) ? bankInfo : ''
            this.cdr.detectChanges()
          })
        }
        if (!this.subInfo){
          this.loadService.getSubInfo(async (subInfo: any, canTrial?: boolean) => {
            if (!this.subInfo){
              this.subInfo = subInfo ?? ''
            }
            this.canTrial = canTrial
            this.cdr.detectChanges()
          })
        }
        if (!this.orders){
          this.loadService.getAllOrders(async (arr: Array<Order>) => {

            this.orders = arr ?? []


            

          
            this.orderTable?.renderRows()
            this.cdr.detectChanges()
          })
        }
        if (!this.emailSubs){
          this.loadService.getEmailSubs(uid, async (arr: Array<Dict<any>>) => {
            this.emailSubs = arr as Array<{
              email: string,
              name: string,
              timestamp: string
            }> ?? []
            this.addSubs()
            this.cdr.detectChanges()
          })
        }
        if (!this.phoneSubs){
          this.loadService.getNumSubs(uid, async (arr: Array<Dict<any>>) => {
  
            this.phoneSubs = arr as Array<{
              phone: string,
              name: string,
              timestamp: string
            }> ?? []
            this.addSubs()
            this.cdr.detectChanges()
          })
        }
        if (!this.inventory){
          this.getInventory()
        }
        this.router.queryParams
      .subscribe(params => {

        let selected = params.selected as string

        let s = selected?.toUpperCase()

        var sec = 0
        var ind = 0

        if (selected == undefined) {
          if (this.panels.filter(panel => { return panel.Options.filter(option => { return option.Active}).length > 0}).length == 0){
            this.selectSetting(ind, sec)
          }
        }
        this.panels.forEach((panel, section) => {
          panel.Options.forEach((option, index) => {
            if (option.Title == s){
              sec = section
              ind = index
              return
            }
          });
        });
        if (selected != undefined){
          this.selectSetting(ind, sec)
        }
      }
    );
      }

    const storeInfo = this.getStoreName()
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom)
      
      if (this.classApplied){
        this.state ='rotated'
  
      }
      else{
        this.state = 'default'
      }

      
  
    }

    storeURL(){
      let l = this.getStoreName()
      if (l.isCustom){
        return l.link
      }
      return 'shopmythred.com/' + l.link
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

    async deleteProduct(product: Product){
      this.openPopup("Are you sure?", 'Your product will be removed forever.', product.url.toString(), 'Yes, Remove', 'Never Mind', async () => {
        await this.loadService.deleteProduct({productID : product.productID})
        this.toast("Product Removed")
      })
    }

    openPopup(title: string, message: string, img: string, yesBtn = 'Yes', noBtn = 'No', callback: () => any) {

      const modalRef = this.modalService.open(PopupDialogComponent, {size : "sm", centered: true});
        modalRef.componentInstance.yesBtn = yesBtn
        modalRef.componentInstance.noBtn = noBtn
        modalRef.componentInstance.message = message
        modalRef.componentInstance.title = title
        modalRef.componentInstance.img = img
  
        let sub = modalRef.dismissed.subscribe((resp: any) => {
          sub.unsubscribe()
          if (resp.Success){
            callback()
          }
        })
    }
    

    editProduct(product: Product){
      
      let same = this.templates().find(temp => { return temp.productCode == product.productType}) ?? null
      let sameC = same?.colors.find(co => { return co.code == product.templateColor}) ?? null

      var data: Dict<any> = {
        linkImg: product.url,
        back_linkImg: undefined,
        frontImg: product.picID,
        backImg: undefined,
        selectedTemplate: same,
        selectedColor: sameC,
        suggested_price: product.price / 100,
        templates: this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0}),
        inventory: this.inventory ?? [],
        mode: 'edit',
        product: product
      }
      if (product.supportedSides.find(side => { return side == 'Back'})){
        data.backImg = product.picID
      }
      this.productDetailsMode = true
      this.productDetails = data
    }

    productDetailsMode = false
    productDetails: any 

    createNewProduct(){

      const modalRef = this.dialog.open(DesignComponent, {
        width: '' + this.myInnerHeight() + "px",
        maxWidth: '100vw',
        maxHeight: '100vh',
        data: {
          inventory: this.inventory ?? [], 
          templates: this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0})
        },
      });
    
      let sub = modalRef.afterClosed().subscribe(resp => {
        sub.unsubscribe()
        if (resp == 2){
          this.newInventory()
        }
        else if (resp){
          this.productDetailsMode = true
          resp.templates = this.templates().filter(template => { return !template.onlyBulk || this.inventory?.filter(inv =>{ return inv.code == template.productCode && inv.amount > 0}).length != 0}),
          resp.inventory = this.inventory ?? []
          resp.mode = 'create'
          this.productDetails = resp
        }
        else{
          this.productDetailsMode = false
          this.productDetails = undefined
        }
      });
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

    finish(success: boolean){

      this.productDetailsMode = false
      this.productDetails = undefined
    }

    routeToHome(){
      this.rootComponent.routeToHome()
    }

    signOutPressed(){
      this.loadService.myCallback = () => this.routeToHome()
      this.loadService.signOut()
    }

    addTags(title: string, imgUrl: string, description: string, url: string){
      this.metaService.updateTag({property: 'og:title', content: title  + " - " + "My Account"});
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


}
