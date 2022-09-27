import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonDirective } from './action-button.directive';
import { CurrencyDirective } from './currency.directive';
import { NumberDirective } from './number.directive';

const DIRECTIVES = [ActionButtonDirective, CurrencyDirective, NumberDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
})
export class DirectiveModule {}
