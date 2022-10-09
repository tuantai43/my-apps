import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

export enum Currency {
  Vnd = 'VND',
  Usd = 'USD',
}

@Directive({
  selector: '[appCurrency]',
})
export class CurrencyDirective {
  @Input()
  get appCurrency() {
    return this._appCurrency;
  }

  set appCurrency(value: string | number) {
    this._appCurrency = value;
    this.format(value);
  }

  private _appCurrency: string | number = '';
  private value = '';

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  ngOnInit() {
    this.format(this.el.nativeElement.value); // format any initial values
  }

  @HostListener('ngModelChange', ['$event']) onInput(e: string) {
    this.format(e);
  }

  @HostListener('blur', ['$event']) onBlur() {
    this.renderer.setProperty(this.el.nativeElement, 'value', this.handleBlur(this.value, ','));
  }

  format(val: string | number) {
    // 1. test for non-number characters and replace/remove them
    let numberFormat = '';
    if (typeof val === 'number') {
      numberFormat = (val + '').replace('.', ',');
    } else {
      numberFormat = val ? val.replace(/(?![\d\,])./gm, '') : '';
    }
    // 2. format the number (add commas)
    this.value = numberFormat ? this.addSeparatorsNF(numberFormat, ',', ',', '.') : '';
    // 3. replace the input value with formatted numbers
    this.renderer.setProperty(this.el.nativeElement, 'value', this.value);
  }

  /**
   * Thêm ký tự phân tách tiền tệ
   * @param nStr Chuỗi cần được định dạng
   * @param inD Ký tự phân tách phần nguyên với phần thập phân
   * @param outD Ký tự thay thế phân tách phần nguyên với phần thập phân
   * @param sep Ký tự phân tách phần nguyên
   * @returns Chuỗi đã được định dạng
   */
  addSeparatorsNF(nStr: string, inD: string, outD: string, sep: string) {
    const dpos = nStr.indexOf(inD);
    let nStrEnd = '';
    if (dpos !== -1) {
      nStrEnd = outD + nStr.substring(dpos + 1, nStr.length).replace(/(?!\d)./gm, '');
      nStr = nStr.substring(0, dpos);
    }
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(nStr)) {
      nStr = nStr.replace(rgx, '$1' + sep + '$2');
    }
    return nStr + nStrEnd;
  }

  /**
   * Xoá 0 ở đầu phần nguyên hoặc cuối phần thập phân
   * @param nStr Chuỗi cần được định dạng
   * @param inD Ký tự phân tách phần nguyên với phần thập phân
   */
  handleBlur(nStr: string, inD: string): string {
    const dpos = nStr.indexOf(inD);
    let nStrEnd = '';
    if (dpos !== -1) {
      nStrEnd = nStr.substring(dpos, nStr.length).replace(/0*$/gm, '');
      // in case 0,
      // remove ,
      if (nStrEnd.length === 1) {
        nStrEnd = '';
      }
      nStr = nStr.substring(0, dpos);
    }
    const rgxStr = new RegExp(`^([0\\.]{0,${nStr.length - 1}})`, 'gm');
    return nStr.replace(rgxStr, '') + nStrEnd;
  }
}
