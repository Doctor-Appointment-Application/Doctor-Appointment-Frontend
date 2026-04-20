import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../core/services/appointment.service';
 
@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  loading = true;
 
  constructor(private apptSvc: AppointmentService) {}
 
  ngOnInit() {
    this.apptSvc.getMyAppointments().subscribe({
      next: (d: any) => { this.appointments = d; this.loading = false; },
      error: () => this.loading = false
    });
  }
 
  updateStatus(id: number, status: string) {
    this.apptSvc.updateStatus(id, status).subscribe(() => {
      this.appointments = this.appointments.map(a =>
        a.id === id ? { ...a, status } : a
      );
    });
  }
}

