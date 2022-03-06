import { Pipe, PipeTransform } from '@angular/core';
import { ethers, BigNumber } from 'ethers';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: BigNumber | string | undefined): string {
    if (value){
      if (typeof value == 'object'){
        return ethers.utils.formatEther(value);
      }
      else if (typeof value == 'string'){
        let val = ethers.utils.parseUnits(`${BigInt(value)}`, 'wei')
        return ethers.utils.formatEther(val)
      }
    }
    return ''
  }
}
