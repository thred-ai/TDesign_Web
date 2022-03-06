import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from './models/collection.model';
import { Globals } from './globals';

@Pipe({
  name: 'ownedCollections'
})
export class OwnedCollectionsPipe implements PipeTransform {

  transform(value: Array<Collection> | undefined, address: string | null | undefined): Array<Collection> {
    console.log(value)

    if (value && address){
      let same = value?.filter(c => c.NFTs.find(n => n.seller.toLowerCase() == address?.toLowerCase())) ?? []
      console.log(same)
      return same
    }
    return []
  }

}
