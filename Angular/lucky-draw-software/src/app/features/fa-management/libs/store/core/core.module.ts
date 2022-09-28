import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { coreFeatureKey, coreReducer } from './+state/reducer';
import { CoreEffects } from './+state/effects';
import { CoreFacade } from './+state/facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(coreFeatureKey, coreReducer), EffectsModule.forFeature([CoreEffects])],
  providers: [CoreFacade],
})
export class StoreCoreModule {}
