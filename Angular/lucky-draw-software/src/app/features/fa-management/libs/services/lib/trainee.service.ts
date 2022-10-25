import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TraineeService<T> extends BaseService<T> {
  constructor(http: HttpClient) {
    super(http, 'trainees');
  }
  
  delete(arrEmplId: string[]) {
    return this.http.post(`${this.api}/delete`, arrEmplId);
  }
}
