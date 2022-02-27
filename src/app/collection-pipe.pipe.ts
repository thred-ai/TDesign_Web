import { Pipe, PipeTransform } from '@angular/core';
import { Store } from './models/store.model';

@Pipe({
  name: 'collectionPipe'
})
export class CollectionPipePipe implements PipeTransform {

  transform(value: Store, contract?: string) {
    if (contract){
      return value.collections.find(c => c.contract == contract)
    }
    return undefined
  }

}
