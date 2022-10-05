import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'user');
  }

  getInfo<T>() {
    return this.http.get<T>(`${this.api}/info`);
  }
}
