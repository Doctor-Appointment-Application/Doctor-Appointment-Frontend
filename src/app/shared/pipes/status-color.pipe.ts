import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({ name: 'statusColor' })
export class StatusColorPipe implements PipeTransform {
  transform(status: string): string {
    const map: Record<string, string> = {
      'Confirmed': '#2E75B6',
      'Completed': '#27ae60',
      'Cancelled': '#dc3545',
      'NoShow': '#e67e22'
    };
    return map[status] || '#666';
  }
}
