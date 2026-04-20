export interface User {
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  role: 'Patient' | 'Doctor' | 'Admin';
  createdAt: string;
}
