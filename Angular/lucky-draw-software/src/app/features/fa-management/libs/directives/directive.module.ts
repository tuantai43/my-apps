import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonDirective } from './lib/action-button.directive';
import { CurrencyDirective } from './lib/currency.directive';
import { NumberDirective } from './lib/number.directive';

const DIRECTIVES = [ActionButtonDirective, CurrencyDirective, NumberDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
})
export class DirectiveModule {}
