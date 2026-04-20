import { Component } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';
 
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  from = '';
  to = '';
  analytics: any = null;
  loading = false;
 
  constructor(private adminSvc: AdminService) {}
 
  loadAnalytics() {
    if (!this.from || !this.to) return;
    this.loading = true;
    this.adminSvc.getAnalytics(this.from, this.to).subscribe({
      next: (d: any) => { this.analytics = d; this.loading = false; },
      error: () => this.loading = false
    });
  }
}
