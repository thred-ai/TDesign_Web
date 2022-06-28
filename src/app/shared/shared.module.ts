import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";
import { ANIMATION_MODULE_TYPE } from "@angular/platform-browser/animations";
import { Globals } from "../globals";
import { ModelViewerComponent } from "../model-viewer/model-viewer.component";
import { ApplicationPipesModule } from "./applicationPipes.module";


@NgModule({
  imports: [
    CommonModule,
    ApplicationPipesModule
  ],
  exports: [
    ModelViewerComponent
  ],
  declarations: [ 
    ModelViewerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    Globals,
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' },
  ],
})
export class SharedModule {}