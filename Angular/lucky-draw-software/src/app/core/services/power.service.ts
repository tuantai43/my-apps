import { Power } from '@app/models';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PowerService extends BaseService<Power> {
  constructor(http: HttpClient) {
    super(http, 'powers', Power);
  }
}
