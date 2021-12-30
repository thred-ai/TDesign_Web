import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SafeTextRowsPipe } from '../safe-text-rows.pipe';
import { ProductsPipePipe } from '../products-pipe.pipe';
import { StoreThemePipe } from '../store-theme.pipe';
import { StoreBannerPipe } from '../store-banner.pipe';
import { StringPipePipe } from '../string-pipe.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    SafeTextRowsPipe, 
    ProductsPipePipe, 
    StoreThemePipe, 
    StoreBannerPipe, 
    StringPipePipe
  ],
  exports: [
    SafeTextRowsPipe,
    ProductsPipePipe,
    StoreThemePipe, 
    StoreBannerPipe,
    StringPipePipe
  ]
})
export class ApplicationPipesModule {}