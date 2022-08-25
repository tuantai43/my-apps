import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { locationFeatureKey, locationReducer } from './+state/location.reducer';
import { LocationEffects } from './+state/location.effects';
import { LocationFacade } from './+state/location.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(locationFeatureKey, locationReducer),
    EffectsModule.forFeature([LocationEffects]),
  ],
  providers: [LocationFacade],
})
export class StoreLocationModule {}
