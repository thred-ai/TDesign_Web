import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'str'
})
export class StrPipe implements PipeTransform {

  transform(value: any): string {
    return String(value);
  }

}
