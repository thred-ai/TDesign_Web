import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Globals } from './globals';


var routes: Routes = [

  

  { path: '', loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule)},
  { path: 'not-found', redirectTo: '', pathMatch: 'full' },
  { path: 'not-found/home', redirectTo: '', pathMatch: 'full' },

  { path: ':user', redirectTo: '/:user/home', pathMatch: 'full'},
  { path: ':user/home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  { path: ':user/about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)},
  { path: ':user/products', loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule)},
  // { path: ':user/blogs', module:  BlogsModule},
  { path: ':user/products/:product', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)},
  { path: ':user/orders/:order', loadChildren: () => import('./view-order-info/view-order-info.module').then((m) => m.ViewOrderInfoModule)},
  { path: ':user/orders', loadChildren: () => import('./view-order/view-order.module').then((m) => m.ViewOrderModule)},

  // { path: ':user/blogs/:article', module:  ArticleModule},
  { path: ':user/cart', loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule)},
  { path: ':user/shipping-address', loadChildren: () => import('./shipping-address/shipping-address.module').then((m) => m.ShippingAddressModule)},
  { path: ':user/billing-info', loadChildren: () => import('./billing-info/billing-info.module').then((m) => m.BillingInfoModule)},
  { path: ':user/my-store/billing', loadChildren: () => import('./billing-admin/billing-admin.module').then((m) => m.BillingAdminModule)},

  { path: ':user/review-order', loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule)},
  { path: ':user/not-found', loadChildren: () => import('./invalid-page/invalid-page.module').then((m) => m.InvalidPageModule)},
  { path: ':user/my-store', loadChildren: () => import('./admin-view/admin-view.module').then((m) => m.AdminViewModule)},
  { path: 'not-found/404', redirectTo: '', pathMatch: 'full' },
  {path: ':user/:404', redirectTo: '/:user/not-found'}

]



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    paramsInheritanceStrategy: 'always'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
