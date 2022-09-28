import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { FormsModule } from '@angular/forms';

import { PipeModule } from '@fa-management/pipes';

import { TranslateModule } from '@ngx-translate/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ClassStatusesComponent } from './class-statuses/class-statuses.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

const COMPONENTS = [LocationsComponent, ClassStatusesComponent, ConfirmationPopupComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PipeModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [...COMPONENTS],
})
export class ComponentModule {}
