import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService<B = any> {
  protected readonly api = `${environment.baseUrlApi}/${environment.prefixUrlApi}/${this.entity}`;

  constructor(protected http: HttpClient, protected entity: string) {}

  getList<T = B>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.api}`);
  }

  create<T = B, U = any>(payload: T): Observable<U> {
    return this.http.post<U>(`${this.api}`, payload);
  }

  get<T = B>(id: string): Observable<T> {
    return this.http.get<T>(`${this.api}/${id}`);
  }

  update<T = B, U = any>(id: string, payload: T): Observable<U> {
    return this.http.put<U>(`${this.api}/${id}`, payload);
  }

  delete<T = B>(id: string): Observable<T> {
    return this.http.delete<T>(`${this.api}/${id}`);
  }
}
