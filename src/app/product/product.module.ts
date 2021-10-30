import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProductComponent } from './product.component';
import { ModelViewerComponent } from '../model-viewer/model-viewer.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];


@NgModule({
  declarations: [
    ProductComponent,
    ModelViewerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    RouterModule.forChild(routes),


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [ProductComponent]
})
export class ProductModule { }
