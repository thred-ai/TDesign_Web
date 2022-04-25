import { BigNumber, ethers } from 'ethers';

export class WalletLog {
  event: string;
  timestamp?: Date;
  from: string;
  to: string;
  block: number;
  txHash: string;
  contract?: string;
  gasUsed?: ethers.BigNumber | String;
  gasPrice?: ethers.BigNumber | String;
  value?: ethers.BigNumber | String;
  timestampNum?: number
  
  get icon() {
    if (this.event == 'deploy') {
      return 'publish';
    } else if (this.event == 'transfer') {
      return 'sync_alt';
    }
    // else if (this.event == 'sale'){
    //   return 'attach_money'
    // }
    // else if (this.event == 'list'){
    //   return 'sell'
    // }
    return 'developer_board';
  }

  get logEvent(){
    if (this.event == 'deploy'){
      return 'Contract Deploy'
    }
    else if (this.event == 'transfer'){
      return 'Token Transfer'
    }
    return 'Contract Interaction'
  }

  constructor(
    event: string,
    from: string,
    to: string,
    block: number,
    timestamp?: Date,
    txHash?: string,
    contract?: string,
    gasUsed?: ethers.BigNumber | String,
    gasPrice?: ethers.BigNumber | String,
    value?: ethers.BigNumber | String,
    timestampNum?: number,
  ) {
    this.event = event ?? '';
    this.timestamp = timestamp;
    this.from = from ?? '';
    this.to = to ?? '';
    this.block = block ?? 0;
    this.txHash = txHash ?? '';
    this.contract = contract ?? '';
    this.gasUsed = gasUsed ?? ""
    this.gasPrice = gasPrice ?? ""
    this.value = value ?? ""
    this.timestampNum = timestampNum ?? 0
  }
}
