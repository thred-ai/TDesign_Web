import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { Globals } from './globals';

var routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  { path: 'not-found', redirectTo: '', pathMatch: 'full' },
  { path: 'not-found/home', redirectTo: '', pathMatch: 'full' },
  { path: 'api/auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'api/load', component: AuthComponent, pathMatch: 'full' },
  { path: ':user', redirectTo: '/:user/home', pathMatch: 'full' },
  {
    path: ':user/nft/:product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },

  {
    path: ':user/my-store/billing',
    loadChildren: () =>
      import('./billing-admin/billing-admin.module').then(
        (m) => m.BillingAdminModule
      ),
  },

  {
    path: ':user/my-store',
    loadChildren: () =>
      import('./admin-view/admin-view.module').then((m) => m.AdminViewModule),
  },
  { path: 'not-found/404', redirectTo: '', pathMatch: 'full' },

  {
    path: ':user/:page',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  { path: ':user/:404', redirectTo: '/:user/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
