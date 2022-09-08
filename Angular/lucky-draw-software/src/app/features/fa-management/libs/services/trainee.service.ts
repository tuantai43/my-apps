import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TraineeService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'trainees');
  }

  testGetList<T>(){
    return this.http.get<T[]>('http://localhost:3000/trainees');
  }
}
