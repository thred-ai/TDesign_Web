import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './models/collection.model';

@Pipe({
  name: 'matIcon'
})
export class MatIconPipe implements PipeTransform {

  transform(value?: Collection): string {
    if (value){
      console.log(value)
      return value!.getCurrencyIcon() ?? '';
    }
    return '';
  }

}
