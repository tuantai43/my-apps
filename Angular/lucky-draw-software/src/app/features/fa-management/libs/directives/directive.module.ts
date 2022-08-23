import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonDirective } from './action-button.directive';

const DIRECTIVES = [ActionButtonDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
})
export class DirectiveModule {}
