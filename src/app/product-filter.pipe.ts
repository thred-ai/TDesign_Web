import { Pipe, PipeTransform } from '@angular/core';
import { NFT } from './models/nft.model';

@Pipe({
  name: 'sortCol'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Array<NFT>, filter: string): Array<NFT> {

    if (filter == 'tokenId-asc'){
      return value.sort(function (a, b) {
        if ((a.tokenID ?? 0) > (b.tokenID ?? 0)) {
          return 1;
        }
        if ((a.tokenID ?? 0) < (b.tokenID ?? 0)) {
          return -1;
        }
        return 0;
      })
    }
    else if (filter == 'tokenId-desc'){
      return value.sort(function (a, b) {
        if ((a.tokenID ?? 0) < (b.tokenID ?? 0)) {
          return 1;
        }
        if ((a.tokenID ?? 0) > (b.tokenID ?? 0)) {
          return -1;
        }
        return 0;
      })
    }
    return [];
  }

}
