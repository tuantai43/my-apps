import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { FormsModule } from '@angular/forms';

import { PipeModule } from '@fa-management/pipes';

import { TranslateModule } from '@ngx-translate/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ClassStatusesComponent } from './class-statuses/class-statuses.component';

const COMPONENTS = [LocationsComponent, ClassStatusesComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, TranslateModule, PipeModule, MatSelectModule, MatInputModule],
  exports: [...COMPONENTS],
})
export class ComponentModule {}
