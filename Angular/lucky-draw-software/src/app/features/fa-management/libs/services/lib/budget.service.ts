import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'budgets');
  }
}
