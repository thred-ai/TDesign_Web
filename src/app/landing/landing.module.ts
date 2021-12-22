import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from "@angular/common";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { LandingComponent } from './landing.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    LoginModule,
    NgbModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
