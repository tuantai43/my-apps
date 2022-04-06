import {MaterialModule} from './libs/material.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SimpleComponent} from './components/simple-component-example/simple.component';
import {ComplexModule} from './components/complex-component-example/components/complex.module';
import {BaseInputComponent} from './components/base-input/base-input.component';
import {BaseCarouselComponent} from './components/base-carousel/base-carousel.component';
import {TranslateModule} from '@ngx-translate/core';

const EXPORT_COMPONENTS = [SimpleComponent, BaseInputComponent, BaseCarouselComponent];
const MODULES = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, ComplexModule];

@NgModule({
  declarations: [...EXPORT_COMPONENTS, BaseCarouselComponent],
  imports: [...MODULES, TranslateModule],
  exports: [...EXPORT_COMPONENTS, ...MODULES],
})
export class SharedModule {
}
