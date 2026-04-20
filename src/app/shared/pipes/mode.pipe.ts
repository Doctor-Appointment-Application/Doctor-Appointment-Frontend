import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({ name: 'modePipe' })
export class ModePipe implements PipeTransform {
  transform(mode: string): string {
    return mode === 'Online' ? '🖥️ Online (Teleconsultation)' : '🏥 Offline (In-Clinic)';
  }
}

