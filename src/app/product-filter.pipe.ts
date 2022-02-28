import { Pipe, PipeTransform } from '@angular/core';
import { NFT } from './models/nft.model';

@Pipe({
  name: 'sortCol',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Array<NFT>, filter: string): Array<NFT> {
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })

    if (filter == 'tokenId-asc') {
      return value.sort((a, b) => collator.compare(String(a.tokenID!), String(b.tokenID!)))
    } else if (filter == 'tokenId-desc') {
      return value.sort((a, b) => {
        return b.tokenID! - a.tokenID!;
      });
    }
    return [];
  }
}
