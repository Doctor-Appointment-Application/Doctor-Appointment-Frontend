
export interface Doctor {
  id: number;
  fullName: string;
  mode: 'Online' | 'Offline';
  specialtyName: string;
  qualification?: string;
  experienceYears: number;
  consultationFee: number;
  availableSlots: Slot[];
}
 
export interface Slot {
  id: number;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}
 
export interface Specialty {
  id: number;
  name: string;
  description?: string;
}
