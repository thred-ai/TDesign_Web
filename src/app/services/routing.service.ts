import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

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
      imgLink.includes('localhost:4200') ||
      imgLink.includes(globalThis.location.host);

    let word = '';
    let split = imgLink.split('/');

    if (availableLinks.find((i) => i == split[split.length - 1]) && condition) {
      word = split[split.length - 1];
      if (isCustom) {
        this._router.navigateByUrl(word);
        return;
      }
      this._router.navigateByUrl(storeName + '/' + word);
      return;
    } else if (
      availableLinks.find((i) => i == split[split.length - 2]) &&
      condition
    ) {
      let id = split[split.length - 1];
      let category = split[split.length - 2];

      word = category + '/' + id;
      if (isCustom) {
        this._router.navigateByUrl(word);
        return;
      }
      this._router.navigateByUrl(storeName + '/' + word);
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

  routeTo404(isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('404');
      return;
    }
    this._router.navigateByUrl('not-found');
  }

  routeToStore404(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('not-found');
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'not-found');
  }

  routeToHome(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('home');
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'home');
  }

  routeToOrders(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('orders');
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'orders');
  }

  routeToShop(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('products');
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'products');
  }

  routeToAbout(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('about');
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'about');
  }

  routeToCart(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('cart');
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'cart');
  }

  routeToProduct(
    productID: string,
    storeName: string,
    isCustom: boolean = false
  ) {
    if (isCustom) {
      this._router.navigateByUrl('products/' + productID);
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'products/' + productID);
  }

  routeToOrder(orderID: string, storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('orders/' + orderID);
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'orders/' + orderID);
  }

  routeToProfile(
    storeName: string,
    isCustom: boolean = false,
    selected?: string,
    externalURL?: string
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
      this._router.navigateByUrl(url);
    }
  }

  routeToShipping(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('/shipping-address');
      return;
    }
    this._router.navigateByUrl(storeName + '/shipping-address');
  }

  routeToReview(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('review-order');
      return;
    }
    this._router.navigateByUrl(storeName + '/' + 'review-order');
  }

  routeToBilling(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('/billing-info');
      return;
    }
    this._router.navigateByUrl(storeName + '/billing-info');
  }

  routeToBillingAdmin(storeName: string, isCustom: boolean = false) {
    if (isCustom) {
      this._router.navigateByUrl('my-store/billing');
      return;
    }
    this._router.navigateByUrl(storeName + '/my-store/billing');
  }
}
