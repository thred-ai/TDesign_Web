import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from "@angular/common";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CheckoutComponent } from './checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxStripeModule } from 'ngx-stripe';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
];


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes),
    NgxStripeModule.forRoot('pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK'),

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [CheckoutComponent]
})
export class CheckoutModule { }
