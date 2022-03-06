import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './models/collection.model';

@Pipe({
  name: 'productCurrency'
})
export class ProductCurrencyPipe implements PipeTransform {

  transform(value?: Collection): string {
    if (value){
      let name = value!.getApiName() ?? 'matic-network';
      return name
    }
    return 'matic-network';
  }

}
