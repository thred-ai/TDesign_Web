import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';
import { Collection } from './models/collection.model';

@Pipe({
  name: 'matIcon',
})
export class MatIconPipe implements PipeTransform {
  transform(value?: String): string {
    if (value) {
      let symbol =
        Globals.storeInfo?.tokens
          .find((t) =>
            t.variations.find(
              (s) => s.contract.toLowerCase() == value.toLowerCase()
            )
          )
          ?.variations.find(
            (s) => s.contract.toLowerCase() == value.toLowerCase()
          )?.symbol ?? 'polygon_icon'; //database

      return symbol;
    }
    return '';
  }
}
