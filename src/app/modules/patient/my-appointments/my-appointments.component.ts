import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../core/services/appointment.service';
 
@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  loading = true;
 
  constructor(private apptSvc: AppointmentService) {}
 
  ngOnInit() {
    this.apptSvc.getMyAppointments().subscribe({
      next: (data: any) => { this.appointments = data; this.loading = false; },
      error: () => this.loading = false
    });
  }
 
  cancelAppointment(id: number) {
    if (!confirm('Cancel this appointment?')) return;
    this.apptSvc.updateStatus(id, 'Cancelled').subscribe(() => {
      this.appointments = this.appointments.map(a =>
        a.id === id ? { ...a, status: 'Cancelled' } : a
      );
    });
  }
}
