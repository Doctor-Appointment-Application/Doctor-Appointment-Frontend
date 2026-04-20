export interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  specialtyName: string;
  mode: 'Online' | 'Offline';
  startTime: string;
  endTime: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled' | 'NoShow';
  artifact?: string;
  bookedAt: string;
}
 
export interface BookingRequest {
  doctorId: number;
  timeSlotId: number;
  notes?: string;
}
 
export interface DailySummary {
  date: string;
  totalAppointments: number;
  onlineCount: number;
  offlineCount: number;
  totalRevenue: number;
  bySpecialty: { [key: string]: number };
}

