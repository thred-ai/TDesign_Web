
export class Country {
  name: string
  flag: string
  name_full: string
  currency_name: string
  currency_symbol: string
  rate: number
  is_main_currency: boolean
  shipping_rate_usd: number

  constructor(
    name?: string,
    flag?: string,
    name_full?: string,
    currency_name?: string,
    currency_symbol?: string,
    rate?: number,
    is_main_currency?: boolean,
    shipping_rate_usd?: number

    ) {

    this.name = name ?? ""
    this.name_full = name_full ?? ""
    this.flag = flag ?? "";
    this.currency_name = currency_name ?? "";
    this.currency_symbol = currency_symbol ?? "";
    this.rate = rate ?? 1;
    this.is_main_currency = is_main_currency ?? false;
    this.shipping_rate_usd = shipping_rate_usd ?? 0
  }
}