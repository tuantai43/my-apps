import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'locations');
  }
}
