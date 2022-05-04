import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';

@Pipe({
  name: 'big2Num'
})
export class Big2NumPipe implements PipeTransform {

  transform(value: ethers.BigNumber | null | undefined, fixed: number = 3) {

    if (value){
      return Number(ethers.utils.formatEther(value)).toFixed(fixed);
    }
    return '0'
  }

}
