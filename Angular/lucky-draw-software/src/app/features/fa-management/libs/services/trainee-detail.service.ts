import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { TraineeDetails } from '../../modules/trainee/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeDetailsService {

  readonly api = `${environment.baseUrlApi}/${environment.prefixUrlApi}`;

  constructor( private http: HttpClient) {}

  getDetailTrainee(emplId: number): Observable<TraineeDetails> {
    return this.http.get<TraineeDetails>(`${this.api}/trainee/${emplId}`)
  }

  updateDetailTrainee(emplId: number, data: TraineeDetails): Observable<TraineeDetails> {
    return this.http.put<TraineeDetails>(`${this.api}/trainee/${emplId}`, { data })
  }

  deleteTrainee(emplId: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/trainee/${emplId}`);
  }

  getTraineeResult(emplId: number): Observable<any> {
    return this.http.get<any>(`${this.api}/trainee/result/${emplId}`);
  }

}

