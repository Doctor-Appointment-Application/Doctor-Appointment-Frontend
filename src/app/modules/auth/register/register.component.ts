import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [''],
    role: ['Patient']
  });
  loading = false;
  error = '';
 
  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router) {}
 
  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.auth.register(this.form.value).subscribe({
      next: (res: any) => {
        if (res.role === 'Admin') this.router.navigate(['/admin']);
        else if (res.role === 'Doctor') this.router.navigate(['/doctor']);
        else this.router.navigate(['/patient']);
      },
      error: e => { this.error = e.message; this.loading = false; }
    });
  }
}
