import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mode'
})
export class ModePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
