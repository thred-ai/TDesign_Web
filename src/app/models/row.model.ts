export class Row {

    text?: string
    products?: Array<string>
    smart_products?: number
    type?: number
    imgs?: Array<string>
    imgLinks?: Array<string>
    grid_row?: number
    html?: string
    animations?: string

    constructor(
      text?: string,
      products?: Array<string>,
      smart_products?: number,
      type?: number,
      imgs?: Array<string>,
      grid_row?: number,
      html?: string,
      animations?: string,
      imgLinks?: Array<string>
    ) {

      this.text = text
      this.products = products ?? []
      this.smart_products = smart_products
      this.type = type
      this.imgs = imgs ?? []
      this.grid_row = grid_row ?? 0
      this.html = html ?? ''
      this.animations = animations ?? ''
      this.imgLinks = imgLinks ?? []
    }
}