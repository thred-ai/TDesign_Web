import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';
import { NftLog } from './models/nft-log.model';
import { WalletLog } from './models/wallet-log.model';

@Pipe({
  name: 'eventTimestamp'
})
export class EventTimestampPipe implements PipeTransform {
  
  

  transform(value: NftLog | WalletLog, provider?: ethers.providers.Provider) {

    let p = provider

    if (!p){
      var rpcEndpoint = ''
    if (environment.rpc) {
      rpcEndpoint = environment.rpc;
    } else {
      console.log(process.env);
    }

    if (rpcEndpoint == ''){
      return null
    }
      p = new ethers.providers.JsonRpcProvider(
        rpcEndpoint
      )
    }


    return p.getBlock(value.block);
  }

}
