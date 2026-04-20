import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ManageDoctorsComponent } from './manage-doctors/manage-doctors.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    ManageDoctorsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
