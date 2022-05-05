import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';

@Pipe({
  name: 'bigNum'
})
export class BigNumPipe implements PipeTransform {

  transform(value: ethers.BigNumber | null | undefined, fixed: number = 3) {

    if (value){
      return value.toNumber().toFixed(fixed);
    }
    return '0'
  }

}
