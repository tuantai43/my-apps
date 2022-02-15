import { Power } from './power.model';
import { BaseModel } from './base.model';

export class Hero extends BaseModel {
  id!: number;
  name!: string;
  alterEgo?: string;

  #power!: Power;
  get power(): Power {
    return this.#power || {};
  }
  set power(value: Power | string) {
    if (typeof value === 'string') {
      this.#power = new Power({ name: value });
    } else {
      this.#power = new Power(value as Power);
    }
  }

  constructor(object?: Hero) {
    super();
    if (object) {
      this.id = object.id;
      this.name = object.name;
      this.alterEgo = object.alterEgo;
      this.power = object.power;
    }
  }
}
