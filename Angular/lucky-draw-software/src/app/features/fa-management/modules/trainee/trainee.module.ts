import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StoreTraineeModule } from '../../libs/store/trainee';
import { RouterModule } from '@angular/router';
import { routes } from './trainee.routing';
import { StoreModule } from '@ngrx/store';
import { TraineeDetailsFacade, traineeDetailsReducer, traineeFeatureKey } from './store';
import { TraineeDetailsEffects } from './store/+state/trainee-detail.effects';
import { EffectsModule } from '@ngrx/effects';
import { ListComponent } from './components/list/list.component';
import { InformationComponent } from './components/information/information.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultComponent } from './components/result/result.component';
import { MatCardModule } from '@angular/material/card';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FORMAT_DATE, FORMAT_DATE_VN } from '../../libs/utils/configs';
import { MatRadioModule } from '@angular/material/radio';
import { MilestoneConfigComponent } from './components/milestone-config/milestone-config.component';
import { AttendanceStatusComponent } from './components/attendance-status/attendance-status.component';
import { TopicMarkComponent } from './components/topic-mark/topic-mark.component';
import { RewardPenaltyComponent } from './components/reward-penalty/reward-penalty.component';
import { GpaComponent } from './components/gpa/gpa.component';
import { CommitmentComponent } from './components/commitment/commitment.component';
import { AllowanceComponent } from './components/allowance/allowance.component';
import { AllocationComponent } from './components/allocation/allocation.component';
import { TopicItemComponent } from './components/milestone-config/components/topic-item/topic-item.component';
import { AttendanceStatusDialogComponent } from './components/attendance-status/components/attendance-status-dialog/attendance-status-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ListComponent,
    InformationComponent,
    SearchComponent,
    ProfileComponent,
    ResultComponent,
    MilestoneConfigComponent,
    AttendanceStatusComponent,
    TopicMarkComponent,
    RewardPenaltyComponent,
    GpaComponent,
    CommitmentComponent,
    AllowanceComponent,
    AllocationComponent,
    TopicItemComponent,
    AttendanceStatusDialogComponent
  ],
  imports: [
    CommonModule,
    StoreTraineeModule,
    TranslateModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(traineeFeatureKey, traineeDetailsReducer),
    EffectsModule.forFeature([TraineeDetailsEffects]),
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
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [
    TraineeDetailsFacade,
    CurrencyPipe,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    {
      provide: MAT_DATE_FORMATS,
      useValue: FORMAT_DATE_VN.SELECT_DATE,
    },
  ],
})
export class TraineeModule { }
