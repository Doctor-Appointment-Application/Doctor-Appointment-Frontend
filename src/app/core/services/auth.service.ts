import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = environment.apiUrl + '/auth';
  currentUser$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem('user');
    if (stored) this.currentUser$.next(JSON.parse(stored));
  }

  register(data: any) {
    return this.http.post(`${this.api}/register`, data).pipe(
      tap((res: any) => this.storeUser(res))
    );
  }

  login(data: any) {
    return this.http.post(`${this.api}/login`, data).pipe(
      tap((res: any) => this.storeUser(res))
    );
  }

  getProfile() { return this.http.get(`${this.api}/profile`); }
  updateProfile(data: any) { return this.http.put(`${this.api}/profile`, data); }

  logout() { localStorage.removeItem('user'); this.currentUser$.next(null); }
  getToken() { return JSON.parse(localStorage.getItem('user') || '{}')?.token; }
  isLoggedIn() { return !!this.getToken(); }
  getRole() { return this.currentUser$.value?.role; }

  private storeUser(res: any) {
    localStorage.setItem('user', JSON.stringify(res));
    this.currentUser$.next(res);
  }
}

