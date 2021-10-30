import { Product } from './product.model'

export class ProductInCart {

    product?: Product
    size?: string
    quantity?: number
    isDeleted?: boolean
    timestamp?: Date
    timestampDiff?: string
    saleID?: string
    profit?: number


    constructor(
      product?: Product, 
      size?: string,
      quantity?: number,
      isDeleted?: boolean,
      timestamp?: Date,
      timestampDiff?: string,
      saleID?: string,
      profit?: number
      ) {

      this.product = product
      this.size = size ?? "M"
      this.quantity = quantity ?? 1
      this.isDeleted = isDeleted ?? false
      this.timestamp = timestamp ?? new Date()
      this.timestampDiff = timestampDiff ?? ""
      this.saleID = saleID ?? ""
      this.profit = profit ?? 0
    }
}