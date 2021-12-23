import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleComponent } from './components/simple-component-example/simple.component';
import { ComplexModule } from './components/complex-component-example/components/complex.module';
import { BaseInputComponent } from './components/base-input/base-input.component';

const EXPORT_COMPONENTS = [SimpleComponent, BaseInputComponent];
const MODULES = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, ComplexModule];

@NgModule({
  declarations: [...EXPORT_COMPONENTS],
  imports: [...MODULES],
  exports: [...EXPORT_COMPONENTS, ...MODULES],
})
export class SharedModule {}
