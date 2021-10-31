import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LoadService, Dict } from '../services/load.service';
import { RoutingService } from '../services/routing.service';

import { Globals } from '../globals';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private titleService: Title, 
    private metaService: Meta,
    private loadService: LoadService,
    private routingService: RoutingService,
    private rootComponent: AppComponent,
    private _router: Router,
    private spinner: NgxSpinnerService,
  ) {}

  storeInfo(){return Globals.storeInfo}

  availableCurrencies(){return Globals.availableCurrencies}

  selectedCurrency(){return Globals.selectedCurrency}

  templates(){return Globals.availableTemplates}

  availableTemplates(){return Globals.availableTemplates}


  defaultBio = "Hello! <br/><br/>FULL9NAME was made for creative trail blazers like you. The dreamers who seek new adventures that warp reality and transcend time. Our lust for life lives on through our unique pieces. Here’s your chance to display inspiration, love, heartache, vibes in the form of a unique piece of clothing/accessory not found anywhere else in the world but here… <br/><br/>With a purchase of FULL9NAME you show the world that you are a free thinker, and belong to the tribe of dreamers. We welcome you with open arms. <br/><br/> We are FULL9NAME."
  
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

  isBrowser(){
    return isPlatformBrowser(this.platformID)
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

  storeBio(){
    let bio = this.storeInfo().bio

    if (bio == "" || bio == undefined){
      return this.defaultBio.replace(/FULL9NAME/g, this.storeInfo().fullName?.trim() ?? "This brand")
    }
    return bio.replace(/\n/g, "<br>") ?? "";
  }

    ngOnInit(): void {
      this.init()
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
  
    callback(){
      if (Globals.storeInfo.username){
        this.showSpinner()
        this.rootComponent.setOptions()
        this.rootComponent.setFavIcon(Globals.storeInfo.profileLink!.toString())

        this.addTags(Globals.storeInfo.fullName ?? "Thred", (Globals.storeInfo.profileLink ?? new URL("https://shopmythred.com")).toString(), Globals.storeInfo.bio ?? "Check out my Thred Store!", "shopmythred.com/" + Globals.storeInfo.username)

        if (isPlatformBrowser(this.platformID)){
          this.loadService.logView()
        }
        if (Globals.userInfo == undefined && isPlatformBrowser(this.platformID)){
          this.loadService.getCustomer()
        }
        else{
          if (isPlatformBrowser(this.platformID)){
            this.cdr.detectChanges()
          }  
        }
      }
      else{
        this.routingService.routeTo404(this.getStoreName().isCustom)
      }
    }

    addTags(title: string, imgUrl: string, description: string, url: string){
      this.metaService.updateTag({property: 'og:title', content: title + " - " + "About"});
      this.metaService.updateTag({property: 'og:image', content: imgUrl});
      this.metaService.updateTag({property: 'og:url', content: url})
      this.metaService.updateTag({property: 'og:description', content: description})
      this.titleService.setTitle(title)
      this.metaService.updateTag({property: 'description', content: description})
  
    }
    
    init() {
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

}
