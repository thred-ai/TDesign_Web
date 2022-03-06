import { Pipe, PipeTransform } from '@angular/core';
import { NFT } from './models/nft.model';

@Pipe({
  name: 'sortCol',
})
export class ProductFilterPipe implements PipeTransform {
  transform(
    value: Array<NFT>,
    filter: string,
    ownedBy?: string | null | undefined
  ): Array<NFT> {
    const collator = new Intl.Collator('en', {
      numeric: true,
      sensitivity: 'base',
    });
    var finalArr = new Array<NFT>();

    if (filter == 'tokenId-asc') {
      finalArr = value.sort((a, b) =>
        collator.compare(String(a.tokenID!), String(b.tokenID!))
      );
    } else if (filter == 'tokenId-desc') {
      finalArr = value.sort((a, b) => {
        return b.tokenID! - a.tokenID!;
      });
    }
    if (ownedBy) {
      finalArr =
        finalArr.filter(
          (f) => f.seller.toLowerCase() == ownedBy.toLowerCase()
        ) ?? [];
    }
    return finalArr;
  }
}
