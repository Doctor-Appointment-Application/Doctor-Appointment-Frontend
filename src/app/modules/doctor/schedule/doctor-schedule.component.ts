import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../core/services/doctor.service';
import { AuthService } from '../../../core/services/auth.service';
 
@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {
  slots: any[] = [];
  newSlot = { startTime: '', endTime: '' };
  doctorId = 0;
  loading = false;
  message = '';
 
  constructor(private doctorSvc: DoctorService, private auth: AuthService) {}
 
  ngOnInit() {
    // doctorId should come from profile in a real implementation
    this.loadSlots();
  }
 
  loadSlots() {
    if (!this.doctorId) return;
    this.doctorSvc.getAvailableSlots(this.doctorId).subscribe((s: any) => this.slots = s);
  }
 
  addSlot() {
    if (!this.newSlot.startTime || !this.newSlot.endTime) return;
    this.loading = true;
    this.doctorSvc.addSlot(this.doctorId, this.newSlot).subscribe({
      next: () => {
        this.message = 'Slot added successfully!';
        this.loadSlots();
        this.newSlot = { startTime: '', endTime: '' };
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}
