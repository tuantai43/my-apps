import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authFeatureKey, authReducer } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(authFeatureKey, authReducer), EffectsModule.forFeature([AuthEffects])],
  providers: [AuthFacade],
})
export class StoreAuthModule {}
