import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from "@angular/common";
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { NgxStripeModule } from 'ngx-stripe';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { BillingAdminComponent } from './billing-admin.component';

const routes: Routes = [
  {
    path: '',
    component: BillingAdminComponent,
  },
];


@NgModule({
  declarations: [
    BillingAdminComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    NgxSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    RouterModule.forChild(routes),
    NgxStripeModule.forRoot('pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK'),


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [BillingAdminComponent]
})
export class BillingAdminModule { }
