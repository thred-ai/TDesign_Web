import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AboutComponent } from './about.component';
import { Globals } from '../globals';
import { NgxSpinnerModule } from "ngx-spinner";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    
    NgxSpinnerModule,
    RouterModule.forChild(routes)

  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [AboutComponent]
  
})
export class AboutModule { }
