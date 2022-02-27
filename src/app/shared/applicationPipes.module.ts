import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SafeTextRowsPipe } from '../safe-text-rows.pipe';
import { ProductsPipePipe } from '../products-pipe.pipe';
import { StoreThemePipe } from '../store-theme.pipe';
import { StoreBannerPipe } from '../store-banner.pipe';
import { StringPipePipe } from '../string-pipe.pipe';
import { safeHtmlPipe } from '../safeHtml.pipe';
import { LiveEarthPipePipe } from '../live-earth-pipe.pipe';
import { LiveEarthViewPipePipe } from '../live-earth-view-pipe.pipe';
import { LiloadedAllProductsPipePipe } from '../liloaded-all-products-pipe.pipe';
import { VideoPipePipe } from '../video-pipe.pipe';
import { SafeUrlPipe } from '../safe-url.pipe';
import { StoreCheckerPipe } from '../store-checker.pipe';
import { HtmlPipe } from '../html.pipe';
import { MatIconPipe } from '../mat-icon.pipe';
import { ClassCheckPipe } from '../class-check.pipe';
import { CollectionPipePipe } from '../collection-pipe.pipe';
import { StorePipe } from '../store.pipe';
import { PricePipe } from '../price.pipe';
import { ProductFilterPipe } from '../product-filter.pipe';
import { CollectionFilterPipe } from '../collection-filter.pipe';
import { AddressPipe } from '../address.pipe';
import { DateAgoPipe } from '../date-ago.pipe';
import { TypeofPipe } from '../typeof.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    SafeTextRowsPipe, 
    ProductsPipePipe, 
    StoreThemePipe, 
    StoreBannerPipe, 
    StringPipePipe,
    safeHtmlPipe,
    LiveEarthPipePipe,
    LiveEarthViewPipePipe,
    LiloadedAllProductsPipePipe,
    VideoPipePipe,
    SafeUrlPipe,
    StoreCheckerPipe,
    HtmlPipe,
    MatIconPipe,
    ClassCheckPipe,
    CollectionPipePipe,
    StorePipe,
    PricePipe,
    ProductFilterPipe,
    CollectionFilterPipe,
    AddressPipe,
    DateAgoPipe,
    TypeofPipe,
  ],
  exports: [
    SafeTextRowsPipe,
    ProductsPipePipe,
    StoreThemePipe, 
    StoreBannerPipe,
    StringPipePipe,
    safeHtmlPipe,
    LiveEarthPipePipe,
    LiveEarthViewPipePipe,
    LiloadedAllProductsPipePipe,
    VideoPipePipe,
    SafeUrlPipe,
    StoreCheckerPipe,
    HtmlPipe,
    MatIconPipe,
    ClassCheckPipe,
    CollectionPipePipe,
    StorePipe,
    PricePipe,
    ProductFilterPipe,
    CollectionFilterPipe,
    AddressPipe,
    DateAgoPipe,
    TypeofPipe
  ]
})
export class ApplicationPipesModule {}