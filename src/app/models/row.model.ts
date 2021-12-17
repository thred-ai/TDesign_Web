export class Row {

    text?: string
    products?: Array<string>
    smart_products?: number
    type?: number
    imgs?: Array<string>
    grid_row?: number

    constructor(
      text?: string,
      products?: Array<string>,
      smart_products?: number,
      type?: number,
      imgs?: Array<string>,
      grid_row?: number
    ) {

      this.text = text
      this.products = products ?? []
      this.smart_products = smart_products
      this.type = type
      this.imgs = imgs ?? []
      this.grid_row = grid_row ?? 0
    }
}