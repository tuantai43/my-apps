import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { classFeatureKey, classReducer } from './+state/class.reducer';
import { ClassEffects } from './+state/class.effects';
import { ClassFacade } from './+state/class.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(classFeatureKey, classReducer),
    EffectsModule.forFeature([ClassEffects]),
  ],
  providers: [ClassFacade],
})
export class StoreClassModule {}
