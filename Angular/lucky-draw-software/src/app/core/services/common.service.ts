import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  /**
   * GET list powers
   * @returns list powers
   */
  getPowers(): Observable<string[]> {
    return this.http.get<string[]>('api/powers');
  }
}
