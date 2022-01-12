import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from "@angular/common";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ViewOrderComponent } from './view-order.component';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationPipesModule } from '../shared/applicationPipes.module';

const routes: Routes = [
  {
    path: '',
    component: ViewOrderComponent,
  },
];

@NgModule({
  declarations: [
    ViewOrderComponent
  ],



  imports: [
    CommonModule,
    MatCardModule,
    ApplicationPipesModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [ViewOrderComponent]
})
export class ViewOrderModule { }
