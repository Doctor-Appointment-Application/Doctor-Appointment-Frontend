import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { BrowseComponent } from './browse/browse.component';
import { BookComponent } from './book/book.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';


@NgModule({
  declarations: [
    BrowseComponent,
    BookComponent,
    MyAppointmentsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
