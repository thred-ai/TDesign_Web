import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';
import { Store } from './models/store.model';

@Pipe({
  name: 'currencyIcon',
})
export class CurrencyIconPipe implements PipeTransform {
  transform(value: string, store: Store = Globals.storeInfo): string {
    return (
      store.tokens
        .find((t) => t.variations.find((x) => x.contract == value))
        ?.variations.find((x) => x.contract == value)?.symbol ?? 'polygon_icon'
    );
  }
}
