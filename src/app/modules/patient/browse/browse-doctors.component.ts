import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../core/services/doctor.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-browse-doctors',
  templateUrl: './browse-doctors.component.html',
  styleUrls: ['./browse-doctors.component.css']
})
export class BrowseDoctorsComponent implements OnInit {
  specialties: any[] = [];
  doctors: any[] = [];
  selectedMode = '';
  selectedSpecialty = 0;
  loading = false;
 
  constructor(private doctorSvc: DoctorService, private router: Router) {}
 
  ngOnInit() {
    this.doctorSvc.getSpecialties().subscribe((s: any) => this.specialties = s);
  }
 
  onFilter() {
    this.loading = true;
    this.doctorSvc.getDoctors(
      this.selectedMode || undefined,
      this.selectedSpecialty || undefined
    ).subscribe({
      next: (d: any) => { this.doctors = d; this.loading = false; },
      error: () => this.loading = false
    });
  }
 
  bookDoctor(doctorId: number) {
    this.router.navigate(['/patient/book'], { queryParams: { doctorId } });
  }
}

