import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { Globals } from './globals';
import { PhoneMaskDirective } from './phone-mask.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxStripeModule } from 'ngx-stripe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PixelModule } from 'ngx-pixel';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { InViewportModule } from 'ng-in-viewport';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationPipesModule } from './shared/applicationPipes.module';
import { AuthComponent } from './auth/auth.component';
import {
  AngularFireFunctionsModule,
  AngularFireFunctions,
} from '@angular/fire/compat/functions';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- include ScrollHooks
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,

    AngularFireModule.initializeApp(environment.firebase),

    NgbModule,
    MatInputModule,
    MatSelectModule,
    NgxSpinnerModule,
    DragScrollModule,
    MatSnackBarModule,
    MatDialogModule,
    LoginModule,
    PixelModule.forRoot({ pixelId: '646165189889348' }),
    NgxStripeModule.forRoot('pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK'),
    InViewportModule,
    HttpClientModule,
    ApplicationPipesModule,
    AngularFireFunctionsModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    LazyLoadImageModule,
    MatSidenavModule,
    NgbModule,
    MatTabsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    Globals,
    // { provide: USE_FUNCTIONS_EMULATOR, useValue: !environment.production ? ['localhost', 5001] : undefined },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router, functions: AngularFireFunctions) {
    // functions.useEmulator('localhost', 5001)

    // var request = Globals.URL;
    // if (globalThis.location) {
    //   request = globalThis.location.host;
    // }
    // if (
    //   request != 'localhost:4200' && request != Globals.ngrokId &&
    //   request != 'shopmythred.com' &&
    //   request != Globals.ngrokId &&
    //   request != ''
    // ) {
    //   router.config = [
    //     { path: '', redirectTo: 'home', pathMatch: 'full' },
    //     { path: 'not-found/home', redirectTo: 'not-found', pathMatch: 'full' },

    //     // { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},

    //     // { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)},
    //     // { path: ':user/blogs', module:  BlogsModule},
    //     {
    //       path: 'nft/:product',
    //       loadChildren: () =>
    //         import('./product/product.module').then((m) => m.ProductModule),
    //     },
    //     {
    //       path: 'my-store/billing',
    //       loadChildren: () =>
    //         import('./billing-admin/billing-admin.module').then(
    //           (m) => m.BillingAdminModule
    //         ),
    //     },

    //     {
    //       path: 'my-store',
    //       loadChildren: () =>
    //         import('./admin-view/admin-view.module').then(
    //           (m) => m.AdminViewModule
    //         ),
    //     },
    //     // {
    //     //   path: '404',
    //     //   loadChildren: () =>
    //     //     import('./landing/landing.module').then((m) => m.LandingModule),
    //     //   pathMatch: 'full',
    //     // },

    //     {
    //       path: ':page',
    //       loadChildren: () =>
    //         import('./home/home.module').then((m) => m.HomeModule),
    //     },

    //     { path: '**', redirectTo: 'not-found' },
    //   ];
    // }
  }
}
