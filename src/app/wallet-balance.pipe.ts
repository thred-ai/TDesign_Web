import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';
var abi = require('human-standard-token-abi');

@Pipe({
  name: 'walletBalance'
})
export class WalletBalancePipe implements PipeTransform {

  transform(value: string | null | undefined, provider: ethers.providers.Provider | undefined, customToken: string = 'default') {

    if (value && provider){
      
      if (customToken == 'default'){
        return provider.getBalance(value);
      }
      return this.balanceOf(customToken, value, provider)
    }

    return undefined;
  }

  balanceOf(
    contract: string,
    wallet: string,
    provider: ethers.providers.Provider
  ) {
    let c = new ethers.Contract(contract, abi, provider);
    let owner = c.balanceOf(wallet);
    return owner;
  }
}
