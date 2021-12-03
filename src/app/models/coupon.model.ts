
export class Coupon {
  code: string
  amt: number
  style: number
  products: Array<string>
  auto: boolean
  type: string
  threshold: number

  constructor(
    code?: string,
    amt?: number,
    products?: Array<string>,
    auto?: boolean,
    type?: string,
    threshold?: number,
    style?: number
    ) {

    this.code = code ?? ""
    this.amt = amt ?? 0
    this.products = products ?? []
    this.auto = auto ?? false
    this.type = type ?? ''
    this.threshold = threshold ?? 0
    this.style = style ?? 0
  }
}