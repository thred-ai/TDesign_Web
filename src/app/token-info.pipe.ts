import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';
import { Dict } from './services/load.service';

@Pipe({
  name: 'tokenInfo'
})
export class TokenInfoPipe implements PipeTransform {

  transform(value?: String): Dict<any> | undefined {
    if (value) {
      let token =
        Globals.storeInfo?.tokens
          .find((t) =>
            t.variations.find(
              (s) => s.contract.toLowerCase() == value.toLowerCase()
            )
          )
          ?.variations.find(
            (s) => s.contract.toLowerCase() == value.toLowerCase()
          );
      return token;
    }
    return undefined;
  }

}
