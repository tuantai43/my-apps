import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  info: {
    userId: string;
    firstName: string;
    lastName: string;
  };
}

interface UserResponse {
  firstName: string;
  lastName: string;
  email: string;
}

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
    return this.http.post<{ id: string }>(`${this.API}/register`, {
      email,
      password,
      firstName,
      lastName,
    });
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.API}/login`, {
      email,
      password,
    });
  }

  refreshToken(refreshToken: string, token: string) {
    return this.http.post<LoginResponse>(
      `${this.API}/refresh`,
      {
        accessRefreshToken: refreshToken,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  }

  logout(userId: string) {
    return this.http.put(`${this.API}/logout`, { userId });
  }

  user(id: string, token: string) {
    return this.http.get<UserResponse>(`${environment.baseUrlApi}/user/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
}
