import { Pipe, PipeTransform } from '@angular/core';
import { Dict } from './services/load.service';

@Pipe({
  name: 'sales'
})
export class SalesPipe implements PipeTransform {

  transform(value?: Dict<any>[]) {
    return value?.filter(v => v.type == 'SALE') ?? []
  }

}
