import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { AngularFaviconService } from 'angular-favicon';
import { Country } from './models/shipping-country.model';
import { Template } from './models/template.model';
import { Globals } from './globals';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  Event as NavigationEvent,
  RoutesRecognized,
  ActivationStart,
  NavigationStart,
  RouterEvent,
} from '@angular/router';
import { LoadService, Dict } from './services/load.service';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { isPlatformBrowser, isPlatformServer, DOCUMENT } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
import { AuthService } from './services/auth.service';

import * as AOS from 'aos';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ethers } from 'ethers';
import { from } from 'rxjs';
import detectEthereumProvider from '@metamask/detect-provider';
import { Collection } from './models/collection.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'thred-web';

  mode = 'All Products';

  storeInfo?: Store = undefined;

  availableCurrencies() {
    return Globals.availableCurrencies;
  }

  selectedCurrency() {
    return Globals.selectedCurrency;
  }

  templates() {
    return Globals.availableTemplates;
  }

  availableTemplates() {
    return Globals.availableTemplates;
  }

  selectedTemplate() {
    return Globals.selectedTemplate;
  }

  profileSettings: Array<Dict<any>> = [];

  @ViewChild('carousel', { read: DragScrollComponent })
  ds?: DragScrollComponent;

  moveLeft() {
    this.ds!.moveLeft();
  }

  ownedCollections(address: string | null | undefined) {
    // if (address) {
    //   return (
    //     Globals.storeInfo?.collections?.filter((c) =>
    //       c.NFTs.find((n) => n?.seller.toLowerCase() == address.toLowerCase())
    //     ) ?? []
    //   );
    // }
    return [];
  }

  ownedProducts(address: string | null | undefined, collection: Collection) {
    // if (address) {
    //   return collection.NFTs.filter(
    //     (n) => n.seller.toLowerCase() == address.toLowerCase()
    //   );
    // }
    return [];
  }

  moveRight() {
    if (this.ds?.currIndex == (this.storeInfo?.banners?.length ?? 0) - 1) {
      this.ds?.moveTo(0);
    } else {
      this.ds?.moveRight();
    }
  }

  didMove() {
    // this.selectedColor = this.selectedTemplate?.colors[this.ds?.currIndex ?? 0]
  }

  changeIcon() {
    document
      .getElementById('appIcon')!
      .setAttribute('href', 'https://www.google.com/favicon.ico');
  }

  hasPixel = false;

  initializePixel(pixelID?: string) {
    if (this.getStoreName().isCustom) {
      if (!this.hasPixel && pixelID) {
        this.hasPixel = true;
        this.pixelService.remove();
        this.pixelService.initialize(pixelID);
      }
    } else {
      if (!this.hasPixel) {
        this.hasPixel = true;
        this.pixelService.initialize();
      }
    }
  }

  async setOptions() {
    let user = await this.loadService.isLoggedIn();
    let uid = user?.uid;
    let isAnon = user?.isAnonymous ?? false;

    this.signedIn = uid != undefined && !isAnon;

    if (this.signedIn) {
      this.signedInUid = uid;
    }

    this.profileSettings = [];

    var option = {
      Title: 'My Store',
      Link: '/' + 'STORE_NAME' + '/my-store',
      Function: this.routeToProfile,
    };

    var option3 = {
      Title: 'Sign Out',
      Link: '/' + 'null',
      Function: undefined,
    };

    if (!this.signedIn) {
      option3 = {
        Title: 'Sign In',
        Link: '/' + 'null',
        Function: undefined,
      };
    }

    this.profileSettings = [option, option3];
  }

  async closeBtn(result: string) {
    // this.modalService.dismissAll("success")

    if (
      (await this.loadService.authenticated()) &&
      !(await this.loadService.isLoggedIn())?.isAnonymous
    ) {
      this.routeToProfile();
    } else {
      this.routeToHome();
    }
  }

  selectedTheme(alpha?: number, bg_alpha?: number) {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    let color =
      'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + alpha ?? co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bg_alpha ??
      bco[3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  bannerTheme(banner?: Banner) {
    if (!banner) {
      banner = this.storeInfo?.banners[this.ds?.currIndex ?? 0]!;
    }

    let co = banner.color;
    let bco = banner.bg_color;
    let text = banner.text;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      text: text,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  reloadCurrentRoute() {
    const currentUrl = this._router.url;

    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }

  isAdmin() {
    return this.router.snapshot.firstChild?.routeConfig?.path?.includes(
      'my-store'
    );
  }

  isLanding() {
    return (
      (this.router.snapshot.firstChild?.routeConfig?.path?.trim() ?? '') == ''
    );
  }

  isOrder() {
    return this.router.snapshot.firstChild?.routeConfig?.path?.includes(
      'orders'
    );
  }

  async routeToProfile(selected?: string) {
    // if (Globals.storeInfo?.username) {
    // this.loadService.myCallback = undefined;
    // if (Globals.storeInfo?.uid != Globals.userInfo?.uid) {
    //   // Globals.storeInfo = JSON.parse(JSON.stringify(Globals.userInfo));
    //   this.routingService.routeToProfile(
    //     Globals.storeInfo?.username!,
    //     this.getStoreName().isCustom,
    //     selected,
    //     'https://shopmythred.com/' + Globals.storeInfo?.username
    //   );
    // } else {

    this.loadService.getUser(
      '',
      (await this.loadService.isLoggedIn())?.uid,
      this.getStoreName().isCustom,
      (user) => {
        if (user?.username) {
          if (this.isAdmin()) {
            this.reloadCurrentRoute();
            return;
          } else {
            this.routingService.routeToProfile(
              user?.username!,
              this.getStoreName().isCustom,
              selected
            );
            return;
          }
        }
      }
    );
    // }
    // } else {
    //   this.loadService.myCallback = () => this.routeToProfile();
    //   this.loadService.getCustomer();
    // }
  }

  cart?: Array<ProductInCart> = undefined;

  getStoreName() {
    var request = '';
    if (isPlatformServer(this.platformID)) {
      request = Globals.URL;
    } else {
      request = globalThis.location.host;
    }
    if (
      request != 'localhost:4200' &&
      request != Globals.ngrokId &&
      request != 'shopmythred.com'
    ) {
      return {
        isCustom: false,
        link: request,
      };
    }
    const routeParams = this.router.snapshot.paramMap;
    const storeID = routeParams.get('user') as string;
    return {
      isCustom: false,
      link: storeID,
    };
  }

  routeToHome() {
    this.setOptions();
    if (Globals.storeInfo?.username)
      this.routingService.routeToHome(
        Globals.storeInfo?.username,
        this.getStoreName().isCustom
      );
  }

  routeToImgLink(link?: string) {
    this.setOptions();
    if (Globals.storeInfo?.username && link)
      this.routingService.linkImgPressed(
        Globals.storeInfo?.username,
        link,
        this.getStoreName().isCustom
      );
  }



  routeToCart() {
    if (Globals.storeInfo?.username)
      this.routingService.routeToCart(
        Globals.storeInfo?.username,
        this.getStoreName().isCustom
      );
  }

  routeToProduct(productID: string) {
    if (Globals.storeInfo?.username)
      this.routingService.routeToProduct(
        productID,
        Globals.storeInfo?.username,
        this.getStoreName().isCustom
      );
  }

  routeToProductWindow(productID: string, username: string) {
    if (username) {
      this.routingService.routeToProduct(productID, username, false);
    }
  }


  routeToBillingAdmin() {
    if (Globals.storeInfo?.username)
      this.routingService.routeToBillingAdmin(
        Globals.storeInfo?.username,
        this.getStoreName().isCustom
      );
  }


  async accountPressed(authMode = 1, prefillUser = false) {
    if (
      (await this.loadService.authenticated()) &&
      !(await this.loadService.isLoggedIn())?.isAnonymous
    ) {
      this.routeToProfile();
    } else {
      if (!this.modalService.hasOpenModals()) {
        const modalRef = this.modalService.open(LoginComponent, { size: 'lg' });
        let sub = modalRef.dismissed.subscribe((result: string) => {
          this.closeBtn(result);
          sub.unsubscribe();
        });
        modalRef.componentInstance.authMode = authMode;
        if (prefillUser) {
          modalRef.componentInstance.loginForm.controls.username.setValue(
            Globals.storeInfo?.username
          );
        }
      }
    }
  }

  signInWithWallet() {}

  settings(popFirst: boolean) {
    if (popFirst) {
      return this.profileSettings.slice(1, -1) ?? [];
    }
    return this.profileSettings ?? [];
  }

  signInPressed() {
    if (!this.modalService.hasOpenModals()) {
      const modalRef = this.modalService.open(LoginComponent, { size: 'lg' });
      let sub = modalRef.dismissed.subscribe((result: string) => {
        sub.unsubscribe();
      });
      modalRef.componentInstance.authMode = 1;
    }
  }

  storeLink(link: string) {
    return link.replace('STORE_NAME', this.storeInfo?.username ?? '');
  }

  cartLength() {
    if (this.cart?.length == 0) {
      return '0';
    }
    var totalCount = 0;
    this.cart?.forEach((product) => {
      totalCount += product.quantity ?? 0;
    });
    return totalCount;
  }

  updateCurrency(currency: Country) {
    Globals.selectedCurrency = currency;
    if (isPlatformBrowser(this.platformID)) {
      localStorage.setItem('LOCAL_CURRENCY', currency.currency_name);
    }
    this.cdr.detectChanges();
  }

  // ?product_type=Dresses

  formatPrice(price: number) {
    var priceAsString = new String(
      (price * Globals.selectedCurrency!.rate).toFixed(2)
    );
    let index = priceAsString.indexOf('.');

    switch (index) {
      case priceAsString.length - 1:
        priceAsString += '00';
        break;
      case priceAsString.length - 2:
        priceAsString += '0';
        break;
      default:
        break;
    }
    return (
      this.getCurrencyForCountry(
        Globals.selectedCurrency!,
        Globals.selectedCurrency!.name != 'US'
      ) + priceAsString
    );
  }

  isMobile() {
    if (isPlatformBrowser(this.platformID)) {
      let height = window.innerHeight;
      let width = window.innerWidth;
      return width < height;
    }
    return false;
  }

  getCurrencyForCountry(country: Country, shouldShowName: boolean) {
    var returnItem = country.currency_symbol;
    if (shouldShowName) returnItem = country.name + ' ' + returnItem;

    return returnItem;
  }

  myInnerHeight() {
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (width < height) {
      return width * 0.98;
    } else {
      return height * 0.7;
    }
  }

  applyProductFilter(template?: Template) {
    // let id = template?.productCode;
    // this.mode = this.titleCase(template?.templateDisplayName ?? 'All Products');
    // if (Globals.storeInfo?.username) {
    //   this.loadService.myCallback = () => this.cdr.detectChanges();
    //   // this.loadService.getPosts(id)
    //   this.loadService.getPosts((products) => {
    //     this.loadService.setFilterProducts(products);
    //   }, id);
    // }
  }

  isShopComponent() {
    let config =
      this.router.snapshot.firstChild?.routeConfig?.path?.split('/') ?? [];
    return config![config!.length - 1] == 'products';
  }

  shouldShowCurrency() {
    // return this.loadService.shouldShowCurrency

    let product = this.router.snapshot.firstChild?.paramMap.get(
      'product'
    ) as string;

    return (
      product != undefined ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes(
        'products'
      ) ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes('home') ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes('cart') ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes(
        'shipping-address'
      ) ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes(
        'billing-info'
      ) ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes(
        'review-order'
      ) ||
      this.router.snapshot.firstChild?.routeConfig?.path?.includes('my-store')
    );
  }

  isBrowser() {
    return isPlatformBrowser(this.platformID);
  }

  titleCase(str: string) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  hexToUtf8(hex: string) {
    return decodeURIComponent('%' + hex.match(/.{1,2}/g)?.join('%'));
  }

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    @Inject(DOCUMENT) private doc: Document,
    public cdr: ChangeDetectorRef,
    public router: ActivatedRoute,
    private loadService: LoadService,
    private routingService: RoutingService,
    private pixelService: PixelService,
    private authService: AuthService,

    private modalService: NgbModal,
    private _router: Router,
    private dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {


    if (isPlatformBrowser(this.platformID)){
      window.addEventListener('message', (event) => {
        if (event.data.open) {
          let info = JSON.parse(this.hexToUtf8(event.data.open));
          let docID = info.docId;
          let store = info.store as Store
          Globals.storeInfo = store
          Globals.sInfo.next(Globals.storeInfo)
          console.log(docID)
          this.routeToProduct(`${docID}`)
        }
        if (event.data.close){
          console.log("close")
          this.routeToHome()//
        }
      });
    }


    this.check();

    if (isPlatformBrowser(this.platformID)) {
      (<any>window).routeToLink = this.routeToLink.bind(this);
      (<any>window).globals = Globals;
      AOS.init();

      this.matIconRegistry.addSvgIcon(
        `polygon_icon`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/polygon_logo.svg`
        )
      );
      this.matIconRegistry.addSvgIcon(
        `weth_icon`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/weth_logo.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `doge_icon`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/doge_logo.svg`)
      );
      this.matIconRegistry.addSvgIcon(
        `btc_icon`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/btc_logo.svg`)
      );
    }
  }

  async openWallet() {
    if (Globals.provider) {
      Globals.provider = undefined;
    } else {
      try {
        let provider = await Globals.initializeProvider();
        Globals.provider = provider;
      } catch (error) {
        console.log(error);
      }
    }

    // if (await this.loadService.isUnlocked()){
    //   console.log('wallet unlocked')
    // }
    // else{
    //   const provider = await this.loadService.initializeProvider()

    //   Globals.provider = provider

    //   console.log('wallet linked')
    // }
  }

  async check() {
    if (isPlatformBrowser(this.platformID)) {
      import('seamless-scroll-polyfill');

      let polyfill = (await import('seamless-scroll-polyfill')).polyfill;
      polyfill();
    }
  }

  ngAfterViewInit(): void {}

  setFavIcon(link: string) {
    if (isPlatformBrowser(this.platformID)) {
      this.createLinkForFavURL(link);
      // this.setBodyColor();
    }
  }

  setBodyColor(color?: string) {
    if (isPlatformBrowser(this.platformID)) {
      if (document.getElementById('body')) {
        document.getElementById('body')?.classList.add('bg-transparent');
      }
    }
  }

  addConfig() {
    // this.setBodyColor('dark');
    this.createLinkForFavURL(
      'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Ffavicon_thred.png?alt=media'
    );
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  headerName(h: string) {
    return this.storeInfo?.pages?.find((p) => p.id == h)?.title ?? '';
  }

  routeToLink(h: string) {
    let link = this.storeInfo?.pages?.find((p) => p.id == h)?.url ?? 'home';

    if (Globals.storeInfo?.username)
      this.routingService.routeToDynamicLink(
        Globals.storeInfo?.username,
        link,
        this.getStoreName().isCustom
      );
  }

  activateComponent(event: any) {
    if (event.constructor.name == 'LandingComponent') {
      this.addConfig();
      // event.addTags("Thred - Get Started", "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flanding_page.png?alt=media", "Start your store in 30 seconds, Free.", "shopmythred.com")
    }
    // else if (event.constructor.name == 'HomeComponent'){
    //   console.log('visa')
    //   event.ngOnInit()
    // }
    // console.log(event)
  }

  shake = false;

  createLinkForFavURL(url: string) {
    if (isPlatformBrowser(this.platformID)) {
      if (document.getElementById('appIcon')) {
        document.getElementById('appIcon')!.setAttribute('href', url);
      } else {
        let link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'icon');
        link.setAttribute('id', 'appIcon');
        link.setAttribute('type', 'image/x-icon');
        link.setAttribute('href', url);
        this.doc.head.appendChild(link);
      }
      if (document.getElementById('appleIcon')) {
        document.getElementById('appleIcon')!.setAttribute('href', url);
      } else {
        let link2: HTMLLinkElement = this.doc.createElement('link');
        link2.setAttribute('rel', 'apple-touch-icon');
        link2.setAttribute('id', 'appleIcon');
        link2.setAttribute('type', 'image/x-icon');
        link2.setAttribute('href', url);
        this.doc.head.appendChild(link2);
      }
    }
  }

  getLinkImg(name: string) {
    return Globals.socials.filter((obj) => {
      return obj.name == name;
    })[0].img;
  }

  openSocial(l: string) {
    const link = document.createElement('a');
    link.target = '_blank';

    let url: string = '';
    if (!/^http[s]?:\/\//.test(l)) {
      url += 'http://';
    }

    url += l;

    link.href = url;

    link.setAttribute('visibility', 'hidden');
    link.click();
    link.remove();
  }

  signedIn = false;
  signedInUid?: any;

  interval: any;

  setInterval() {
    if (this.interval) {
      return;
    }
    if (Globals.storeInfo?.bannerStyle == 0) {
      this.interval = setInterval(() => {
        this.moveRight();
      }, 3000);
    } else {
      this.initScroll();
    }
  }

  initScroll() {
    this.interval = 0;
    let outer = document.querySelector('#outer') as HTMLElement;

    if (outer) {
      let content = outer.querySelector('#content') as HTMLElement;

      this.repeatContent(content, outer.offsetWidth);

      let el = outer.querySelector('#loop');
      if (el) {
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

  arrLength() {
    if (this.storeInfo?.banners.length == 0) {
      return [];
    }

    return Array(12 / (this.storeInfo?.banners.length ?? 0)).fill(0);
  }

  providerName() {
    if (Globals.provider) {
      return 'CONNECTED';
    }
    return 'CONNECT WALLET';
  }

  async setProvider() {
    if (window.ethereum && (window.ethereum as any).selectedAddress) {
      Globals.provider = new ethers.providers.Web3Provider(
        window.ethereum,
        'any'
      );

      // console.log(Globals.provider)
    }
  }

  get loggedIn() {
    return (
      this.storeInfo?.uid != undefined &&
      this.storeInfo?.uid != '' &&
      this.storeInfo?.uid == this.signedInUid
    );
  }

  async ngOnInit() {
    // this.setFavIcon("https://www.thredapps.com/favicon.ico")
    // OR

    this.loadService.rootComponent = this;
    this.authService.app = this;

    Globals.sInfo.subscribe((s) => {
      this.storeInfo = s;
    });

    this.setOptions();
    this.setProvider();

    // this.loadService.migratePhotos()
    // if (await this.loadService.authenticated()){
    //   // this.openWallet()
    // }

    // await Globals.checkProvider()
    let provider = (await detectEthereumProvider()) as any;
    if (provider) {
      provider.on('accountsChanged', (accounts: Array<string>) =>
        console.log(accounts)
      );
      provider.on('chainChanged', (_chainId: any) => window.location.reload());
    }

    // if (isPlatformBrowser(this.platformID)){
    //   AOS.init();
    // }

    // this._router.events
    //       .subscribe(
    //         (event: NavigationEvent) => {
    //           if(event instanceof NavigationStart) {
    //             console.log(event.url)
    //       }
    // });

    this.loadService.getCryptoRates((rates: Dict<any>[]) => {
      Globals.rates = rates;
    });
  }

  get provider() {
    return Globals.provider;
  }

  ethereum() {
    return window.ethereum;
  }

  closeBanner = false;
}
