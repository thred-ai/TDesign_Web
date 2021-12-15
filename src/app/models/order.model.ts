import { Product } from './product.model'
import { ProductInCart } from './product-in-cart.model'
import { Dict } from '../services/load.service'
import { Address } from './address.model'
import { ShippingInfo } from './shipping-address.model'

export class Order {


    orderID: string
    timestamp: Date
    products: Array<ProductInCart>
    status: string
    intents: Array<Dict<string>>
    shippingIntent?: string
    shippingCost?: number
    totalCost: number
    tax: number
    subtotal: number
    address?: ShippingInfo
    trackingNumber?: string
    currency: string
    currencySymbol: string
    uid: string
    merchantUID?: string
    trackingLink?: string

    constructor(
      orderID?: string,
      timestamp?: Date,
      products?: Array<ProductInCart>,
      status?: string,
      intents?: Array<Dict<string>>,
      totalCost?: number,
      tax?: number,
      subtotal?: number,
      address?: ShippingInfo,
      currency?: string,
      currencySymbol?: string,
      trackingNumber?: string,
      shippingIntent?: string,
      shippingCost?: number,
      uid?: string,
      merchantUID?: string,
      trackingLink?: string
      ) {

      this.orderID = orderID ?? ""
      this.timestamp = timestamp ?? new Date()
      this.products = products ?? []
      this.status = status ?? "cancelled"
      this.intents = intents ?? []
      this.totalCost = totalCost ?? 0
      this.tax = tax ?? 0
      this.subtotal = subtotal ?? 0
      this.address = address
      this.currency = currency ?? "cad"
      this.currencySymbol = currencySymbol ?? "$"
      this.trackingNumber = trackingNumber
      this.shippingIntent = shippingIntent
      this.shippingCost = shippingCost ?? 0
      this.uid = uid ?? ""
      this.merchantUID = merchantUID
      this.trackingLink = trackingLink ?? ''

    }
}