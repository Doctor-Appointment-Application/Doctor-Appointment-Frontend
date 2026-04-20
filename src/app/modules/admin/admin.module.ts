import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ManageDoctorsComponent } from './manage-doctors/manage-doctors.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AdminDashboardComponent } from './dashboard/admindashboard.component';
 
const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'manage-doctors', component: ManageDoctorsComponent },
  { path: 'analytics', component: AnalyticsComponent }
];
 
@NgModule({
  declarations: [AdminDashboardComponent, ManageDoctorsComponent, AnalyticsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class AdminModule {}
