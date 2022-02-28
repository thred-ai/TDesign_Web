import { Pipe, PipeTransform } from '@angular/core';
import { Globals } from './globals';
import { ethers } from 'ethers';

@Pipe({
  name: 'providerCheck'
})
export class ProviderCheckPipe implements PipeTransform {

  transform(value: ethers.providers.Web3Provider | undefined): Promise<string> | undefined {
    return value?.getSigner().getAddress()
  }

}
