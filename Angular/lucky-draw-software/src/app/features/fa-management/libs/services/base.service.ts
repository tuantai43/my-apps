import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

export abstract class BaseService {
  protected readonly api = `${environment.baseUrlApi}/${environment.prefixUrlApi}/${this.entity}`;

  constructor(protected http: HttpClient, protected entity: string) {}

  getList<T>() {
    return this.http.get<T[]>(`${this.api}`);
  }
}
