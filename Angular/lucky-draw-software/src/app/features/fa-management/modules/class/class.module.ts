import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { routes } from './class.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchComponent } from './components/search/search.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreClassModule } from '@fa-management/store/class';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ListComponent, SearchComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreClassModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatTableModule,
    MatDatepickerModule,
    MatPaginatorModule,
    CdkTableModule,
  ],
})
export class ClassModule {}
