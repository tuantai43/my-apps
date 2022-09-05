import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonDirective } from './action-button.directive';
import { CurrencyDirective } from './currency.directive';

const DIRECTIVES = [ActionButtonDirective, CurrencyDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
})
export class DirectiveModule {}
