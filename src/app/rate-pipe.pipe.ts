import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';

@Pipe({
  name: 'ratePipe',
})
export class RatePipePipe implements PipeTransform {
  transform(value: string, coin = 'ethereum', rate = 'usd'): string {
    var price = Number(value);

    let matching_coin = Globals.rates.find((r) => r.api_name == coin);

    if (matching_coin) {
      let matching_rate = matching_coin[rate];
      if (matching_rate) {
        return `${rate.toUpperCase().slice(0, 2)} $${this.numberWithCommas(
          (price * matching_rate).toFixed(2)
        )}`;
      }
    }
    return value;
  }

  numberWithCommas(x: string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
