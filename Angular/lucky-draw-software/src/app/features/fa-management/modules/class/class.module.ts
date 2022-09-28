import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
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
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTableModule } from '@angular/cdk/table';

import { StoreClassModule } from '@fa-management/store/class';
import { StoreLocationModule } from '@fa-management/store/location';
import { StoreBudgetModule } from '@fa-management/store/budget';
import { StoreClassAdminModule } from '@fa-management/store/admin';
import { StoreSubSubjectTypeModule } from '@fa-management/store/sub-subject-type';
import { StoreSubjectTypeModule } from '@fa-management/store/subject-type';
import { StoreDeliveryTypeModule } from '@fa-management/store/delivery-type';
import { StoreFormatTypeModule } from '@fa-management/store/format-type';
import { StoreScopeModule } from '@fa-management/store/scope';
import { StoreTrainerModule } from '@fa-management/store/trainer';
import { StoreEventCategoryModule } from '@fa-management/store/event-category';

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
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FORMAT_DATE } from '@fa-management/utils/configs';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    StoreBudgetModule,
    StoreClassAdminModule,
    StoreClassModule,
    StoreDeliveryTypeModule,
    StoreLocationModule,
    StoreSubSubjectTypeModule,
    StoreFormatTypeModule,
    StoreScopeModule,
    StoreSubjectTypeModule,
    StoreEventCategoryModule,
    StoreTrainerModule,
    DirectiveModule,
    PipeModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
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
  providers: [
    ClassDetailsFacade,
    CurrencyPipe,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    {
      provide: MAT_DATE_FORMATS,
      useValue: FORMAT_DATE.SELECT_DATE,
    },
  ],
})
export class ClassModule {}
