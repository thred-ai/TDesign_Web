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
    SafeUrlPipe
  ]
})
export class ApplicationPipesModule {}