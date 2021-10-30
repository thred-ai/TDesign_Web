import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [LoginComponent]
})

export class LoginModule { }
