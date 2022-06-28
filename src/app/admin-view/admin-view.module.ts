import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view.component';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';
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
import { NgxCurrencyModule } from 'ngx-currency';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { LayoutBuilderComponent } from '../layout-builder/layout-builder.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { ApplicationPipesModule } from '../shared/applicationPipes.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatRadioModule } from '@angular/material/radio';
import { MapPopupComponent } from '../map-popup/map-popup.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CreateCryptoComponent } from '../create-crypto/create-crypto.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CreateCollectionComponent } from '../create-collection/create-collection.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NftAdminUpdateComponent } from '../nft-admin-update/nft-admin-update.component'; // <-- import it
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BillingAdminModule } from '../billing-admin/billing-admin.module';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { ViewCoordComponent } from '../view-coord/view-coord.component';
import { StatusComponent } from '../status/status.component';
import { CollectionTableComponent } from '../collection-table/collection-table.component';
import { LOCALE_ID } from '@angular/core';
import { SharedModule } from '../shared/shared.module'; // <-- import it

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
    LayoutBuilderComponent,
    MapPopupComponent,
    CreateCryptoComponent,
    CreateCollectionComponent,
    NftAdminUpdateComponent,
    EditPlanComponent,
    ViewCoordComponent,
    StatusComponent,
    CollectionTableComponent,

  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgxSpinnerModule,
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
    ReactiveFormsModule,
    NgxCurrencyModule,
    DragDropModule,
    MatChipsModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    NgxSummernoteModule,
    RouterModule.forChild(routes),
    ApplicationPipesModule,
    NgApexchartsModule,
    MatRadioModule,
    NgxFileDropModule,
    LazyLoadImageModule,
    NgxDropzoneModule,
    BillingAdminModule,
    MonacoEditorModule.forRoot(),
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    Globals,
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' },
  ],
  bootstrap: [AdminViewComponent],
})
export class AdminViewModule {
  constructor() {}
}
