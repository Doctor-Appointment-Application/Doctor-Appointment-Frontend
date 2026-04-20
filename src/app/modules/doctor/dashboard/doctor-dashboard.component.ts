import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../core/services/appointment.service';
import { AuthService } from '../../../core/services/auth.service';
 
@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  summary: any = null;
  today = new Date().toISOString().split('T')[0];
 
  constructor(private apptSvc: AppointmentService, public auth: AuthService) {}
 
  ngOnInit() {
    this.apptSvc.getDailySummary(this.today).subscribe({
      next: (data: any) => this.summary = data,
      error: () => {}
    });
  }
}
