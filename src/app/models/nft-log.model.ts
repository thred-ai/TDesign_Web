import { BigNumber } from 'ethers'

export class NftLog {
  event: string
  timestamp?: Date
  from: string
  to: string
  block: number
  price: string | BigNumber

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
      return 'NFT was minted'
    }
    else if (this.event == 'sale'){
      return 'NFT was sold'
    }
    else if (this.event == 'list'){
      return 'NFT was listed'
    }
    return 'NFT was transferred'
  }

  constructor(
    event: string,
    from: string,
    to: string,
    block: number,
    price: string | BigNumber,
    timestamp?: Date
    ) {

    this.event = event ?? ""
    this.timestamp = timestamp
    this.from = from ?? ""
    this.to = to ?? ""
    this.block = block ?? 0
    this.price = price ?? ''
  }
}