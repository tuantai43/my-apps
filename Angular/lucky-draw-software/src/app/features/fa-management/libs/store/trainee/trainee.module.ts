import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeFacade } from './+state/trainee.facade';
import { StoreModule } from '@ngrx/store';
import { featureKey, reducer } from './+state/trainee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './+state/trainee.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([Effects])
  ],
  providers: [TraineeFacade],
})
export class StoreTraineeModule { }
