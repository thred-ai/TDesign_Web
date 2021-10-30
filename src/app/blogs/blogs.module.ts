import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from "@angular/common";
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BlogsComponent } from './blogs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
  },
];


@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    
    NgxSpinnerModule,
    RouterModule.forChild(routes)

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [BlogsComponent]
})
export class BlogsModule { }
