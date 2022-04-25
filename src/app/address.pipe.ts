import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: string | null | undefined, trim: boolean = true): string {
    if (
      value &&
      value != ethers.constants.AddressZero &&
      value != ethers.constants.HashZero
    ) {
      let val = trim ? ethers.utils.hexStripZeros(value) : value
      return val.slice(0, 5) + '...' + val.slice(val.length - 4)
    }
    else if (value == ''){
      return 'Blockchain'
    }
    return 'NullAddress';
  }
}
