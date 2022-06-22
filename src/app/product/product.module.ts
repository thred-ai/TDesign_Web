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
import { NftBuyComponent } from '../nft-buy/nft-buy.component';
import { NftUpdateComponent } from '../nft-update/nft-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatRadioModule } from '@angular/material/radio';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { NftInfoComponent } from './nft-info/nft-info.component'; // <-- import it

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];


@NgModule({
  declarations: [
    ProductComponent,
    NftBuyComponent,
    NftUpdateComponent,
    NftInfoComponent,
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
    ApplicationPipesModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    MatRadioModule,
    RouterModule.forChild(routes),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [ProductComponent]
})
export class ProductModule { }
