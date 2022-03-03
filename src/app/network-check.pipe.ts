import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

@Pipe({
  name: 'networkCheck'
})
export class NetworkCheckPipe implements PipeTransform {

  transform(value: ethers.providers.Web3Provider | undefined): Promise<ethers.providers.Network> | undefined {
    return this.networkCheck(value);
  }

  async networkCheck(prov: ethers.providers.Web3Provider | undefined){
    
    var network = await (prov?.getNetwork())
    if (network?.chainId == 0 && window.ethereum){
      let provider = await detectEthereumProvider() as any
      network = await provider.request({ method: 'eth_chainId' })
    }
    console.log(network)
    console.log(network?.chainId)
    return network!
  }

}
