import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';

@Pipe({
  name: 'networkCheck'
})
export class NetworkCheckPipe implements PipeTransform {

  transform(value: ethers.providers.Web3Provider | undefined): Promise<ethers.providers.Network> | undefined {
    return value?.getNetwork();
  }

}
