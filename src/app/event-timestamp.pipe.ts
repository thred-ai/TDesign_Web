import { Pipe, PipeTransform } from '@angular/core';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';
import { NftLog } from './models/nft-log.model';

@Pipe({
  name: 'eventTimestamp'
})
export class EventTimestampPipe implements PipeTransform {
  
  

  transform(value: NftLog) {
    var rpcEndpoint = ''
    if (environment.rpc) {
      rpcEndpoint = environment.rpc;
    } else {
      console.log(process.env);
    }

    if (rpcEndpoint == ''){
      return null
    }

    let provider: ethers.providers.Provider = new ethers.providers.JsonRpcProvider(
      rpcEndpoint
    )


    return provider.getBlock(value.block);
  }

}
