export class Plan {

    name: string
    code: string
    id: string
    price: number
    css: string
    text: string
    available: boolean

    constructor(
      name?: string,
      code?: string,
      id?: string,
      price?: number,
      css?: string,
      text?: string,
      available?: boolean
    ) {
      this.name = name ?? 'THRED CORE PLAN'
      this.code = code ?? 'core'
      this.id = id ?? ''
      this.price = price ?? 3700
      this.css = css ?? 'gradient',
      this.text = text ?? 'info'
      this.available = available ?? false
    }
}
