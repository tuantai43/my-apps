import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const EXPORT_COMPONENTS = [
  MatButtonModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
];
@NgModule({
  imports: [CommonModule, ...EXPORT_COMPONENTS],
  exports: [...EXPORT_COMPONENTS],
})
export class MaterialModule {}
