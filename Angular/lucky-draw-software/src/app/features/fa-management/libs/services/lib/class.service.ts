import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ClassService<T> extends BaseService<T> {
  constructor(http: HttpClient) {
    super(http, 'classes');
  }

  cancel(ids: string[]) {
    return this.http.put(`${this.api}/cancel`, { ids });
  }
}
