import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './+state/format-type.reducer';
import { Effects } from './+state/format-type.effects';
import { FormatTypeFacade } from './+state/format-type.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([Effects])],
  providers: [FormatTypeFacade],
})
export class StoreFormatTypeModule {}
