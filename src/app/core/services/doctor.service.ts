import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface SlotDto {
  id?: number;
  startTime: string;
  endTime: string;
  isBooked?: boolean;
}

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSpecialties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/specialties`);
  }

  getDoctors(mode?: string, specialtyId?: number): Observable<any[]> {
    let params = new HttpParams();
    if (mode) params = params.set('mode', mode);
    if (specialtyId) params = params.set('specialtyId', specialtyId.toString());
    return this.http.get<any[]>(`${this.api}/doctors`, { params });
  }

  getDoctorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/doctors/${id}`);
  }

  getAvailableSlots(doctorId: number): Observable<SlotDto[]> {
    return this.http.get<SlotDto[]>(`${this.api}/doctors/${doctorId}/slots`);
  }


    createDoctor(data: any) {
    return this.http.post(`${this.api}/doctors`, data);
  }
 
  deleteDoctor(id: number) {
    return this.http.delete(`${this.api}/doctors/${id}`);
  }
 
  addSlot(doctorId: number, slot: any) {
    return this.http.post(`${this.api}/doctors/${doctorId}/slots`, slot);
  }

}