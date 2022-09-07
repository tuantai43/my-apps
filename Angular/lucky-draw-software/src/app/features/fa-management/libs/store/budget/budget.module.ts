import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './+state/budget.reducer';
import { effects } from './+state/budget.effects';
import { BudgetFacade } from './+state/budget.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([effects])],
  providers: [BudgetFacade],
})
export class StoreBudgetModule {}
