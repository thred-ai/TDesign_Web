import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(
    private _router: Router,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {}

  linkImgPressed(
    storeName: string,
    imgLink: string,
    isCustom: boolean = false
  ) {
    const availableLinks = [
      'about',
      'shipping-address',
      'billing-info',
      'shipping-address',
      'review-order',
      'products',
      'blogs',
      'cart',
      'orders',
    ];

    let condition =
      imgLink.includes('shopmythred.com') ||
      imgLink.includes('ok') ||
      imgLink.includes(globalThis.location.host);

    let word = '';
    let split = imgLink.split('/');

    if (availableLinks.find((i) => i == split[split.length - 1]) && condition) {
      word = split[split.length - 1];
      if (isCustom) {
        this.redirectTo(word);
        return;
      }
      this.redirectTo(storeName + '/' + word);
      return;
    } else if (
      availableLinks.find((i) => i == split[split.length - 2]) &&
      condition
    ) {
      let id = split[split.length - 1];
      let category = split[split.length - 2];

      word = category + '/' + id;
      if (isCustom) {
        this.redirectTo(word);
        return;
      }
      this.redirectTo(storeName + '/' + word);
      return;
    }
    const link = document.createElement('a');
    link.target = '_blank';
    let url: string = '';
    if (!/^http[s]?:\/\//.test(imgLink)) {
      url += 'http://';
    }

    url += imgLink;

    link.href = url;

    link.setAttribute('visibility', 'hidden');
    link.click();
    link.remove();
  }

  redirectTo(uri:string, shouldRefresh = true){
    if (shouldRefresh){
      this._router.navigateByUrl('not-found').then(()=>
      this._router.navigateByUrl(uri))
      return
    }
    this._router.navigateByUrl(uri)
  }

  routeTo404(isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('404');
      return;
    }
    this.redirectTo('not-found');
  }

  routeToStore404(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      globalThis.window.open((Globals.storeInfo.customURL?.fullURL ?? '') + '/410', '_self')
      return;
    }
    this.redirectTo(storeName + '/' + 'not-found');
  }

  routeToHome(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('home', true);
      return;
    }
    this.redirectTo(storeName + '/' + 'home');
  }


  routeToDynamicLink(storeName: string, link: string, isCustom: boolean = false,) {
    if (isCustom) {
      this.redirectTo(link, true);
      return;
    }
    this.redirectTo(storeName + '/' + link);
  }

  routeToOrders(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('orders');
      return;
    }
    this.redirectTo(storeName + '/' + 'orders');
  }

  routeToShop(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('products', true);
      return;
    }
    this.redirectTo(storeName + '/' + 'products');
  }

  routeToAbout(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('about', true);
      return;
    }
    this.redirectTo(storeName + '/' + 'about');
  }

  routeToCart(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('cart');
      return;
    }
    this.redirectTo(storeName + '/' + 'cart');
  }

  routeToProduct(
    productID: string,
    storeName: string,
    isCustom: boolean = false
  ) {
    if (isCustom) {
      this.redirectTo('products/' + productID);
      return;
    }
    this.redirectTo(storeName + '/' + 'products/' + productID);
  }

  routeToOrder(orderID: string, storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('orders/' + orderID);
      return;
    }
    this.redirectTo(storeName + '/' + 'orders/' + orderID);
  }

  routeToProfile(
    storeName: string,
    isCustom: boolean = false,
    selected?: string,
    externalURL?: string,
  ) {
    var url = '';
    if (externalURL) {
      url = externalURL + '/' + 'my-store';
      if (selected) {
        url += '?selected=' + selected;
      }

      window.location.href = url;
    } else {
      if (isCustom) {
        url = 'my-store';
      } else {
        url = storeName + '/' + 'my-store';
      }
      if (selected) {
        url += '?selected=' + selected;
      }
      this.redirectTo(url, false);
    }
  }

  routeToShipping(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('/shipping-address');
      return;
    }
    this.redirectTo(storeName + '/shipping-address');
  }

  routeToReview(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('review-order');
      return;
    }
    this.redirectTo(storeName + '/' + 'review-order');
  }

  routeToBilling(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('/billing-info');
      return;
    }
    this.redirectTo(storeName + '/billing-info');
  }

  routeToBillingAdmin(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this.redirectTo('my-store/billing');
      return;
    }
    this.redirectTo(storeName + '/my-store/billing');
  }
}
