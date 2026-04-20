import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

 
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'patient',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Patient'] },
    loadChildren: () => import('./modules/patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: 'doctor',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Doctor'] },
    loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Admin'] },
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', redirectTo: 'auth/login' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
