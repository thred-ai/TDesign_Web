import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AdminViewComponent } from './admin-view.component';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { CouponInfoComponent } from '../coupon-info/coupon-info.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditBannerComponent } from '../edit-banner/edit-banner.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragScrollModule } from 'ngx-drag-scroll';
import {MatTabsModule} from '@angular/material/tabs';
import { EditInventoryComponent } from '../edit-inventory/edit-inventory.component';
import {MatTableModule} from '@angular/material/table';

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
    CouponInfoComponent,
    EditBannerComponent,
    EditPopupComponent,
    EditInventoryComponent,
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
    ImageCropperModule,
    ColorPickerModule,
    NgbModule,
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    HttpClientModule,
    DragScrollModule,
    NgxChartsModule,
    ClipboardModule,
    NgxCurrencyModule,
    DragDropModule,
    MatChipsModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
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
