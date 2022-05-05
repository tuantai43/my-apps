import { MaterialModule } from './libs/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplexModule } from './components/complex-component-example/components/complex.module';
import { BaseInputComponent } from './components/base-input/base-input.component';
import { BaseCarouselComponent } from './components/base-carousel/base-carousel.component';
import { TranslateModule } from '@ngx-translate/core';
import { BaseErrorComponent } from './components/base-error/base-error.component';
import { LoadingDirective } from './directives/loading.directive';
import { BaseLoadingComponent } from './components/base-loading/base-loading.component';

const EXPORT_COMPONENTS = [BaseInputComponent, BaseCarouselComponent, BaseErrorComponent];
const MODULES = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, ComplexModule];
const DIRECTIVES = [LoadingDirective];
@NgModule({
  declarations: [...EXPORT_COMPONENTS, ...DIRECTIVES, BaseLoadingComponent],
  imports: [...MODULES, TranslateModule],
  exports: [...EXPORT_COMPONENTS, ...MODULES, ...DIRECTIVES],
})
export class SharedModule {}
