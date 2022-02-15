import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseModel} from '@app/models/base.model';
import {map, Observable} from 'rxjs';

export abstract class BaseService<T extends BaseModel> {
  protected url: string;

  protected httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  protected constructor(protected http: HttpClient, url: string, private type: new (agr: T) => T) {
    this.url = `http://localhost:3000/${url}`;
  }

  /**
   * GET items from the server
   * @returns a single T array
   */
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
      map((val) =>
        val.map((i) => {
          return new this.type(i);
        })
      )
    );
  }

  /**
   * GET item by id
   * @param id id of the item
   * @returns a item
   */
  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  /**
   * PUT update the item on the server
   * @param id {number} the id of item
   * @param item the new data
   */
  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, item, this.httpOptions);
  }

  /**
   * DELETE the item from the server
   * @param id the id of the item
   */
  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`, this.httpOptions);
  }

  /**
   * POST add a new item to the server
   * @param item the item
   */
  insert(item: T): Observable<T> {
    return this.http.post<T>(this.url, item, this.httpOptions);
  }
}
