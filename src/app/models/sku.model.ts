export class SKU {

    sku?: string
    type?: string
    size?: string

    constructor(
      sku?: string,
      type?: string,
      size?: string
    ) {
      this.sku = sku ?? ''
      this.type = type ?? ''
      this.size = size ?? ''
    }
}