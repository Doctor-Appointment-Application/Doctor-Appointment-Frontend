import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private auth: AuthService) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
         this.auth.logout();
          this.router.navigate(['/auth/login']);
        }
        const msg = err.error?.message || err.message || 'An error occurred';
        return throwError(() => new Error(msg));
      })
    );
  }
}
