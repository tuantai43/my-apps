import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './+state/trainer.reducer';
import { Effects } from './+state/trainer.effects';
import { TrainerFacade } from './+state/trainer.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([Effects])],
  providers: [TrainerFacade],
})
export class StoreTrainerModule {}
