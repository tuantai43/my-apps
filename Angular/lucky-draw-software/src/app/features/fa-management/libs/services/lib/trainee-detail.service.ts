import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { TraineeDetail, TraineeResult } from '../../utils/models';

@Injectable({
  providedIn: 'root',
})
export class TraineeDetailsService {
  readonly api = `${environment.baseUrlApi}/${environment.prefixUrlApi}`;

  constructor(private http: HttpClient) {}

  getDetailTrainee(emplId: number): Observable<TraineeDetail> {
    return this.http.get<TraineeDetail>(`${this.api}/trainee/${emplId}`);
  }

  updateDetailTrainee(emplId: string, data: TraineeDetail): Observable<TraineeDetail> {
    return this.http.put<TraineeDetail>(`${this.api}/trainee/${emplId}`, { data });
  }

  // deleteTrainee(emplId: string): Observable<any> {
  //   return this.http.delete<any>(`${this.api}/trainee/${emplId}`);
  // }

  getTraineeResult(emplId: string): Observable<TraineeResult[]> {
    return this.http.get<TraineeResult[]>(`${this.api}/trainee/result/${emplId}`);
  }
}
