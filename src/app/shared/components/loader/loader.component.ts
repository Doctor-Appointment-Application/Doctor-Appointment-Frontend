import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'app-loader',
  template: `<div class="loader-wrap" *ngIf="visible"><div class="spinner"></div><p>{{ message }}</p></div>`,
  styles: [`
    .loader-wrap { display:flex; flex-direction:column; align-items:center; padding:40px; gap:14px; }
    .spinner {
      width:40px; height:40px; border:4px solid #e0e0e0;
      border-top-color:#2E75B6; border-radius:50%; animation:spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform:rotate(360deg) } }
    p { color:#888; font-size:14px; }
  `]
})
export class LoaderComponent {
  @Input() visible = false;
  @Input() message = 'Loading...';
}
