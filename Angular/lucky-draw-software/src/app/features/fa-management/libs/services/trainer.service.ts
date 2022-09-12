import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TrainerService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'trainers');
  }
}
