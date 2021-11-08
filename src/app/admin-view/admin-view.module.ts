import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AdminViewComponent } from './admin-view.component';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
import { DesignComponent } from '../design/design.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperComponent } from '../cropper/cropper.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCurrencyModule } from "ngx-currency";
import { SocialFormComponent } from '../social-form/social-form.component';
import { InventoryBuyComponent } from '../inventory-buy/inventory-buy.component';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { StoreSetupComponent } from '../store-setup/store-setup.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ModelViewerComponent } from '../model-viewer/model-viewer.component';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
  },
];


@NgModule({
  declarations: [
    AdminViewComponent,
    DesignComponent,
    CropperComponent,
    SocialFormComponent,
    InventoryBuyComponent,
    InventoryListComponent,
    EditPlanComponent,
    StoreSetupComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    DragScrollModule,
    ImageCropperModule,
    ColorPickerModule,
    NgbModule,
    HttpClientModule,
    NgxChartsModule,
    ClipboardModule,
    NgxCurrencyModule,
    DragDropModule,
    RouterModule.forChild(routes),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [AdminViewComponent]
})
export class AdminViewModule {
  constructor(){

  }
 }
