import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';

@Pipe({
  name: 'providerAddress'
})
export class ProviderAddressPipe implements PipeTransform {

  transform(value: ethers.providers.Web3Provider | undefined) {
    if (value){
      return value.getSigner().getAddress()
    }
    return undefined
  }

}
