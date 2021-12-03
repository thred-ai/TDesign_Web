export class Row {

    text?: string
    products?: Array<string>
    smart_products?: number
    type?: number
    img?: string

    constructor(
      text?: string,
      products?: Array<string>,
      smart_products?: number,
      type?: number,
      img?: string,
    ) {

      this.text = text
      this.products = products
      this.smart_products = smart_products
      this.type = type
      this.img = img
    }
}