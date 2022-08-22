import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragScrollModule } from 'ngx-drag-scroll';
import {MatExpansionModule} from '@angular/material/expansion';
import { ApplicationPipesModule } from '../shared/applicationPipes.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatRadioModule } from '@angular/material/radio';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NftInfoComponent } from './nft-info/nft-info.component'; // <-- import it
import { SharedModule } from '../shared/shared.module'; // <-- import it
import { MatTabsModule } from '@angular/material/tabs';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';
import { BillingAdminModule } from '../billing-admin/billing-admin.module';
import { BillingCheckoutComponent } from '../billing-checkout/billing-checkout.component';
import { NgxStripeModule } from 'ngx-stripe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PaymentCollectionComponent } from '../payment-collection/payment-collection.component';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];


@NgModule({
  declarations: [
    ProductComponent,
    NftInfoComponent,
    PaymentMethodComponent,
    BillingCheckoutComponent,
    PaymentCollectionComponent,
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
    LazyLoadImageModule,
    NgbModule,
    DragScrollModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    ApplicationPipesModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    MatRadioModule,
    RouterModule.forChild(routes),
    SharedModule,
    BillingAdminModule,
    NgxStripeModule,
    MatDatepickerModule,
    MatTooltipModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [ProductComponent]
})
export class ProductModule { }
