import { BigNumber } from 'ethers'

export class NftLog {
  event: string
  timestamp: Date
  from: string
  to: string
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

  constructor(
    event: string,
    timestamp: Date,
    from: string,
    to: string,
    price: string | BigNumber
    ) {

    this.event = event ?? ""
    this.timestamp = timestamp ?? new Date()
    this.from = from ?? ""
    this.to = to ?? ""
    this.price = price ?? ''
  }
}