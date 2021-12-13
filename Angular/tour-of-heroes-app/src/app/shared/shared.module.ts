import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleComponent } from './components/simple-component-example/simple.component';
import { ComplexModule } from './components/complex-component-example/components/complex.module';

const EXPORT_COMPONENTS = [SimpleComponent];
const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  ComplexModule,
];
const PIPES = [];

@NgModule({
  declarations: [...EXPORT_COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...EXPORT_COMPONENTS, ...MODULES, ...PIPES],
})
export class SharedModule {}
