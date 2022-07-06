import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';

@Pipe({
  name: 'big2Num'
})
export class Big2NumPipe implements PipeTransform {

  transform(value: string) {

    return atob(value)
  }

}
