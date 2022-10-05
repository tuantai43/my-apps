import { Currency } from '@fa-management/directives';

const format = {
  [Currency.Vnd]: (value: string, isNumber: boolean = false): number | null => {
    const number = value.replace(/[^0-9]/gm, '');
    if (number && number.length) {
      return Number(number);
    }
    return isNumber ? 0 : null;
  },
  [Currency.Usd]: (value: string): number => {
    return 0;
  },
};

export const ConvertNumber = {
  fromPrice: (value: string, isNumber: boolean = false, currency: Currency = Currency.Vnd): number | null => {
    if (!value) {
      return isNumber ? 0 : null;
    }

    return format[currency](value, isNumber);
  },
  /**
   * Returns a number representing a number in fixed-point notation.
   * @param value Number need to converted
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   * @returns Returns a number representing a number in fixed-point notation.
   */
  toFixed: (value: number, fractionDigits: number = 2): number => {
    return Number(value.toFixed(fractionDigits));
  },
};
