import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './+state/admin.reducer';
import { effects } from './+state/admin.effects';
import { ClassAdminFacade } from './+state/admin.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([effects])],
  providers: [ClassAdminFacade],
})
export class StoreClassAdminModule {}
