import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  stats: any = {};
  loading = true;

  constructor(private adminSvc: AdminService) {}

  ngOnInit() {
    this.adminSvc.getDashboard().subscribe({
      next: (data: any) => { this.stats = data; this.loading = false; },
      error: () => this.loading = false
    });
  }

  triggerReminders() {
    this.adminSvc.sendReminders().subscribe(() =>
      alert('Reminders sent successfully!'));
  }
}


