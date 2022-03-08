import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaNum'
})
export class CommaNumPipe implements PipeTransform {

  transform(value: number | BigInt | string | undefined): string {
    if (value != undefined){
      return this.numberWithCommas(String(value));
    }
    return ""
  }

  numberWithCommas(x: string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
