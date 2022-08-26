import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './class.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTableModule } from '@angular/cdk/table';

import { StoreClassModule } from '@fa-management/store/class';
import { StoreLocationModule } from '@fa-management/store/location';

import { ComponentModule } from '@fa-management/components';
import { DirectiveModule } from '@fa-management/directives';
import { PipeModule } from '@fa-management/pipes';

import { ClassDetailsFacade, classDetailsReducer, classFeatureKey } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ClassDetailsEffects } from './store/+state/class-detail.effects';

import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { CreateComponent } from './components/create/create.component';
import { InformationComponent } from './components/information/information.component';
import { GeneralComponent } from './components/general/general.component';
import { AuditComponent } from './components/audit/audit.component';
import { BudgetComponent } from './components/budget/budget.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    CreateComponent,
    InformationComponent,
    GeneralComponent,
    AuditComponent,
    BudgetComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(classFeatureKey, classDetailsReducer),
    EffectsModule.forFeature([ClassDetailsEffects]),
    StoreClassModule,
    StoreLocationModule,
    DirectiveModule,
    PipeModule,
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
    MatTabsModule,
    MatExpansionModule,
    CdkTableModule,
  ],
  providers: [ClassDetailsFacade],
})
export class ClassModule {}
