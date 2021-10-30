import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private _router: Router, @Inject(PLATFORM_ID) private platformID: Object) { }

  routeTo404(isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("404")
      return
    }
    this._router.navigateByUrl("not-found")
  }

  routeToStore404(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("not-found")
      return
    }
    this._router.navigateByUrl(storeName + '/' + "not-found")
  }

  routeToHome(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("home")
      return
    }
    this._router.navigateByUrl(storeName + "/" + "home")
  }

  routeToOrders(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("orders")
      return
    }
    this._router.navigateByUrl(storeName + "/" + "orders")
  }

  routeToShop(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("products")
      return
    }
    this._router.navigateByUrl(storeName + "/" + "products")
  }

  routeToAbout(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("about")
      return
    }
    this._router.navigateByUrl(storeName + "/" + "about")
  }

  routeToCart(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("cart")
      return
    }
    this._router.navigateByUrl(storeName + "/" + "cart")
  }

  routeToProduct(productID: string, storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("products/" + productID)
      return
    }
    this._router.navigateByUrl(storeName + "/" + "products/" + productID)
  }

  routeToOrder(orderID: string, storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("orders/" + orderID)
      return
    }
    this._router.navigateByUrl(storeName + "/" + "orders/" + orderID)
  }

  routeToProfile(storeName: string, isCustom: boolean = false, selected?: string, externalURL?: string){
    var url = ""
    if (externalURL){
      url = "externalURL" + "/" + "my-store"
      if (selected){
        url += "/?selected=" + selected
      }

      window.location.href = url
    }
    else{
      if (isCustom){
        url = "my-store"
      }
      else{
        url = storeName + "/" + "my-store"
      }
      if (selected){
        url += "/?selected=" + selected
      }
      this._router.navigateByUrl(url)
    }
  }

  routeToShipping(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("shipping-address")
      return
    }
    this._router.navigateByUrl(storeName + '/shipping-address')
  }

  routeToReview(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("review-order")
      return
    }
    this._router.navigateByUrl(storeName + '/' + "review-order")
  }

  routeToBilling(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("/billing-info")
      return
    }
    this._router.navigateByUrl(storeName + '/billing-info')
  }

  routeToBillingAdmin(storeName: string, isCustom: boolean = false){
    if (isCustom){
      this._router.navigateByUrl("my-store/billing")
      return
    }
    this._router.navigateByUrl(storeName + '/my-store/billing')
  }
  

}
