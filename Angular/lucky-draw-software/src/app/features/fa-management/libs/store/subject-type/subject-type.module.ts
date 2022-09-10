import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './+state/subject-type.reducer';
import { Effects } from './+state/subject-type.effects';
import { SubjectTypeFacade } from './+state/subject-type.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer), EffectsModule.forFeature([Effects])],
  providers: [SubjectTypeFacade],
})
export class StoreSubjectTypeModule {}
