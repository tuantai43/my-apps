import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API = `${environment.baseUrlApi}/auth`;
  constructor(private http: HttpClient) {}

  /**
   * Registry a new user
   * @param email The email
   * @param password The password
   * @param firstName The first name
   * @param lastName The last name
   */
  register(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post(`${this.API}/register`, {
      email,
      password,
      firstName,
      lastName,
    });
  }

  login(email: string, password: string) {
    return this.http.post(`${this.API}/login`, {
      email,
      password,
    });
  }
}
