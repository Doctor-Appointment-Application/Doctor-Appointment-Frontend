import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getDashboard() { return this.http.get(`${this.api}/admin/dashboard`); }

  getAnalytics(from: string, to: string) {
    return this.http.get(`${this.api}/admin/analytics`, { params: { from, to } });
  }

  sendReminders() {
    return this.http.post(`${this.api}/notifications/send-reminders`, {});
  }
}

