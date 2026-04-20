import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from './dashboard/doctor-dashboard.component';

import { DoctorAppointmentsComponent } from './appointments/doctor-appointments.component';
import { DoctorScheduleComponent } from './schedule/doctor-schedule.component';

 
const routes: Routes = [
  { path: '', component: DoctorDashboardComponent },
  { path: 'schedule', component: DoctorScheduleComponent },
  { path: 'appointments', component: DoctorAppointmentsComponent }
];
 
@NgModule({
  declarations: [DoctorDashboardComponent, DoctorScheduleComponent, DoctorAppointmentsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class DoctorModule {}

