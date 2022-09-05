import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

export enum Currency {
  Vnd = 'VND',
  Usd = 'USD',
}

@Directive({
  selector: '[appCurrency]',
})
export class CurrencyDirective {
  constructor(public el: ElementRef, public renderer: Renderer2) {}

  ngOnInit() {
    this.format(this.el.nativeElement.value); // format any initial values
  }

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    this.format(e);
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    if (event.clipboardData) {
      this.format(event.clipboardData.getData('text/plain'));
    }
  }

  format(val: string) {
    // 1. test for non-number characters and replace/remove them
    const numberFormat = val.replace(/(?!\d)./gm, '');
    // 2. format the number (add commas)
    const formated = numberFormat
      ? new Intl.NumberFormat('vi-VN', { currency: Currency.Vnd, style: 'decimal' }).format(Number(numberFormat))
      : '';
    // 3. replace the input value with formatted numbers
    this.renderer.setProperty(this.el.nativeElement, 'value', formated);
  }
}
