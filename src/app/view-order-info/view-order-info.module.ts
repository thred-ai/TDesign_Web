import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from "@angular/common";
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { ViewOrderInfoComponent } from './view-order-info.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewOrderInfoComponent,
  },
];


@NgModule({
  declarations: [
    ViewOrderInfoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    
    NgxSpinnerModule,
    RouterModule.forChild(routes)

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [ViewOrderInfoComponent]
})
export class ViewOrderInfoModule { }
