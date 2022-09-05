import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonDirective } from './action-button.directive';
import { CurrencyDirective } from './currency.directive';

const DIRECTIVES = [ActionButtonDirective];

@NgModule({
  declarations: [...DIRECTIVES, CurrencyDirective],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
})
export class DirectiveModule {}
