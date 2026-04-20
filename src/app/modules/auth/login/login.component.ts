import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  loading = false; error = '';

  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router) {}

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
        const role = res.role;
        if (role === 'Admin') this.router.navigate(['/admin']);
        else if (role === 'Doctor') this.router.navigate(['/doctor']);
        else this.router.navigate(['/patient']);
      },
      error: e => { this.error = e.error?.message; this.loading = false; }
    });
  }
}


