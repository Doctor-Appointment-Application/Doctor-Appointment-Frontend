import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  specialties: any[] = [];
  doctors: any[] = [];
  slots: any[] = [];
  selectedMode = '';
  selectedSpecialty = 0;
  selectedDoctor = 0;
  selectedSlot = 0;
  notes = '';
  error = '';
  loading = false;
  success = false;

  constructor(private doctorSvc: DoctorService,
              private apptSvc: AppointmentService,
              private router: Router) {}

  ngOnInit() {
    this.doctorSvc.getSpecialties().subscribe((s: any) => this.specialties = s);
  }

  onModeOrSpecialtyChange() {
    if (this.selectedMode && this.selectedSpecialty) {
      this.doctorSvc.getDoctors(this.selectedMode, this.selectedSpecialty)
        .subscribe((d: any) => this.doctors = d);
    }
  }

  onDoctorSelect(doctorId: number) {
    this.selectedDoctor = doctorId;
    this.doctorSvc.getAvailableSlots(this.selectedDoctor)
      .subscribe((s: any) => this.slots = s);
  }

  confirmBooking() {
    this.loading = true;
    this.error = '';
    this.apptSvc.bookAppointment({
      doctorId: this.selectedDoctor,
      timeSlotId: this.selectedSlot,
      notes: this.notes
    }).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
      },
      error: (err: any) => {
        this.loading = false;
        this.error = err.error?.message || 'Booking failed';
      }
    });
  }
}


