import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TrainerService<T = any> extends BaseService<T> {
  constructor(http: HttpClient) {
    super(http, 'trainers');
  }
}
