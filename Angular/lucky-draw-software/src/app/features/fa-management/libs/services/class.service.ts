import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ClassService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'classes');
  }
}
