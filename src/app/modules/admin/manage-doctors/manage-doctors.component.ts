import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../core/services/doctor.service';
 
@Component({
  selector: 'app-manage-doctors',
  templateUrl: './manage-doctors.component.html',
  styleUrls: ['./manage-doctors.component.css']
})
export class ManageDoctorsComponent implements OnInit {
  doctors: any[] = [];
  specialties: any[] = [];
  showForm = false;
  loading = false;
  newDoctor = {
    fullName: '', mode: 'Online', specialtyId: 0,
    qualification: '', experienceYears: 0, consultationFee: 0
  };
 
  constructor(private doctorSvc: DoctorService) {}
 
  ngOnInit() {
    this.doctorSvc.getDoctors().subscribe((d: any) => this.doctors = d);
    this.doctorSvc.getSpecialties().subscribe((s: any) => this.specialties = s);
  }
 
  createDoctor() {
    this.loading = true;
    this.doctorSvc.createDoctor(this.newDoctor).subscribe({
      next: (d: any) => {
        this.doctors.unshift(d);
        this.showForm = false;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
 
  deleteDoctor(id: number) {
    if (!confirm('Deactivate this doctor?')) return;
    this.doctorSvc.deleteDoctor(id).subscribe(() => {
      this.doctors = this.doctors.filter(d => d.id !== id);
    });
  }
}

