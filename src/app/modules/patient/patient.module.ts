import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowseDoctorsComponent } from './browse/browse-doctors.component';
import { BookAppointmentComponent } from './book/book-appointment.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';

 
const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseDoctorsComponent },
  { path: 'book', component: BookAppointmentComponent },
  { path: 'appointments', component: MyAppointmentsComponent }
];
 
@NgModule({
  declarations: [BrowseDoctorsComponent, BookAppointmentComponent, MyAppointmentsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class PatientModule {}
