import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNumber]',
})
export class NumberDirective {
  private value: string = '';
  constructor(public el: ElementRef, public renderer: Renderer2) {}

  ngOnInit() {
    this.format(this.el.nativeElement.value); // format any initial values
  }

  @HostListener('ngModelChange', ['$event']) onInput(e: string) {
    this.format(e);
  }

  @HostListener('blur', ['$event']) onBlur() {
    this.renderer.setProperty(
      this.el.nativeElement,
      'value',
      this.value && this.value.length ? Number(this.value) : ''
    );
  }

  format(val: string) {
    // 1. test for non-number characters and replace/remove them
    this.value = val.replace(/(?!\d)./gm, '');
    // 2. replace the input value with formatted numbers
    this.renderer.setProperty(this.el.nativeElement, 'value', this.value ? Number(this.value) : '');
  }
}
