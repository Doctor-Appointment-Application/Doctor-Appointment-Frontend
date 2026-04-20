import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private api = environment.apiUrl + '/appointments';
  constructor(private http: HttpClient) {}

  bookAppointment(data: { doctorId: number; timeSlotId: number; notes?: string }) {
    return this.http.post(this.api, data);
  }

  getMyAppointments() { return this.http.get(`${this.api}/my`); }

  updateStatus(id: number, status: string) {
    return this.http.put(`${this.api}/${id}/status`, JSON.stringify(status),
      { headers: { 'Content-Type': 'application/json' } });
  }

  getDailySummary(date: string, mode?: string, specialty?: string) {
    let params: any = { date };
    if (mode) params.mode = mode;
    if (specialty) params.specialty = specialty;
    return this.http.get(`${this.api}/summary`, { params });
  }
}

