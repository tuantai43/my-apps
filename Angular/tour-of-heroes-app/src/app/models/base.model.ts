export abstract class BaseModel {
  constructor(object?: object) {
    if (object) {
      this.parse(object);
    }
  }

  private parse(object: object): void {
    if (object) {
      Object.assign(this, object);
    }
  }
}
