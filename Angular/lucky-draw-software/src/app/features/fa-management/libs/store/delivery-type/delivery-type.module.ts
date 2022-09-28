import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './+state/reducer';
import { Effects } from './+state/effects';
import { DeliveryTypeFacade } from './+state/facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([Effects])],
  providers: [DeliveryTypeFacade],
})
export class StoreDeliveryTypeModule {}
