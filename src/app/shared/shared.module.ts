import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { Globals } from '../globals';
import { ModelViewerComponent } from '../model-viewer/model-viewer.component';
import { ApplicationPipesModule } from './applicationPipes.module';
import { ProductViewComponent } from '../product-view/product-view.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ProductSectionComponent } from '../product-section/product-section.component';

@NgModule({
  imports: [CommonModule, ApplicationPipesModule, LazyLoadImageModule],
  exports: [ModelViewerComponent, ProductViewComponent, ProductSectionComponent],
  declarations: [ModelViewerComponent, ProductViewComponent, ProductSectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    Globals,
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' },
  ],
})
export class SharedModule {}
