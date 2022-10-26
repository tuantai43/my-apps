import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ClassDetailsService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'class-details');
  }

  submit(id: string) {
    return this.http.get(`${this.api}/submit/${id}`);
  }
}
