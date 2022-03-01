import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConstruct'
})
export class DateConstructPipe implements PipeTransform {

  transform(value?: number): Date {
    if (value == null) { return new Date()}
    return new Date(value * 1000);
  }

}
