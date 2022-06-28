import { BigNumber } from 'ethers'

export class NftLog {
  event: string
  timestamp?: Date
  from: string
  to: string
  block: number
  price: string | BigNumber
  txHash: string

  get icon(){
    if (this.event == 'mint'){
      return 'diamond'
    }
    else if (this.event == 'sale'){
      return 'attach_money'
    }
    else if (this.event == 'list'){
      return 'sell'
    }
    return 'sync_alt'
  }

  get logEvent(){
    if (this.event == 'mint'){
      return 'Item was minted'
    }
    else if (this.event == 'sale'){
      return 'Item was sold'
    }
    else if (this.event == 'list'){
      return 'Item was listed'
    }
    return 'Item was transferred'
  }

  constructor(
    event: string,
    from: string,
    to: string,
    block: number,
    price: string | BigNumber,
    timestamp?: Date,
    txHash?: string
    ) {

    this.event = event ?? ""
    this.timestamp = timestamp
    this.from = from ?? ""
    this.to = to ?? ""
    this.block = block ?? 0
    this.price = price ?? ''
    this.txHash = txHash ?? ''
  }
}