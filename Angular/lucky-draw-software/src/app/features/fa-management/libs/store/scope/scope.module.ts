import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './+state/scope.reducer';
import { Effects } from './+state/scope.effects';
import { ScopeFacade } from './+state/scope.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([Effects])],
  providers: [ScopeFacade],
})
export class StoreScopeModule {}
